const navbar = () => {
  return (
    <div className="">
      <nav className="bg-white ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center md:shadow-md md:w-full md:col-auto md:rounded-lg md:py-6">
            <div className="flex md:mx-10">
              <img
                src="./image/benlogo.png"
                className="h-12"
                alt="bengkel Koding Logo"
              />
              <div className="mx-2">
                <h1 className="my-2 font-bold text-lg md:my-0">
                  Bengkel Koding
                </h1>
                <p className="hidden md:block text-xs text-gray-600">
                  Reservation Space
                </p>
              </div>
            </div>
            <div className="hidden md:flex md:justify-center md:items-center">
              <div className="flex md:mx-24">
                <a
                  href="#"
                  className="md:mx-6 md:text-lg bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  Beranda
                </a>
                <h1 className="md:mx-6 md:text-lg">Tentang Kami</h1>
                <h1 className="md:mx-6 md:text-lg">Tutorial</h1>
              </div>
              <div className="flex md:mx-6">
                <button
                  className="md:mx-4
              text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
              text-sm px-5 py-2.5 me-2 mb-2
              md:text-2xl md:py-4 md:my-4
              "
                >
                  <h3>Log In</h3>
                </button>
                <button
                  className="md:mx-4
              text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
              text-sm px-5 py-2.5 me-2 mb-2
              md:text-2xl md:px-8 md:py-4 md:my-4
              "
                >
                  <h3>Sign Up</h3>
                </button>
              </div>
            </div>
          </div>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-900 rounded-lg md:hidden hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-600"
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
                  className="block py-2 mx-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 mx-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Register
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
