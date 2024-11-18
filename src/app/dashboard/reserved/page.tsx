"use client";
import React, { useEffect, useState } from "react";
import HeaderAuth from "../../layouts/header";
import Dashboard_navbar from "../../layouts/dashboard-navbar";
import Footer from "../../layouts/footer";
import SimpleCard from "@/app/component/SimpleCard";
import MiniCard from "@/app/component/minicard";
import PrimaryButton from "@/app/component/PrimaryButton";
import SecondaryButton from "@/app/component/SecondaryButton";

const getData = (navbar: props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // async function get() {
    //     const get = await fetch('LINK DISINI')
    //     setData(await get.json())
    // }
    console.log("Memanggil data");
  }, [navbar]);

  return data;
};

const filterData = () => {
  // const data = getData()
  // data.filter()
};

interface props {
  navbar: number;
}

const renderDisplay = (navbar: props) => {
  function onClick(status: number) {
    console.log(status);
  }

  const data = getData(navbar);

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
                  subtitle={<h2>Guest</h2>}
                  value={<p>111202219832@mhs.dinus.ac.id</p>}
                />

                <MiniCard
                  subtitle={<h2>Start</h2>}
                  value={<p>Senin, 10 September 2024, Pukul 10.00 AM</p>}
                />

                <MiniCard
                  subtitle={<h2>End</h2>}
                  value={<p>Senin, 10 September 2024, 12.00 AM</p>}
                />

                <MiniCard subtitle={<h2>Table</h2>} value={<p>Table 01</p>} />
                <MiniCard subtitle={<h2>Person</h2>} value={<p>1</p>} />
                
                <MiniCard
                  subtitle={<h2>Booking ID</h2>}
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
