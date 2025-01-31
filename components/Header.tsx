import Image from "next/image";

const Header = () => {
  return (
    <div className="container h-[80px] px-4 lg:h-[100px] lg:px-0">
      <div className="grid h-full grid-cols-12 items-center">
        <div className="col-span-3"></div>
        <div className="col-span-6 flex flex-col items-center justify-center">
          <a href="/" className="flex flex-col items-center">
            <Image
              src="/img/saraswati-logo.svg"
              alt="Saraswati"
              width={50}
              height={50}
              className="mb-2"
            />
            <h1 className="text-saraswati-accent text-2xl font-semibold mb-1">Saraswati</h1>
            <p className="text-saraswati-text text-sm font-light">Wisdom flows through every answer</p>
          </a>
        </div>
        <div className="col-span-3 flex justify-end">
          <button className="text-saraswati-text hover:text-saraswati-accent transition-colors">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-4.037m-7.5-4.037c.005.219.051.426.118.63a9.04 9.04 0 01-1.972 1.972c-.207.067-.414.113-.63.118M12 10.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm0 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm0 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
              </svg>
              English
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
