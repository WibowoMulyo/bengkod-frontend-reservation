'use client'
import SimpleCard from "@/components/card/SimpleCard";
import WhiteCard from "@/components/card/WhiteCard";
import GrayInput from "@/components/input/GrayInput";
import ResponsiveImage from "@/components/ResponsiveImage";
import ContentCellTable from "@/components/table/ContentCellTable";
import SecondaryHeaderCellTable from "@/components/table/SecondaryHeaderCellTable";
import { useRef } from "react";

export default function dashboard() {
  const input = useRef(null)
  function checkActive() {
    console.log(input.current)
  }
  return (
    <WhiteCard className="p-6">
      <nav className="flex flex-col gap-y-4">
        {/* Jadiin komponen */}
        <div className="border-[1px] border-gray-300 w-full rounded-xl px-3">
          <div className="flex gap-x-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search fill-gray-300" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <input className="border-none py-2 w-full" placeholder="search reservation number" ref={input} onChange={checkActive} />
          </div>
        </div>
        <div className="text-gray-500 font-bold text-2xl capitalize">
          <h1>Halo, Admin</h1>
        </div>
        <div className="flex gap-x-4">
          <div className="bg-yellow-500 rounded-xl p-4 text-white w-[240px] h-[120px] flex">
            <h2 className="font-normal text-[14px]">Jumlah peminjam hari ini</h2>
            <p className="text-3xl font-bold text-right mt-auto">4/60</p>
          </div>
          <div className="bg-green-500 rounded-xl p-4 text-white w-[240px] h-[120px] flex">
            <h2 className="font-normal text-[14px]">Jumlah meja:</h2>
            <p className="text-3xl font-bold text-right mt-auto ml-auto">4/60</p>
          </div>
          <div className="bg-gray-200 rounded-xl p-4 text-white w-[240px] h-[120px] flex">
            {/* <h2 className="font-normal text-[14px]">Jumlah meja:</h2>
            <p className="text-3xl font-bold text-right mt-auto ml-auto">4/60</p> */}
          </div>
        </div>
      </nav>
      {/* <div className=""></div> */}
      <section className="mt-4">
        <div className="text-gray-500 font-semibold flex gap-x-2">
          <h2>Timeline</h2>
          <p className="bg-gray-100 p-1 px-4 rounded-lg font-semibold text-xs">Diperbarui 5 menit yang lalu</p>
        </div>
        <div className="rounded-2xl shadow-primary flex">
          <ResponsiveImage src="/image/meeting.png" alt="meeting.png" width={191} height={191} className="w-[191px] my-auto mx-auto" />
          <div className="bg-gray-100 ml-auto rounded-r-xl flex flex-col items-stretch">
            <div className="flex p-4 gap-x-4">
              <p className="font-medium text-primary-500 text-sm">Baru saja 09:04 am</p>
              <div className="flex flex-col gap-y-1">
                <h3 className="font-medium text-black text-sm">BEM FIK</h3>
                <p className="font-normal text-gray-500 text-xs">oleh 11123456789@mhs.dinus.ac.id</p>
                <div className="flex">
                  <p className="mr-auto text-xs">Wed, 8.00 am - 10.00 am</p>
                  <p className="text-xs">2 jam</p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-primary-600 mx-4">
              <hr />
            </div>
            <div className="flex p-4 gap-x-4">
              <p className="font-medium text-primary-500 text-sm">Baru saja 09:04 am</p>
              <div className="flex flex-col gap-y-1">
                <h3 className="font-medium text-black text-sm">BEM FIK</h3>
                <p className="font-normal text-gray-500 text-xs">oleh 11123456789@mhs.dinus.ac.id</p>
                <div className="flex">
                  <p className="mr-auto text-xs">Wed, 8.00 am - 10.00 am</p>
                  <p className="text-xs">2 jam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4 flex flex-col gap-y-4">
        <div className="text-gray-500 font-semibold flex gap-x-2">
          <h2>Reservation Report</h2>
        </div>
        <div className="grid grid-cols-5 font-normal border-b-2 border-primary-100 pb-4">
          <SecondaryHeaderCellTable className="col-span-2">Peminjam</SecondaryHeaderCellTable>
          <SecondaryHeaderCellTable className="col-span-1">Nomor Meja</SecondaryHeaderCellTable>
          <SecondaryHeaderCellTable className="col-span-1">Status</SecondaryHeaderCellTable>
          <SecondaryHeaderCellTable className="col-span-1">Tanggal</SecondaryHeaderCellTable>
        </div>

        <div className="grid grid-cols-5 font-medium">
          <ContentCellTable className="col-span-2" indexcolortext={2}>A11.2022.14822</ContentCellTable>
          <ContentCellTable className="col-span-1" indexcolortext={2}>Table-01</ContentCellTable>
          <ContentCellTable className="col-span-1" indexcolortext={4}>Pending</ContentCellTable>
          <ContentCellTable className="col-span-1" indexcolortext={2}>24 Jan 2021</ContentCellTable>
        </div>

        <div className="grid grid-cols-5 font-medium">
          <ContentCellTable className="col-span-2" indexcolortext={2}>A11.2022.14822</ContentCellTable>
          <ContentCellTable className="col-span-1" indexcolortext={2}>Table-01</ContentCellTable>
          <ContentCellTable className="col-span-1" indexcolortext={4}>Pending</ContentCellTable>
          <ContentCellTable className="col-span-1" indexcolortext={2}>24 Jan 2021</ContentCellTable>
        </div>

        <div className="grid grid-cols-5 font-medium">
          <ContentCellTable className="col-span-2" indexcolortext={2}>A11.2022.14822</ContentCellTable>
          <ContentCellTable className="col-span-1" indexcolortext={2}>Table-01</ContentCellTable>
          <ContentCellTable className="col-span-1" indexcolortext={4}>Pending</ContentCellTable>
          <ContentCellTable className="col-span-1" indexcolortext={2}>24 Jan 2021</ContentCellTable>
        </div>

        <div className="grid grid-cols-5 font-medium">
          <ContentCellTable className="col-span-2" indexcolortext={2}>A11.2022.14822</ContentCellTable>
          <ContentCellTable className="col-span-1" indexcolortext={2}>Table-01</ContentCellTable>
          <ContentCellTable className="col-span-1" indexcolortext={4}>Pending</ContentCellTable>
          <ContentCellTable className="col-span-1" indexcolortext={2}>24 Jan 2021</ContentCellTable>
        </div>
      </section>
    </WhiteCard>
  )
}