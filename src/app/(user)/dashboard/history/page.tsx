'use client'
import React, { useEffect, useState } from "react";
import HeaderAuth from "@/components/layouts/header/AuthHeader";
import Dashboard_navbar from "@/components/layouts/navbar/dashboard-navbar";
import Footer from "@/components/layouts/footer";
import ButtonDashboard from "@/components/button/ButtonDashboard";
import HeaderCellTable from "@/components/table/HeaderCellTable";
import ContentCellTable from "@/components/table/ContentCellTable";
import WhiteCard from "@/components/card/WhiteCard";
import { useGetHistoryQuery } from "@/services/HistoryServiceRedux";

interface props {
  navbar: number
}

const renderDisplay = (navbar: props) => {
  // const {data} = useGetHistoryQuery({})

  return (
    <div className="">
      <HeaderAuth />
      <div className="flex md:flex-row flex-col my-[5%] lg:my-[1.5%]">
        <Dashboard_navbar />
        <div className="overflow-x-auto md:mx-auto">
          <WhiteCard className="lg:min-w-[1150px] min-h-[890px]">
            <div className="pt-10 px-7">

              <div className="capitalize text-gray-900/[.8] text-lg font-semibold">
                <h1>reservation history</h1>
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
                {/* {data.map(data => {
                  <div className="hover:bg-gray-300">
                  <div className="group grid grid-cols-6 py-4 mx-4">
                    <ContentCellTable className="col-span-2 " indexcolortext={0}>
                      {data.id}
                    </ContentCellTable>
                    <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                      {data.date}
                    </ContentCellTable>
                    <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                      {data.table_id}
                    </ContentCellTable>
                    <ContentCellTable className="col-span-1 text-center" indexcolortext={0}>
                      {data.total_seats}
                    </ContentCellTable>
                    <ContentCellTable className="col-span-1 group-hover:text-gray-950/[.9] text-center" indexcolortext={1}>
                      {data.status}
                    </ContentCellTable>
                  </div>
                </div>
                })} */}
              </div>
            </div>
          </WhiteCard>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default renderDisplay;