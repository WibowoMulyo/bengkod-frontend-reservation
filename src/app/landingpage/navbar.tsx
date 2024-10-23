const navbar = () => {
  return (
    <div className="">
      <nav className="bg-white md:">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <div className="flex items-center md:shadow-md md:w-full md:col-auto md:rounded-lg md:py">
            <div className="flex items-center">
              <img
                src="./img/lp_icon_medium.png"
                className="hidden md:block h-[82px] w-[269px]"
                alt="bengkel Koding Logo"
              />
              <img
                src="./img/lp_icon_sm.png"
                className="h-[40px] w-[165px] md:hidden"
                alt="bengkel Koding Logo"
              />
            </div>
            <div className="hidden md:flex md:justify-center md:items-center">
              <div className="flex md:w-[363px]">
                <a
                  href="#"
                  className="md:text-[16px] bg-[#1E3A8B] text-[#1E3A8B] md:bg-transparent"
                >
                  Beranda
                </a>
                <h1 className="md:text-[16px]">Tentang Kami</h1>
                <h1 className="md:text-[16px]">Tutorial</h1>
              </div>
              <div className="flex">
                <button
                  className="
              text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
              text-sm px-5 py-2.5 me-2 mb-2
              md:text-2xl md:py-4 md:my-4
              "
                >
                  <h3>Masuk</h3>
                </button>
                <button
                  className="
              text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
              text-sm px-5 py-2.5 me-2 mb-2
              md:text-2xl md:px-8 md:py-4 md:my-4
              "
                >
                  <h3>Daftar</h3>
                </button>
              </div>
            </div>
          </div>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#1E3A8B] rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-blue-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full justify-center md:hidden"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 mx-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Masuk
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 mx-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Daftar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
