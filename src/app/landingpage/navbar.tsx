import Image from "next/image";
import LandingButton from "./components/LandingButton";
import ResponsiveImage from "./components/ResponsiveImage";

const navbar = () => {
  return (
    <header className="md:m-4 m-2 md:border-gray-200 md:rounded-3xl md:border-[3px]">
      <div className="md:flex hidden items-center mx-[5%]">
        <div className="my-auto mr-auto">
          <ResponsiveImage src="/img/lp_icon_medium.png" width={300} height={300} alt="logo bengkod" className="hidden md:block w-[269px] h-[82px]" />

          {/* <img
            src="./img/lp_icon_medium.png"
            className="hidden md:block min-h-[82px] min-w-[269px] max-h-[82px] max-w-[269px]"
            alt="bengkel Koding Logo"
          /> */}
          {/* <img
            src="./img/lp_icon_sm.png"
            className="mx-2 min-h-[40px] min-w-[165px] max-h-[40px] max-w-[165px] md:hidden"
            alt="bengkel Koding Logo"
          /> */}
        </div>
        <div className="flex md:justify-between md:text-[16px] text-primary-900 font-semibold gap-x-[100px]">
          <a
            href="#beranda"
            className=""
          >
            Beranda
          </a>
          <a
            href="#tentang_kami"
            className=""
          >
            Tentang Kami
          </a>
          <a
            href="#tutorial"
            className=""
          >
            Tutorial
          </a>
        </div>
        <div className="flex ml-auto my-auto gap-x-4">
          <LandingButton>Masuk</LandingButton>
          <LandingButton>Daftar</LandingButton>
        </div>
      </div>

      {/* RUN IN MOBILE */}
      <div className="flex md:hidden flex-wrap items-center justify-between p-2">
        <ResponsiveImage src="/img/lp_icon_sm.png"  width={150} height={40} alt="logo bengkod" className="md:hidden block w-[160px] h-[40px]"/>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary-900 rounded-lg md:hidden focus:ring-2 focus:ring-blue-200"
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
              stroke-width="3"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full justify-center md:hidden"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="bg-white">
              <a
                href="#"
                className="block py-2 mx-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Login
              </a>
            </li>
            <li className="bg-white">
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
    </header>
  );
};

export default navbar;
