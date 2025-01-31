const SimilarTopics = ({
  similarQuestions,
  handleDisplayResult,
  reset,
}: {
  similarQuestions: string[];
  handleDisplayResult: (item: string) => void;
  reset: () => void;
}) => {
  return (
    <div className="container flex h-auto w-full shrink-0 gap-4 rounded-2xl border border-solid border-saraswati-primary bg-saraswati-light p-5 lg:p-10">
      <div className="hidden lg:block">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6 text-saraswati-secondary"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" 
          />
        </svg>
      </div>
      <div className="flex-1 divide-y divide-saraswati-primary/30">
        <div className="flex gap-4 pb-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6 text-saraswati-secondary block lg:hidden"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" 
            />
          </svg>
          <h3 className="text-base font-semibold uppercase text-saraswati-accent">
            Related Questions
          </h3>
        </div>

        <div className="max-w-[890px] space-y-[15px] divide-y divide-saraswati-primary/30">
          {similarQuestions.length > 0 ? (
            similarQuestions.map((item) => (
              <button
                className="flex w-full cursor-pointer items-center gap-4 pt-3.5 group"
                key={item}
                onClick={() => {
                  reset();
                  handleDisplayResult(item);
                }}
              >
                <div className="flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-5 h-5 text-saraswati-secondary group-hover:text-saraswati-accent transition-colors"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" 
                    />
                  </svg>
                </div>
                <p className="text-sm font-light leading-[normal] text-saraswati-text group-hover:text-saraswati-accent transition-colors">
                  {item}
                </p>
              </button>
            ))
          ) : (
            <>
              <div className="h-10 w-full animate-pulse rounded-md bg-saraswati-primary" />
              <div className="h-10 w-full animate-pulse rounded-md bg-saraswati-primary" />
              <div className="h-10 w-full animate-pulse rounded-md bg-saraswati-primary" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimilarTopics;
