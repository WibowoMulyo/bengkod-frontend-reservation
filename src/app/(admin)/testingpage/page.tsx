'use client'
import SimpleCard from "@/components/card/SimpleCard";
import WhiteCard from "@/components/card/WhiteCard";
import GrayInput from "@/components/input/GrayInput";
import ResponsiveImage from "@/components/ResponsiveImage";
import ContentCellTable from "@/components/table/ContentCellTable";
import SecondaryHeaderCellTable from "@/components/table/SecondaryHeaderCellTable";
import { useRef } from "react";

export default function Test() {
  const input = useRef(null)
  function checkActive() {
    console.log(input.current)
  }
  return (
    <WhiteCard className="p-6">
      <nav className="flex flex-col gap-y-4">
        {/* Jadiin komponen */}
        
        <div className="text-gray-500 font-bold text-3xl capitalize">
          <h1>Pesan</h1>
        </div>
      </nav>
    </WhiteCard>
  )
}