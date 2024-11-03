import HeaderAuth from "../../template/header";
// import Calendar from "@/app/component/calendar/Calendar";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useState } from "react";

interface props {
    step?: () => void,
    status: string,
}


const renderDisplay = ({ step, status }: props) => {
    const renderStatus = () => {
        if (status == '1') {
            return <div className="bg-[#b9fbbc] rounded-xl border-[#a3e0a5] border-4 mb-4">
                <div className="flex px-12 py-[10px]  gap-8 items-center">
                    <div className="">
                        <div className="bg-white p-[7px] rounded-lg">
                            <svg width="20" height="20" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clip-rule="evenodd" d="M19.7808 1.38645C20.0542 1.65993 20.2078 2.03079 20.2078 2.41749C20.2078 2.80419 20.0542 3.17506 19.7808 3.44853L8.85011 14.3792C8.70566 14.5237 8.53416 14.6383 8.34541 14.7165C8.15666 14.7947 7.95435 14.835 7.75004 14.835C7.54573 14.835 7.34342 14.7947 7.15467 14.7165C6.96592 14.6383 6.79442 14.5237 6.64997 14.3792L1.21914 8.94937C1.07985 8.81484 0.968753 8.65392 0.892323 8.476C0.815893 8.29808 0.775663 8.10671 0.773981 7.91308C0.772298 7.71944 0.809197 7.52741 0.882523 7.34818C0.955849 7.16896 1.06414 7.00613 1.20106 6.86921C1.33799 6.73228 1.50081 6.62399 1.68004 6.55067C1.85926 6.47734 2.05129 6.44044 2.24493 6.44213C2.43857 6.44381 2.62993 6.48404 2.80785 6.56047C2.98578 6.6369 3.14669 6.748 3.28122 6.88728L7.74955 11.3556L17.7177 1.38645C17.8532 1.25093 18.014 1.14343 18.191 1.07008C18.368 0.996736 18.5577 0.958984 18.7493 0.958984C18.9409 0.958984 19.1306 0.996736 19.3076 1.07008C19.4846 1.14343 19.6454 1.25093 19.7808 1.38645Z" fill="#42AD2D" />
                            </svg>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="font-semibold">Your confirmation is Confirmed</h1>
                    </div>
                </div>
            </div>
        } else {
            return <div className="bg-[#f89f9b] rounded-xl border-[#de8e8b] border-4 mb-4">
                <div className="flex px-12 py-[10px]  gap-8 items-center">
                    <div className="">
                        <div className="bg-white p-[7px] rounded-lg">
                            <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.875 1.875L1.875 15.875M1.875 1.875L15.875 15.875" stroke="#BA0900" stroke-width="3.75" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="font-semibold">Your confirmation isn't Confirmed!</h1>
                    </div>
                </div>
            </div>
        }
    }

    return (
        <div className="my-10">
            <div className="flex w-full justify-center mx-auto items-center gap-3">
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

            <div className="my-10">
                <div className="flex gap-8 justify-center my-5">
                    {/* START RESERVATION DETAILS */}
                    <div className="">
                        {renderStatus()}

                        <div className="bg-white shadow-md rounded-xl">
                            <div className="p-6">
                                <div className="pb-4">
                                    <h1 className="font-extrabold">Reservation Details  </h1>
                                </div>

                                {/*START ROW 1 */}
                                <div className="grid grid-cols-3 gap-8">
                                    <div className="col-span-1">
                                        <h1 className="font-light italic">Guess</h1>
                                        <div className="font-bold">
                                            <p>example@mhs.dinus.ac.id</p>
                                            <p>example@mhs.dinus.ac.id</p>
                                            <p>example@mhs.dinus.ac.id</p>
                                            <p>example@mhs.dinus.ac.id</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <h1 className="font-light italic">From</h1>
                                        <div className="font-bold">
                                            <p>Senin, 31 Oktober 2024</p>
                                        </div>
                                        <p className="font-medium">Pukul 10.00 AM</p>
                                    </div>
                                    <div className="col-span-1">
                                        <h1 className="font-light italic">End</h1>
                                        <div className="font-bold">
                                            <p>Senin, 31 Oktober 2024</p>
                                        </div>
                                        <p className="font-medium">Pukul 12.00 AM</p>
                                    </div>
                                </div>
                                {/* END ROW 1 */}

                                {/* START ROW 2 */}
                                <div className="grid grid-cols-3 gap-8 mt-4">
                                    <div className="col-span-1">
                                        <h1 className="font-light italic">Table number</h1>
                                        <div className="font-bold">
                                            <p>T-01</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <h1 className="font-light italic">Person</h1>
                                        <div className="font-bold">
                                            <p>4</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div className="">
                                            <h1 className="font-light italic">Booking number</h1>
                                            <div className="font-bold">
                                                <p>123ASW</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* END ROW 2 */}
                            </div>
                        </div>
                    </div>
                    {/* END RESERVATION DETAILS */}

                    {/* START RESERVATION SUMMARY */}
                    <div className=" bg-white shadow-md rounded-xl min-w-[450px]">
                        <div className="p-6">
                            <div className="pt-5 pb-5">
                                <h1 className="font-extrabold">Reservation Summary</h1>
                            </div>
                            <div className="border-[#e5e5e5] border-4 rounded-lg">
                                <div className="px-3 py-4">
                                    <div className="flex">
                                        <div className="mr-auto flex flex-col gap-2">
                                            <p className="text-sm font-bold text-[#ababab]">From</p>
                                            <p className="text-sm font-bold">Senin, 24 Oktober 2024</p>
                                            <p className="text-[15px] font-medium">Pukul 10:00 AM</p>
                                        </div>
                                        <div className="h-full border-r-[3px] border-[#b2b2b2] py-6 my-auto">
                                        </div>
                                        <div className="ml-auto flex flex-col gap-2">
                                            <p className="text-sm font-bold text-[#ababab]">To</p>
                                            <p className="text-sm font-bold">Senin, 24 Oktober 2024</p>
                                            <p className="text-[15px] font-medium">Pukul 11:00 AM</p>
                                        </div>
                                    </div>

                                    <div className="flex mt-5">
                                        <div className="flex flex-col gap-3 mr-8">
                                            <div className="">
                                                <p className="text-sm font-bold text-[#ababab]">Total peminjam</p>
                                                <p className="text-sm font-bold">99+</p>
                                            </div>
                                            <div className="">
                                                <p className="text-sm font-bold text-[#ababab]">No meja</p>
                                                <p className="text-sm font-bold">T1</p>
                                            </div>
                                            <div className="">
                                                <p className="text-sm font-bold text-[#ababab]">Booking number</p>
                                                <p className="text-sm font-bold">123ASW</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="text-sm font-bold text-[#ababab]">NIM</p>
                                            <div className="">
                                                <p className="text-sm font-bold">example@mail.com</p>
                                                <p className="text-sm font-bold">example@mail.com</p>
                                                <p className="text-sm font-bold">example@mail.com</p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END RESERVATION SUMMARY */}
                </div>
            </div>
        </div>
    )
}

export default renderDisplay;