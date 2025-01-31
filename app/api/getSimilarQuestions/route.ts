import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let { question } = await request.json();

  try {
    const response = await fetch("https://api.groq.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-r1-distill-llama-70b",
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant that helps the user to ask related questions, based on user's original question. Please identify worthwhile topics that can be follow-ups, and write 3 questions no longer than 20 words each. Please make sure that specifics, like events, names, locations, are included in follow up questions so they can be asked standalone. For example, if the original question asks about "the Manhattan project", in the follow up question, do not just say "the project", but use the full name "the Manhattan project". Your related questions must be in the same language as the original question.

            Return ONLY a JSON array of 3 strings, nothing else. Format: ["question1", "question2", "question3"]. Here is the user's original question:`,
          },
          {
            role: "user",
            content: question,
          },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`Groq API error: ${response.statusText}`);
    }

    const data = await response.json();
    let content = data.choices?.[0].message?.content || "[]";
    
    // Try to parse the content as JSON, if it fails, extract array from the string
    try {
      const questions = JSON.parse(content);
      if (Array.isArray(questions) && questions.length === 3) {
        return NextResponse.json(questions);
      }
      // If not an array of 3 strings, try to extract from the string
      throw new Error('Invalid format');
    } catch (e) {
      // Try to extract array from string using regex
      const match = content.match(/\[(.*)\]/);
      if (match) {
        const questions = match[1]
          .split(',')
          .map((q: string) => q.trim().replace(/^["']|["']$/g, ''))
          .filter((q: string) => q.length > 0)
          .slice(0, 3);
        
        if (questions.length === 3) {
          return NextResponse.json(questions);
        }
      }
      // If all parsing fails, return empty array
      return NextResponse.json([]);
    }
  } catch (error) {
    console.error("Error getting similar questions:", error);
    return NextResponse.json([], { status: 500 });
  }
}
