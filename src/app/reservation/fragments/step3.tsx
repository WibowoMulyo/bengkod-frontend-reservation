// import Calendar from "@/app/component/calendar/Calendar";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useState } from "react";
import StatusReservation from "./components/StatusReservation";
import SimpleCard from "@/app/component/SimpleCard";

interface props {
  step?: () => void,
  status: string,
}

const renderDisplay = ({ step, status }: props) => {
  return (
    <div className="my-[3.5%]">
      <div className="flex flex-col md:gap-y-[10%]">
        {/* START SECTION STEP FORM */}
        {/* RUN IN DESKTOP */}
        <div className="md:flex hidden w-full justify-center mx-auto items-center gap-3">
          {/* Step 1 */}
          <div className="rounded-lg p-4 bg-[#1e3a8b] mr-2">
          </div>
          <div className="font-semibold">
            Dates
          </div>
          <div className="w-[5%] border-black border-t-[3px]">
            <hr />
          </div>
          {/* Step 2 */}
          <div className="rounded-lg p-4 bg-[#1e3a8b] mr-2">
          </div>
          <div className="font-semibold">
            Tables
          </div>
          <div className="w-[5%] border-black border-t-[3px]">
            <hr />
          </div>
          {/* Step 3 */}
          <div className="rounded-lg p-4 bg-[#1e3a8b] mr-2">
          </div>
          <div className="font-semibold">
            Confirmation
          </div>
        </div>

        {/* RUN IN MOBILE */}
        <div className="mb-[14%] mt-[10%] md:hidden flex space-y-[8%] flex-col">
          <h1 className="text-center text-2xl font-bold">Reservation</h1>
          <div className="flex justify-center items-center gap-2">
            {/* Step 1 */}
            <div className="flex items-center relative">
              <div className="rounded-lg p-3 bg-[#1e3a8b] mr-2 mx-auto">
                <div className="font-normal text-sm absolute top-8 -left-4 text-[10px]">
                  Tanggal
                </div>
              </div>
              <div className="min-w-[76px] border-black border-t-[3px]">
                <hr />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center relative">
              <div className="rounded-lg p-3 bg-[#1e3a8b] mr-2 mx-auto">
                <div className="font-normal text-sm absolute top-8 -left-1 text-[10px]">
                  Meja
                </div>
              </div>
              <div className="min-w-[76px] border-black border-t-[3px]">
                <hr />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center relative">
              <div className="rounded-lg p-3 bg-[#1e3a8b] mr-2 mx-auto">
                <div className="font-normal text-sm absolute top-8 -left-8 text-[10px]">
                  Confirmation
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END SECTION STEP FORM */}

        {/* START INFORMATION DETAIL */}
        <div className="flex flex-col md:flex-row gap-8 md:w-4/5 mx-[3%] md:mx-auto justify-center lg:my-[3%] my-[2.5%]">
          {/* START RESERVATION DETAILS */}
          <div className="flex flex-col gap-y-4">
            {/* <StatusReservation status="1" /> */}
            <SimpleCard className="bg-white xl:w-[775px]">
              <div className="pb-4">
                <h1 className="font-extrabold">Reservation Details  </h1>
              </div>
              {/*START ROW 1 */}
              <div className="xl:grid grid-cols-3 gap-8 flex flex-col gap-y-4">
                <div className="col-span-1">
                  <h1 className="font-light italic md:text-[16px] text-[10px]">Guess</h1>
                  <div className="md:text-[15px] text-[11px] font-medium">
                    <p>example@mhs.dinus.ac.id</p>
                    <p>example@mhs.dinus.ac.id</p>
                    <p>example@mhs.dinus.ac.id</p>
                    <p>example@mhs.dinus.ac.id</p>
                  </div>
                </div>
                <div className="col-span-1">
                  <h1 className="font-light italic md:text-[16px] text-[10px]">From</h1>
                  <div className="md:text-[15px] text-[11px] font-medium">
                    <p>Senin, 31 Oktober 2024</p>
                  </div>
                  <p className="md:text-[15px] text-[11px] font-medium">Pukul 10.00 AM</p>
                </div>
                <div className="col-span-1">
                  <h1 className="font-light italic md:text-[16px] text-[10px]">End</h1>
                  <div className="md:text-[15px] text-[11px] font-medium">
                    <p>Senin, 31 Oktober 2024</p>
                  </div>
                  <p className="md:text-[15px] text-[11px] font-medium">Pukul 12.00 AM</p>
                </div>
              </div>
              {/* <div className="flex flex-wrap"></div> */}
              {/* END ROW 1 */}

              {/* START ROW 2 */}
              <div className="xl:grid grid-cols-3 gap-8 mt-4 flex flex-col gap-y-4">
                <div className="col-span-1">
                  <h1 className="font-light italic md:text-[16px] text-[10px]">Table number</h1>
                  <div className="md:text-[15px] text-[11px] font-medium">
                    <p>T-01</p>
                  </div>
                </div>
                <div className="col-span-1">
                  <h1 className="font-light italic md:text-[16px] text-[10px]">Person</h1>
                  <div className="md:text-[15px] text-[11px] font-medium">
                    <p>4</p>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="">
                    <h1 className="font-light italic md:text-[16px] text-[10px]">Booking number</h1>
                    <div className="md:text-[15px] text-[11px] font-medium">
                      <p>123ASW</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* END ROW 2 */}
            </SimpleCard>
            <SimpleCard className="bg-gray-300 italic text-[13px]">
              Peringatan konfirmasi telah dikirim ke anggota team Anda! Anda dapat meminta teman Anda
              yang terdaftar untuk membuka email dan konfirmasi akun agar peminjaman ini selesai!
            </SimpleCard>
          </div>
          {/* END RESERVATION DETAILS */}

          {/* START RESERVATION SUMMARY */}
          <SimpleCard className="bg-white md:min-w-[450px] w-full">

            <div className="border-[#e5e5e5] border-[3.5px] rounded-xl">
              <div className="flex flex-col space-y-[5%]">
                <h1 className="text-center font-medium text-[16px]">Waktu Konfirmasi</h1>
                <h1 className="text-center font-medium text-[14px]">Batas waktu konfirmasi</h1>
              </div>
              {/* <div className="p-[3%]">
                  <div className="flex">
                    <div className="mr-auto flex flex-col md:gap-2 gap-1">
                      <p className="md:text-sm text-[10px] font-bold text-[#ababab]">From</p>
                      <p className="md:text-sm text-[10px] font-bold">Senin, 24 Oktober 2024</p>
                      <p className="md:text-[15px] text-[12px] font-medium">Pukul 10:00 AM</p>
                    </div>
                    <div className="h-full border-r-[3px] border-[#b2b2b2] py-6 my-auto">
                    </div>
                    <div className="ml-auto flex flex-col md:gap-2 gap-1">
                      <p className="md:text-sm text-[10px] font-bold text-[#ababab]">To</p>
                      <p className="md:text-sm text-[10px] font-bold">Senin, 24 Oktober 2024</p>
                      <p className="md:text-[15px] text-[12px] font-medium">Pukul 11:00 AM</p>
                    </div>
                  </div>

                  <div className="flex mt-5">
                    <div className="flex flex-col gap-3 mr-8">
                      <div className="">
                        <p className="md:text-sm text-[10px] font-bold text-[#ababab]">Total peminjam</p>
                        <p className="md:text-[15px] text-[12px] font-medium">99+</p>
                      </div>
                      <div className="">
                        <p className="md:text-sm text-[10px] font-bold text-[#ababab]">No meja</p>
                        <p className="md:text-[15px] text-[12px] font-medium">T1</p>
                      </div>
                      <div className="">
                        <p className="md:text-sm text-[10px] font-bold text-[#ababab]">Booking number</p>
                        <p className="md:text-[15px] text-[12px] font-medium">123ASW</p>
                      </div>
                    </div>
                    <div className="">
                      <p className="md:text-sm text-[10px] font-bold text-[#ababab]">NIM</p>
                      <div className="">
                        <p className="md:text-[15px] text-[12px] font-medium">example@mail.com</p>
                        <p className="md:text-[15px] text-[12px] font-medium">example@mail.com</p>
                        <p className="md:text-[15px] text-[12px] font-medium">example@mail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 w-full text-center">
                    <button className="mx-auto">
                      <div className="flex items-center">
                        <h1 className="text-[11px] text-[#172688] mr-2">Kembali ke dashboard</h1>
                      </div>
                    </button>
                  </div>
                </div> */}
            </div>
          </SimpleCard>
          {/* END RESERVATION SUMMARY */}
        </div>
        <div className="my-10 lg">
        </div>
      </div>
    </div>
  )
}

export default renderDisplay;