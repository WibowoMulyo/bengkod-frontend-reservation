'use client'
import React, { useEffect, useState } from "react";
import HeaderAuth from "../../template/header";
import Dashboard_navbar from "../../template/dashboard-navbar";
import Footer from "../../template/footer";

const getData = (navbar: props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        // async function get() {
        //     const get = await fetch('LINK DISINI')
        //     setData(await get.json())
        // }
        console.log("Memanggil data")
    }, [navbar])

    return data

}

const filterData = () => {
    // const data = getData()
    // data.filter()
}

interface props {
    navbar: number
}

const renderDisplay = (navbar: props) => {
    function onClick(status: number) {
        console.log(status)
    }

    const data = getData(navbar)

    return (
        <div className="">
            <HeaderAuth />
            <div className="flex md:flex-row flex-col my-[5%] lg:my-[1.5%]">
                <Dashboard_navbar />
                <div className="overflow-x-auto md:mx-auto">
                    <div className="bg-white w-full rounded-xl px-7 py-10 min-w-[1150px] md:my-4 md:mr-4 ml-4 md:ml-0">
                        <div className="capitalize text-[#49454F]/[.8] text-lg font-semibold">
                            <h1>reservation history</h1>
                        </div>
                        <div className="flex gap-x-4 w-1/2 flex-row mt-4">
                            <button className="flex-1 rounded-full border-2 border-[#EBEBEE] focus:border-[#413B89] hover:border-[#413B89] p-2 font-medium" onClick={e => onClick(0)}>All</button>
                            <button className="flex-1 rounded-full border-2 border-[#EBEBEE] focus:border-[#413B89] hover:border-[#413B89] p-2 font-medium" onClick={e => onClick(1)}>Complete</button>
                            <button className="flex-1 rounded-full border-2 border-[#EBEBEE] focus:border-[#413B89] hover:border-[#413B89] p-2 font-medium" onClick={e => onClick(2)}>Pending</button>
                            <button className="flex-1 rounded-full border-2 border-[#EBEBEE] focus:border-[#413B89] hover:border-[#413B89] p-2 font-medium" onClick={e => onClick(3)}>Complete</button>
                        </div>
                        <div className="border-[1px] rounded-lg mt-3">
                            <div className="grid grid-cols-6 border-b-[1px] py-4">
                                <div className="col-span-2 text-center text-[#49454F]/[.8] capitalize">
                                    booking ID
                                </div>
                                <div className="col-span-1 text-center text-[#49454F]/[.8] capitalize">
                                    <h1>tanggal</h1>
                                </div>
                                <div className="col-span-1 text-center text-[#49454F]/[.8] capitalize">
                                    <h1>nomer meja</h1>
                                </div>
                                <div className="col-span-1 text-center text-[#49454F]/[.8] capitalize">
                                    <h1>total anggota</h1>
                                </div>
                                <div className="col-span-1 text-center text-[#49454F]/[.8] capitalize">
                                    <h1>status</h1>
                                </div>
                            </div>
                            <div className="hover:bg-gray-300">
                                <div className="group grid grid-cols-6 py-4 mx-4">
                                    <div className="col-span-2 text-[#222222]/[.9] font-medium">
                                        <p>#XXXXX</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1 Mar, 2023</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>T-01</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1</p>
                                    </div>
                                    <div className="col-span-1 text-[#0EAD69] group-hover:text-black text-center font-medium">
                                        <p>Success</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-300">
                                <div className="group grid grid-cols-6 py-4 mx-4">
                                    <div className="col-span-2 text-[#222222]/[.9] font-medium">
                                        <p>#XXXXX</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1 Mar, 2023</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>T-01</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1</p>
                                    </div>
                                    <div className="col-span-1 text-[#0978F2] group-hover:text-black text-center font-medium">
                                        <p>Pending</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-300">
                                <div className="group grid grid-cols-6 py-4 mx-4">
                                    <div className="col-span-2 text-[#222222]/[.9] font-medium">
                                        <p>#XXXXX</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1 Mar, 2023</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>T-01</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1</p>
                                    </div>
                                    <div className="col-span-1 text-[#C10B0E] group-hover:text-black text-center font-medium">
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-300">
                                <div className="group grid grid-cols-6 py-4 mx-4">
                                    <div className="col-span-2 text-[#222222]/[.9] font-medium">
                                        <p>#XXXXX</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1 Mar, 2023</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>T-01</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1</p>
                                    </div>
                                    <div className="col-span-1 text-[#C10B0E] group-hover:text-black text-center font-medium">
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-300">
                                <div className="group grid grid-cols-6 py-4 mx-4">
                                    <div className="col-span-2 text-[#222222]/[.9] font-medium">
                                        <p>#XXXXX</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1 Mar, 2023</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>T-01</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1</p>
                                    </div>
                                    <div className="col-span-1 text-[#C10B0E] group-hover:text-black text-center font-medium">
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-300">
                                <div className="group grid grid-cols-6 py-4 mx-4">
                                    <div className="col-span-2 text-[#222222]/[.9] font-medium">
                                        <p>#XXXXX</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1 Mar, 2023</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>T-01</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1</p>
                                    </div>
                                    <div className="col-span-1 text-[#C10B0E] group-hover:text-black text-center font-medium">
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-300">
                                <div className="group grid grid-cols-6 py-4 mx-4">
                                    <div className="col-span-2 text-[#222222]/[.9] font-medium">
                                        <p>#XXXXX</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1 Mar, 2023</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>T-01</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1</p>
                                    </div>
                                    <div className="col-span-1 text-[#C10B0E] group-hover:text-black text-center font-medium">
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-300">
                                <div className="group grid grid-cols-6 py-4 mx-4">
                                    <div className="col-span-2 text-[#222222]/[.9] font-medium">
                                        <p>#XXXXX</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1 Mar, 2023</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>T-01</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1</p>
                                    </div>
                                    <div className="col-span-1 text-[#C10B0E] group-hover:text-black text-center font-medium">
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-300">
                                <div className="group grid grid-cols-6 py-4 mx-4">
                                    <div className="col-span-2 text-[#222222]/[.9] font-medium">
                                        <p>#XXXXX</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1 Mar, 2023</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>T-01</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1</p>
                                    </div>
                                    <div className="col-span-1 text-[#C10B0E] group-hover:text-black text-center font-medium">
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-300">
                                <div className="group grid grid-cols-6 py-4 mx-4">
                                    <div className="col-span-2 text-[#222222]/[.9] font-medium">
                                        <p>#XXXXX</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1 Mar, 2023</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>T-01</p>
                                    </div>
                                    <div className="col-span-1 text-[#222222]/[.9] text-center font-medium">
                                        <p>1</p>
                                    </div>
                                    <div className="col-span-1 text-[#C10B0E] group-hover:text-black text-center font-medium">
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default renderDisplay;