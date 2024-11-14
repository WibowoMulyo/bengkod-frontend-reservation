'use client'
import React, { useEffect, useState } from "react";
import HeaderAuth from "../../component/layouts/header";
import Dashboard_navbar from "../../component/layouts/dashboard-navbar";
import Footer from "../../component/layouts/footer";
import ButtonDashboard from "../../component/Button/ButtonDashboard";
import HeaderCellTable from "../../component/Table/HeaderCellTable";
import ContentCellTable from "../../component/Table/ContentCellTable";

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
            <div className="capitalize text-gray-900/[.8] text-lg font-semibold">
              <h1>reservation history</h1>
            </div>
            <div className="flex gap-x-4 w-1/2 flex-row mt-4">
              <ButtonDashboard onClick={e => onClick(0)} className="flex-1">All</ButtonDashboard>
              <ButtonDashboard onClick={e => onClick(1)} className="flex-1">Complete</ButtonDashboard>
              <ButtonDashboard onClick={e => onClick(2)} className="flex-1">Pending</ButtonDashboard>
              <ButtonDashboard onClick={e => onClick(3)} className="flex-1">Complete</ButtonDashboard>
            </div>
            <div className="border-[1px] rounded-lg mt-3">
              <div className="grid grid-cols-6 border-b-[1px] py-4">
                <HeaderCellTable className="col-span-2">
                  Booking ID
                </HeaderCellTable>
                <HeaderCellTable className="col-span-1">
                  tanggal
                </HeaderCellTable>
                <HeaderCellTable className="col-span-1">
                  Nomor meja
                </HeaderCellTable>
                <HeaderCellTable className="col-span-1">
                  total anggota
                </HeaderCellTable>
                <HeaderCellTable className="col-span-1">
                  status
                </HeaderCellTable>
              </div>
              <div className="hover:bg-gray-300">
                <div className="group grid grid-cols-6 py-4 mx-4">
                  <ContentCellTable className="col-span-2 " indexcolortext={0}>
                    #XXXXX
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1 Mar, 2023
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    T-01
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 group-hover:text-gray-950/[.9] text-center" indexcolortext={1}>
                    Success
                  </ContentCellTable>
                </div>
              </div>
              <div className="hover:bg-gray-300">
                <div className="group grid grid-cols-6 py-4 mx-4">
                  <ContentCellTable className="col-span-2 " indexcolortext={0}>
                    #XXXXX
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1 Mar, 2023
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    T-01
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 group-hover:text-gray-950/[.9] text-center" indexcolortext={2}>
                    Pending
                  </ContentCellTable>
                </div>
              </div>
              <div className="hover:bg-gray-300">
                <div className="group grid grid-cols-6 py-4 mx-4">
                  <ContentCellTable className="col-span-2 " indexcolortext={0}>
                    #XXXXX
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1 Mar, 2023
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    T-01
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 group-hover:text-gray-950/[.9] text-center" indexcolortext={3}>
                    Rejected
                  </ContentCellTable>
                </div>
              </div>
              <div className="hover:bg-gray-300">
                <div className="group grid grid-cols-6 py-4 mx-4">
                <ContentCellTable className="col-span-2 " indexcolortext={0}>
                    #XXXXX
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1 Mar, 2023
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    T-01
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 group-hover:text-gray-950/[.9] text-center" indexcolortext={3}>
                    Rejected
                  </ContentCellTable>
                </div>
              </div>
              <div className="hover:bg-gray-300">
                <div className="group grid grid-cols-6 py-4 mx-4">
                <ContentCellTable className="col-span-2 " indexcolortext={0}>
                    #XXXXX
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1 Mar, 2023
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    T-01
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 group-hover:text-gray-950/[.9] text-center" indexcolortext={3}>
                    Rejected
                  </ContentCellTable>
                </div>
              </div>
              <div className="hover:bg-gray-300">
                <div className="group grid grid-cols-6 py-4 mx-4">
                  <ContentCellTable className="col-span-2 " indexcolortext={0}>
                    #XXXXX
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1 Mar, 2023
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    T-01
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 group-hover:text-gray-950/[.9] text-center" indexcolortext={3}>
                    Rejected
                  </ContentCellTable>
                </div>
              </div>
              <div className="hover:bg-gray-300">
                <div className="group grid grid-cols-6 py-4 mx-4">
                  <ContentCellTable className="col-span-2 " indexcolortext={0}>
                    #XXXXX
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1 Mar, 2023
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    T-01
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 group-hover:text-gray-950/[.9] text-center" indexcolortext={3}>
                    Rejected
                  </ContentCellTable>
                </div>
              </div>
              <div className="hover:bg-gray-300">
                <div className="group grid grid-cols-6 py-4 mx-4">
                  <ContentCellTable className="col-span-2 " indexcolortext={0}>
                    #XXXXX
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1 Mar, 2023
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    T-01
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 group-hover:text-gray-950/[.9] text-center" indexcolortext={3}>
                    Rejected
                  </ContentCellTable>
                </div>
              </div>
              <div className="hover:bg-gray-300">
                <div className="group grid grid-cols-6 py-4 mx-4">
                  <ContentCellTable className="col-span-2 " indexcolortext={0}>
                    #XXXXX
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1 Mar, 2023
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    T-01
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 group-hover:text-gray-950/[.9] text-center" indexcolortext={3}>
                    Rejected
                  </ContentCellTable>
                </div>
              </div>
              <div className="hover:bg-gray-300">
                <div className="group grid grid-cols-6 py-4 mx-4">
                  <ContentCellTable className="col-span-2 " indexcolortext={0}>
                    #XXXXX
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1 Mar, 2023
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    T-01
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                    1
                  </ContentCellTable>
                  <ContentCellTable className="col-span-1 group-hover:text-gray-950/[.9] text-center" indexcolortext={3}>
                    Rejected
                  </ContentCellTable>
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