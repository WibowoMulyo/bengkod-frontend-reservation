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
        <h1>Pesan</h1>
      </div>
      <div className="border-[1px] border-black rounded-lg p-4">
          <div className="flex gap-x-2 mb-8">
            <ResponsiveImage
              src={"/image/profile1.png"}
              width={32}
              height={32}
              alt="logo profile"
              className="w-[32px] h-[32px]"
              photoclassName="rounded-full" />

            <div className="text-black flex flex-col gap-y-2 mr-auto">
              <h3 className="font-semibold text-sm">Nisha Kumar</h3>
              <p className="font-normal text-xs">A11.2022.14124</p>
              <p className="font-normal text-xs">To: Admin</p>
            </div>

            <p className="text-xs">September 03, 2022 at 10.20</p>
          </div>

          <p className="font-normal text-xs">We’re in the early stages of planning a neighborhood garden. Each family would be in charge of a plot. Bring your own watering can :) Let me know if you are interested.</p>
      </div>

      <div className="border-[1px] border-black rounded-lg mt-4">
        <div className="p-4">
          <div className="flex gap-x-2 mb-8">
            <ResponsiveImage
              src={"/image/profile1.png"}
              width={32}
              height={32}
              alt="logo profile"
              className="w-[32px] h-[32px]"
              photoclassName="rounded-full" />

            <div className="text-black flex flex-col gap-y-2 mr-auto">
              <h3 className="font-semibold text-sm">Nisha Kumar</h3>
              <p className="font-normal text-xs">A11.2022.14124</p>
              <p className="font-normal text-xs">To: Admin</p>
            </div>

            <p className="text-xs">September 03, 2022 at 10.20</p>
          </div>

          <p className="font-normal text-xs">We’re in the early stages of planning a neighborhood garden. Each family would be in charge of a plot. Bring your own watering can :) Let me know if you are interested.</p>
        </div>
      </div>
    </WhiteCard>
  )
}