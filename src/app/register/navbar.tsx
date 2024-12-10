import HeaderLayout from "../component/layouts/HeaderLayout";
import PrimaryButton from "../component/Button/PrimaryButton";
import Navlink from "../component/Link/NavLink";
import Image from "next/image";
import CustomLink from "../component/Link/CustomLink";
const navbar = () => {
  return (
    <HeaderLayout>
      <div className="flex lg:mx-20 mx-5 relative items-center">
        <div className="mr-auto w-[220px] h-[90px]">
          <Image src={"/image/Bengkod_Logo.png"}
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={220}
            height={90} alt="logo bengkod" />
        </div>
        <div className="flex mr-20 gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full items-center">
          <Navlink
            statichref="#"
            href="#"
          >
            Beranda
          </Navlink>
          <Navlink
            statichref="#"
            href="#"
          >
            Tentang kami
          </Navlink>
          <Navlink
            statichref="#"
            href="#"
          >
            Tutorial
          </Navlink>
        </div>
        <div className="my-auto flex gap-x-4 items-center">
          <CustomLink href="#" showline={false}>
            <PrimaryButton className="font-normal px-4">
              Masuk
            </PrimaryButton>
          </CustomLink>
          <CustomLink href="#" showline={false}>
            <PrimaryButton className="font-normal px-4">
              Daftar
            </PrimaryButton>
          </CustomLink>
        </div>
      </div>
    </HeaderLayout>
    // <div className="">
    //   <nav className="">
    //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //       <div className="flex items-center bg-white md:border-[3px] md:border-gray-200 md:w-full md:col-auto md:rounded-[20px] md:py-6 mx-">
    //         <div className="flex mr-auto">
    //           <img
    //             src="./image/benlogo.png"
    //             className="h-12"
    //             alt="bengkel Koding Logo"
    //           />
    //           <div className="mx-2">
    //             <h1 className="my-2 font-bold text-lg md:my-0">
    //               Bengkel Koding
    //             </h1>
    //             <p className="hidden md:block text-xs text-gray-600">
    //               Reservation Space
    //             </p>
    //           </div>
    //         </div>
    //           <div className="md:flex">
    //               <a
    //                 href="#"
    //                 className="md:mx-6 md:text-lg bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
    //               >
    //                 Beranda
    //               </a>
    //             <h1 className="md:mx-6 md:text-lg">Tentang Kami</h1>
    //             <h1 className="md:mx-6 md:text-lg">Tutorial</h1>
    //           </div>
    //           <div className="flex gap-x-4 ml-auto">
    //             <PrimaryButton className="font-normal px-4">
    //               Masuk
    //             </PrimaryButton>
    //             <PrimaryButton className="font-normal px-4">
    //               Daftar
    //             </PrimaryButton>
    //           </div>
    //         <div className="hidden md:flex md:justify-center md:items-center">
    //         </div>
    //       </div>

    //       <button
    //         data-collapse-toggle="navbar-default"
    //         type="button"
    //         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-900 rounded-lg md:hidden hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-600"
    //         aria-controls="navbar-default"
    //         aria-expanded="false"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="w-5 h-5"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 17 14"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M1 1h15M1 7h15M1 13h15"
    //           />
    //         </svg>
    //       </button>
    //       <div
    //         className="hidden w-full justify-center md:hidden"
    //         id="navbar-default"
    //       >
    //         <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 mx-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //               aria-current="page"
    //             >
    //               Login
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 mx-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             >
    //               Register
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default navbar;
