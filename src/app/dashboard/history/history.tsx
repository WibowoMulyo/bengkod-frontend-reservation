'use client'
import { useEffect, useState } from "react";

const getData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function get() {
            const get = await fetch('LINK DISINI')
            setData(await get.json())
        }
    }, [])
}

const renderDisplay = () => {
    return (
        <div className="bg-white w-full rounded-xl px-7 py-10">
            <div className="capitalize text-[#49454F]/[.8] text-lg font-semibold">
                <h1>reservation history</h1>
            </div>
            <div className="flex gap-x-4 w-1/2 flex-row mt-4">
                <button className="flex-1 rounded-full border-2 border-[#413B89] p-2 font-medium">All</button>
                <button className="flex-1 rounded-full border-2 border-[#EBEBEE] p-2 font-medium">Complete</button>
                <button className="flex-1 rounded-full border-2 border-[#EBEBEE] p-2 font-medium">Pending</button>
                <button className="flex-1 rounded-full border-2 border-[#EBEBEE] p-2 font-medium">Complete</button>
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
            </div>
        </div>
    )
}

export default renderDisplay;