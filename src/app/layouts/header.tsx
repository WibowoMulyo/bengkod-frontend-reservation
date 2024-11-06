"use client";

import Image from "next/image";
import Link from "next/link";
// import NavLink from "@/pages/component/NavLink";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navlink from "../component/NavLink";
import CustomLink from "../component/CustomLink";

// import { NavLink } from "@/app/component/NavLink";
const renderDisplay = () => {
  return (
    <div className="w-full">
      <div className="border-2 border-[rgb(236,238,239)] rounded-3xl m-4 bg-white hidden md:block">
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
              statichref="/dashboard/calendar"
              href="/dashboard/calendar"
            >
              Dashboard
            </Navlink>
            <Navlink
              statichref="/reservation"
              href="/reservation"
            >
              Reservation
            </Navlink>
          </div>
          <div className="my-auto flex gap-x-4 items-center">
            <div className="xl:block hidden">
              <div className="p-1 bg-[#FFE3E3] border-[#E59898] italic font-normal border-2 rounded-xl text-[14px] text-wrap text-[#667085]">
                Sisa waktu peminjaman tersisa 2 jam
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div className="" tabIndex={0}>
                <button>
                  <div className="w-[60px]">
                    <Image src={"/image/profile-image.jpeg"}
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                      width={60}
                      height={60} alt="logo profile"
                      className="rounded-full"
                    />
                  </div>
                </button>
                <ul tabIndex={0} className="dropdown-content z-[1] w-52 p-2 shadow-md rounded-lg bg-white border-gray-100 border-2">
                  <li>
                    <CustomLink href="#" showline={false} className="font-semibold w-auto mb-2 p-2 hover:bg-primary-900 hover:text-white rounded-md" 
                    whenactive="text-white bg-primary-900" whennotactive="text-gray-700">
                      Notifikasi
                    </CustomLink>
                  </li>
                  <li>
                    <CustomLink href="/dashboard/profile" showline={false} className="font-semibold w-auto p-2 hover:bg-primary-900 hover:text-white rounded-md" whenactive="text-white bg-primary-900" whennotactive="text-gray-700">
                      Profile
                    </CustomLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* <CustomLink href="/dashboard/profile" showline={false}>
            </CustomLink> */}
          </div>
        </div>
      </div>

      <div className="flex m-3 items-center md:hidden">
        <div className="mr-auto">

          {/* <img src="/image/Bengkod_Logo.png" className="lg:hidden w-[150px]" alt="" /> */}
          <div className="lg:hidden w-[150px] h-auto">
            <Image src={"/image/Bengkod_Logo.png"}
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={150}
              height={150} alt="logo bengkod" />
          </div>
        </div>
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#1E3A8B" className="bi bi-list" viewBox="0 0 16 16">
            <path strokeWidth="1" stroke="#1E3A8B" fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default renderDisplay;