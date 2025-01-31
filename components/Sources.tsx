import SourceCard from "./SourceCard";

export default function Sources({
  sources,
  isLoading,
}: {
  sources: { name: string; url: string }[];
  isLoading: boolean;
}) {
  return (
    <div className="container h-auto w-full shrink-0 rounded-2xl border border-solid border-saraswati-primary bg-saraswati-light p-5 lg:p-10">
      <div className="flex items-start gap-4 pb-3 lg:pb-3.5">
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
            d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75-3.75h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" 
          />
        </svg>
        <h3 className="text-base font-semibold uppercase leading-[152.5%] text-saraswati-accent">
          Sources
        </h3>
      </div>
      <div className="flex w-full max-w-[890px] flex-wrap content-center items-center gap-[15px]">
        {isLoading ? (
          <>
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-saraswati-primary" />
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-saraswati-primary" />
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-saraswati-primary" />
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-saraswati-primary" />
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-saraswati-primary" />
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-saraswati-primary" />
          </>
        ) : sources.length > 0 ? (
          sources.map((source) => (
            <SourceCard source={source} key={source.url} />
          ))
        ) : (
          <div className="text-saraswati-text">Could not fetch sources.</div>
        )}
      </div>
    </div>
  );
}
