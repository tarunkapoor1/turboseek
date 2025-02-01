import { NextResponse } from "next/server";
import { z } from "zod";

const TAVILY_API_KEY = process.env["TAVILY_API_KEY"];

if (!TAVILY_API_KEY) {
  throw new Error("TAVILY_API_KEY is required");
}

export async function POST(request: Request) {
  const { question } = await request.json();

  const response = await fetch("https://api.tavily.com/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TAVILY_API_KEY}`,
    },
    body: JSON.stringify({
      query: question,
      search_config: {
        include_domains: [],
        exclude_domains: ["youtube.com"],
      },
      results_per_page: 6,
    }),
  });

  const rawJSON = await response.json();

  const TavilyJSONSchema = z.object({
    results: z.array(
      z.object({
        title: z.string(),
        url: z.string(),
      })
    ),
  });

  const data = TavilyJSONSchema.parse(rawJSON);

  const results = data.results.map((result) => ({
    name: result.title,
    url: result.url,
  }));

  return NextResponse.json(results);
}
