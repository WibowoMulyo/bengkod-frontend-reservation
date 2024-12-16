'use client'

import Image from "next/image";
import Navlink from "@/components/link/NavLink";
import CustomLink from "../../link/CustomLink";
import LogoutButton from "@/components/button/LogoutButton";
import { signOut, useSession } from "next-auth/react";
import HeaderLayout from "../HeaderLayout";
import ResponsiveImage from "../../ResponsiveImage";
const renderDisplay = () => {
  const { data: session } = useSession()
  return (
    <div className="w-full">
      <HeaderLayout>
        <div className="flex lg:mx-20 mx-5 relative items-center">
          <div className="mr-auto w-[220px] h-[90px]">
            <ResponsiveImage
              src={"/image/Bengkod_Logo.png"}
              alt="logo bengkod"
              width={220}
              height={90} />
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
                    <ResponsiveImage
                      src={"/image/profile-image.jpeg"}
                      width={60}
                      height={60}
                      alt="logo profile"
                      photoclassName="rounded-full" />
                  </div>
                </button>
                <ul tabIndex={0} className="dropdown-content z-[1] w-52 p-2 shadow-md rounded-lg bg-white border-gray-100 border-2">
                  <li>
                    <CustomLink href="/dashboard/profile" showline={false} className="font-semibold w-auto p-2 hover:bg-primary-900 hover:text-white rounded-md" whenactive="text-white bg-primary-900" whennotactive="text-gray-700">
                      Profile
                    </CustomLink>
                  </li>
                  <li>
                    <LogoutButton onClick={() => signOut()} className="w-full text-left">
                      Logout
                    </LogoutButton>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </HeaderLayout>
    </div>
  )
}

export default renderDisplay;