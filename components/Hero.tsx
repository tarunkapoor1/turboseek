import Image from "next/image";
import { FC } from "react";
import InputArea from "./InputArea";

type THeroProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: () => void;
};

const Hero: FC<THeroProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
}) => {
  const handleClickSuggestion = (value: string) => {
    setPromptValue(value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-saraswati-accent pb-7 pt-2 text-center text-3xl font-light leading-[normal] lg:text-[48px]">
        Ask anything, find wisdom
      </h2>

      {/* input section */}
      <div className="w-full max-w-[708px] pb-6">
        <InputArea
          promptValue={promptValue}
          setPromptValue={setPromptValue}
          handleDisplayResult={handleDisplayResult}
        />
      </div>

      {/* Suggestions section */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 pb-[30px] lg:flex-nowrap lg:justify-normal">
        {suggestions.map((item) => (
          <div
            className="flex h-[35px] cursor-pointer items-center justify-center gap-[5px] rounded-full border border-solid border-saraswati-primary bg-saraswati-light px-4 py-2 hover:bg-saraswati-primary transition-colors"
            onClick={() => handleClickSuggestion(item?.name)}
            key={item.id}
          >
            <span className="text-sm font-light leading-[normal] text-saraswati-text">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Footer text */}
      <p className="text-center text-sm font-light leading-[normal] text-saraswati-text">
        Discover knowledge through meaningful conversations
      </p>
    </div>
  );
};

type suggestionType = {
  id: number;
  name: string;
};

const suggestions: suggestionType[] = [
  {
    id: 1,
    name: "What is the meaning of wisdom?",
  },
  {
    id: 2,
    name: "How can I find inner peace?",
  },
  {
    id: 3,
    name: "Tell me about meditation techniques",
  },
];

export default Hero;
