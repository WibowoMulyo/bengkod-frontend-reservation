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
        if (status === '1') {
            return <div className="bg-[#b9fbbc] md:rounded-xl rounded-2xl border-[#a3e0a5] border-4 mb-4">
                <div className="flex lg:px-[4%] px-[5%] md:py-[1%] py-[2%] lg:gap-7 gap-4 items-center">
                    <div className="">
                        <div className="bg-white md:p-[6px] p-[4px] rounded-lg">
                            <div className="hidden md:block">
                                <svg width="20" height="20" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clip-rule="evenodd" d="M19.7808 1.38645C20.0542 1.65993 20.2078 2.03079 20.2078 2.41749C20.2078 2.80419 20.0542 3.17506 19.7808 3.44853L8.85011 14.3792C8.70566 14.5237 8.53416 14.6383 8.34541 14.7165C8.15666 14.7947 7.95435 14.835 7.75004 14.835C7.54573 14.835 7.34342 14.7947 7.15467 14.7165C6.96592 14.6383 6.79442 14.5237 6.64997 14.3792L1.21914 8.94937C1.07985 8.81484 0.968753 8.65392 0.892323 8.476C0.815893 8.29808 0.775663 8.10671 0.773981 7.91308C0.772298 7.71944 0.809197 7.52741 0.882523 7.34818C0.955849 7.16896 1.06414 7.00613 1.20106 6.86921C1.33799 6.73228 1.50081 6.62399 1.68004 6.55067C1.85926 6.47734 2.05129 6.44044 2.24493 6.44213C2.43857 6.44381 2.62993 6.48404 2.80785 6.56047C2.98578 6.6369 3.14669 6.748 3.28122 6.88728L7.74955 11.3556L17.7177 1.38645C17.8532 1.25093 18.014 1.14343 18.191 1.07008C18.368 0.996736 18.5577 0.958984 18.7493 0.958984C18.9409 0.958984 19.1306 0.996736 19.3076 1.07008C19.4846 1.14343 19.6454 1.25093 19.7808 1.38645Z" fill="#42AD2D" />
                                </svg>
                            </div>
                            <div className="block md:hidden">
                                <svg width="20" height="20" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clip-rule="evenodd" d="M19.7808 1.38645C20.0542 1.65993 20.2078 2.03079 20.2078 2.41749C20.2078 2.80419 20.0542 3.17506 19.7808 3.44853L8.85011 14.3792C8.70566 14.5237 8.53416 14.6383 8.34541 14.7165C8.15666 14.7947 7.95435 14.835 7.75004 14.835C7.54573 14.835 7.34342 14.7947 7.15467 14.7165C6.96592 14.6383 6.79442 14.5237 6.64997 14.3792L1.21914 8.94937C1.07985 8.81484 0.968753 8.65392 0.892323 8.476C0.815893 8.29808 0.775663 8.10671 0.773981 7.91308C0.772298 7.71944 0.809197 7.52741 0.882523 7.34818C0.955849 7.16896 1.06414 7.00613 1.20106 6.86921C1.33799 6.73228 1.50081 6.62399 1.68004 6.55067C1.85926 6.47734 2.05129 6.44044 2.24493 6.44213C2.43857 6.44381 2.62993 6.48404 2.80785 6.56047C2.98578 6.6369 3.14669 6.748 3.28122 6.88728L7.74955 11.3556L17.7177 1.38645C17.8532 1.25093 18.014 1.14343 18.191 1.07008C18.368 0.996736 18.5577 0.958984 18.7493 0.958984C18.9409 0.958984 19.1306 0.996736 19.3076 1.07008C19.4846 1.14343 19.6454 1.25093 19.7808 1.38645Z" fill="#42AD2D" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="text-[12px] lg:text-lg">
                        <h1 className="font-semibold">Your Confirmed</h1>
                    </div>
                </div>
            </div>
        } else {
            return <div className="my-2">
                <div className="bg-[#f89f9b] md:rounded-xl rounded-2xl border-[#de8e8b] border-4 mb-4">
                    <div className="flex lg:px-[4%] px-[5%] md:py-[1%] py-[2%] lg:gap-7 gap-4 items-center">
                        <div className="">
                            <div className="bg-white md:p-[6px] p-[4px] rounded-lg">
                                <div className="hidden md:block">
                                    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.875 1.875L1.875 15.875M1.875 1.875L15.875 15.875" stroke="#BA0900" stroke-width="3.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="block md:hidden">
                                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.875 1.875L1.875 15.875M1.875 1.875L15.875 15.875" stroke="#BA0900" stroke-width="3.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="text-[12px] lg:text-lg">
                            <h1 className="font-semibold">Your confirmation isn't Confirmed!</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-black/25 rounded-xl shadow-lg px-4 py-3 italic text-sm">
                    <p>Kami mohon maaf, pemesanan meja Anda tidak dapat diproses karena Anda telah meminjam meja melebihi batas yang ditentukan. Silakan cek halaman profile Anda untuk mengetahui detail limit peminjaman.</p>
                </div>
            </div>
        }
    }



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
                    <div className="">
                        {renderStatus()}
                        <div className="bg-white shadow-md rounded-xl xl:w-[775px]">
                            <div className="p-6">
                                <div className="pb-4">
                                    <h1 className="font-extrabold">Reservation Details  </h1>
                                </div>

                                {/*START ROW 1 */}
                                <div className="xl:grid grid-cols-3 gap-8 flex flex-col gap-y-4">
                                    <div className="col-span-1">
                                        <h1 className="font-light italic md:text-lg text-[10px]">Guess</h1>
                                        <div className="md:text-[15px] text-[11px] font-medium">
                                            <p>example@mhs.dinus.ac.id</p>
                                            <p>example@mhs.dinus.ac.id</p>
                                            <p>example@mhs.dinus.ac.id</p>
                                            <p>example@mhs.dinus.ac.id</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <h1 className="font-light italic md:text-lg text-[10px]">From</h1>
                                        <div className="md:text-[15px] text-[11px] font-medium">
                                            <p>Senin, 31 Oktober 2024</p>
                                        </div>
                                        <p className="md:text-[15px] text-[11px] font-medium">Pukul 10.00 AM</p>
                                    </div>
                                    <div className="col-span-1">
                                        <h1 className="font-light italic md:text-lg text-[10px]">End</h1>
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
                                        <h1 className="font-light italic md:text-lg text-[10px]">Table number</h1>
                                        <div className="md:text-[15px] text-[11px] font-medium">
                                            <p>T-01</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <h1 className="font-light italic md:text-lg text-[10px]">Person</h1>
                                        <div className="md:text-[15px] text-[11px] font-medium">
                                            <p>4</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div className="">
                                            <h1 className="font-light italic md:text-lg text-[10px]">Booking number</h1>
                                            <div className="md:text-[15px] text-[11px] font-medium">
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
                    <div className=" bg-white shadow-md rounded-xl md:min-w-[450px] w-full">
                        <div className="lg:p-[4%] p-[3%]">
                            <div className="md:pt-[2%] md:pb-[3%] md:pl-0 py-[2%] pb-[3%] pl-[2%]">
                                <h1 className="font-extrabold text-[13px]">Reservation Summary</h1>
                            </div>
                            <div className="border-[#e5e5e5] border-[3.5px] rounded-xl">
                                <div className="p-[3%]">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END RESERVATION SUMMARY */}
                </div>
                <div className="my-10 lg">
                </div>
            </div>
        </div>
    )
}

export default renderDisplay;