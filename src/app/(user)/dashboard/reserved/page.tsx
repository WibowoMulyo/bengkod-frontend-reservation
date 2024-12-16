"use client";
import React, { useEffect, useState } from "react";
import HeaderAuth from "@/components/layouts/header/AuthHeader";
import Dashboard_navbar from "@/components/layouts/navbar/dashboard-navbar";
import Footer from "@/components/layouts/footer";
import SimpleCard from "@/components/card/SimpleCard";
import MiniCard from "@/components/card/MiniCard";
import PrimaryButton from "@/components/button/PrimaryButton";
import { useGetConfirmationQuery } from "@/services/ConfirmationServicesRedux";
const renderDisplay = () => {
  // const {data, error} = useGetConfirmationQuery({})
  // useEffect(() => {
  //   if(data)
  // }, [data])
  return (
    <div>
      <HeaderAuth />
      <div className="flex md:flex-row flex-col my-[5%] lg:my-[1.5%]">
        <Dashboard_navbar />
        <div className="overflow-x-auto md:ml-4">
          <div className="bg-white w-[900px] h-[825px] rounded-xl px-7 py-10 md:my-4 md:mr-4 ml-4 md:ml-0">
            <h1>Pesanan Anda</h1>
            <SimpleCard className="relative">
              <div className="bg-white p-4 grid grid-cols-3 gap-4 gap-x-12">
                <h1 className="col-span-3 text-left font-extrabold text-size-[13px]">
                  Reservation Details
                </h1>
                <MiniCard
                  subtitle={"Guest"}
                  value={<p>111202219832@mhs.dinus.ac.id</p>}
                />

                <MiniCard
                  subtitle={"Start"}
                  value={<p>Senin, 10 September 2024, Pukul 10.00 AM</p>}
                />

                <MiniCard
                  subtitle={"End"}
                  value={<p>Senin, 10 September 2024, 12.00 AM</p>}
                />

                <MiniCard subtitle={"Table"} value={<p>Table 01</p>} />
                <MiniCard subtitle={"Person"} value={<p>1</p>} />
                
                <MiniCard
                  subtitle={"Booking ID"}
                  value={<p>RSV011120241539</p>}
                />

                <PrimaryButton className="absolute right-14 bottom-4">
                  Konfirmasi
                </PrimaryButton>
              </div>
            </SimpleCard>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default renderDisplay;
