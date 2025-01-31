const Footer = () => {
  return (
    <>
      <div className="container flex min-h-[72px] items-center justify-between border-t border-saraswati-primary px-4 pb-3 pt-5 lg:min-h-[72px] lg:px-0 lg:py-5">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="relative h-8 w-8">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:opacity-80 transition-opacity">
              <path d="M20 4C14.5 4 10 8.5 10 14C10 19.5 14.5 24 20 24C25.5 24 30 19.5 30 14C30 8.5 25.5 4 20 4Z" fill="#E6D5F7"/>
              <path d="M32.5 20C28.9 20 26 22.9 26 26.5C26 30.1 28.9 33 32.5 33C36.1 33 39 30.1 39 26.5C39 22.9 36.1 20 32.5 20Z" fill="#E6D5F7"/>
              <path d="M7.5 20C3.9 20 1 22.9 1 26.5C1 30.1 3.9 33 7.5 33C11.1 33 14 30.1 14 26.5C14 22.9 11.1 20 7.5 20Z" fill="#E6D5F7"/>
              <path d="M20 28C16.4 28 13.5 30.9 13.5 34.5C13.5 38.1 16.4 41 20 41C23.6 41 26.5 38.1 26.5 34.5C26.5 30.9 23.6 28 20 28Z" fill="#E6D5F7"/>
              <circle cx="20" cy="20" r="8" fill="#8B0AA5"/>
            </svg>
          </div>
          <span className="text-base font-medium leading-[normal] text-saraswati-accent group-hover:text-saraswati-secondary transition-colors">
            Saraswati
          </span>
        </a>
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-saraswati-secondary hover:text-saraswati-accent transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-saraswati-secondary hover:text-saraswati-accent transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
