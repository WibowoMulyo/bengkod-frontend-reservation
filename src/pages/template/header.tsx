"use client";

import Image from "next/image";
import Link from "next/link";
import Navlink from "@/pages/component/NavLink";
import { useEffect } from "react";
import { useRouter } from "next/router";
const renderDisplay = () => {
  // const {route} = useRouter();
  return (
    <div className="w-full">
      <div className="border-2 border-[rgb(236,238,239)] rounded-3xl m-4 bg-white hidden md:block">
        <div className="flex lg:mx-20 mx-5 relative items-center">
          <div className="mr-auto">
            <img src="/image/Bengkod_Logo.png" className="w-[220px] h-[90px]" alt="" />
          </div>
          <div className="flex mr-20 gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full items-center">
            <Navlink
              href="dashboard"
              // active={window.location.pathname == "/dashboard"}
            >
              Dashboard
            </Navlink>
            <Navlink
              href="reservation"
              // active={window.location.pathname == "/reservation"}
            >
              Reservation
            </Navlink>
          </div>
          <div className="my-auto">
            <img src="/image/profile-image.jpeg" alt="" className="rounded-full w-[60px]" />
          </div>
        </div>
      </div>

      <div className="flex m-4 items-center md:hidden">
        <div className="mr-auto">
          <img src="/image/Bengkod_Logo.png" className="lg:hidden w-[150px]" alt="" />
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
