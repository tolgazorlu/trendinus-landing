const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav className="mt-4 relative max-w-6xl w-full bg-black/80 backdrop-blur-xl mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-2 ps-4 md:py-2 sm:mx-auto border border-purple-500/20 shadow-[0_0_30px_rgba(147,51,234,0.3)] rounded-xl">
          <div className="flex items-center">
            <a
              className="flex-none rounded-lg text-xl inline-block font-bold focus:outline-hidden focus:opacity-80 text-white bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent hover:from-purple-300 hover:via-pink-300 hover:to-purple-500 transition-all duration-300"
              href="../templates/personal/index.html"
              aria-label="Trendinus"
            >
              TRENDINUS
            </a>
            <div className="ms-1 sm:ms-2"></div>
          </div>
          <div className="flex items-center gap-2 md:order-4 md:ms-4">
            <a
              className="w-full sm:w-auto whitespace-nowrap py-2.5 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-purple-500/50 bg-gradient-to-r from-purple-600/80 to-pink-600/80 text-white hover:from-purple-500 hover:to-pink-500 focus:outline-hidden focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] transition-all duration-300"
              href="#"
            >
              🎮 Book a Call
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle flex justify-center items-center size-10 border border-purple-500/30 text-purple-300 rounded-lg hover:bg-purple-500/20 focus:outline-hidden focus:bg-purple-500/20 focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300"
                id="hs-navbar-header-floating-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-header-floating"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-header-floating"
              >
                <svg
                  className="hs-collapse-open:hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={3} x2={21} y1={6} y2={6} />
                  <line x1={3} x2={21} y1={12} y2={12} />
                  <line x1={3} x2={21} y1={18} y2={18} />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="hs-navbar-header-floating"
            className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
            aria-labelledby="hs-navbar-header-floating-collapse"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-6 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
              <a
                className="py-2 md:py-3 px-4 md:px-2 border-s-2 md:border-s-0 md:border-b-2 border-purple-400 font-semibold text-purple-300 hover:text-purple-200 focus:outline-hidden transition-colors duration-300"
                href="#"
                aria-current="page"
              >
                🏠 Home
              </a>
              <a
                className="py-2 md:py-3 px-4 md:px-2 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-300 hover:text-purple-300 hover:border-purple-400/50 focus:outline-hidden transition-all duration-300"
                href="#"
              >
                🎯 Work
              </a>
              <a
                className="py-2 md:py-3 px-4 md:px-2 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-300 hover:text-purple-300 hover:border-purple-400/50 focus:outline-hidden transition-all duration-300"
                href="#"
              >
                ⭐ Reviews
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
