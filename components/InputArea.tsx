import Image from "next/image";
import { FC } from "react";
import TypeAnimation from "./TypeAnimation";

type TInputAreaProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: () => void;
  disabled?: boolean;
  reset?: () => void;
};

const InputArea: FC<TInputAreaProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
  disabled,
  reset,
}) => {
  return (
    <form
      className="mx-auto flex h-[66px] w-full items-center justify-between rounded-full border border-saraswati-primary bg-white px-6 shadow-lg transition-shadow hover:shadow-xl"
      onSubmit={(e) => {
        e.preventDefault();
        if (reset) reset();
        handleDisplayResult();
      }}
    >
      <div className="flex items-center flex-grow">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-5 h-5 text-saraswati-secondary"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" 
          />
        </svg>
        <input
          type="text"
          placeholder="Ask anything..."
          className="w-full pl-4 text-lg font-light text-saraswati-text placeholder-saraswati-secondary/50 outline-none"
          disabled={disabled}
          value={promptValue}
          required
          onChange={(e) => setPromptValue(e.target.value)}
        />
      </div>
      <button
        disabled={disabled}
        type="submit"
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-saraswati-secondary hover:bg-saraswati-accent transition-colors disabled:pointer-events-none disabled:opacity-75"
      >
        {disabled ? (
          <div className="flex items-center justify-center">
            <TypeAnimation />
          </div>
        ) : (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-5 h-5 text-white"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
            />
          </svg>
        )}
      </button>
    </form>
  );
};

export default InputArea;
