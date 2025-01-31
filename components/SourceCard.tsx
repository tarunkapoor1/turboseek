import Image from "next/image";

const SourceCard = ({ source }: { source: { name: string; url: string } }) => {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-[79px] w-full items-center gap-3 rounded-xl border border-solid border-saraswati-primary bg-white px-3 py-2 transition-all hover:border-saraswati-secondary hover:shadow-md md:w-auto"
    >
      <div className="shrink-0">
        <Image
          unoptimized
          src={`https://www.google.com/s2/favicons?domain=${source.url}&sz=128`}
          alt={source.url}
          className="rounded-lg p-1"
          width={44}
          height={44}
        />
      </div>
      <div className="flex max-w-[192px] flex-col justify-center gap-2">
        <h6 className="line-clamp-2 text-sm font-medium leading-[normal] text-saraswati-text group-hover:text-saraswati-accent transition-colors">
          {source.name}
        </h6>
        <span className="truncate text-sm font-light text-saraswati-text/50">
          {source.url}
        </span>
      </div>
    </a>
  );
};

export default SourceCard;
