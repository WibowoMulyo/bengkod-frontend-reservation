'use client'
import WhiteCard from "@/components/card/WhiteCard";
import ResponsiveImage from "@/components/ResponsiveImage";
import { useRef } from "react";

export default function Pesan() {
  const input = useRef(null)
  function checkActive() {
    console.log(input.current)
  }
  return (
    <WhiteCard className="p-12">
      <div className="text-gray-500 font-semibold text-3xl capitalize mb-8 mr-8">
        <h1>Peminjam</h1>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="border-[1px] border-black rounded-2xl p-4">
          <div className="flex gap-x-2 items-center">
            <ResponsiveImage
              src={"/image/profile1.png"}
              width={32}
              height={32}
              alt="logo profile"
              className="w-[32px] h-[32px]"
              photoclassName="rounded-full" />
            <div className="text-black flex flex-col gap-x-2 mr-auto">
              <h3 className="font-semibold">Shiva Augusta</h3>
              <p className="text-xs">A11.2022.14823</p>
            </div>

            <div className="bg-yellow-500 p-2 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

            </div>
            <div className="bg-red-700 p-2 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>


            </div>
          </div>
        </div>
      </div>

    </WhiteCard>
  )
}