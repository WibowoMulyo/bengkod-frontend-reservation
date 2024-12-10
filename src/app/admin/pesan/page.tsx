"use client";
import Footer from "../../component/layouts/footer";
import AdminNavbar from "../admin-navbar";
import React, { useEffect, useState } from "react";
import HeaderAuth from "../../admin/header";
import Image from "next/image";

const Message = () => {
  return (
    <div>
      <HeaderAuth />
      <div className="flex md:flex-row flex-col my-[5%] lg:my-[1.5%] justify-center w-full h-full">
        <AdminNavbar />
        <div className="overflow-x-auto md:mx-auto">
          <div className="bg-white rounded-t-xl lg:h-[890px] max-w-[795px] md:my-4 md:mr-4 ml-4 md:ml-0">
            <div className="py-8 m-8">
              <h1 className="text-[32px] w-full">Pesan</h1>
              <div className="border border-gray-200 max-w-[723px] rounded-lg">
                <div className="mx-4 my-4">
                  <div className="flex space-x-4">
                    <Image
                      src={"/image/aji.png"}
                      style={{
                        width: "6%",
                        height: "6%",
                      }}
                      width={100}
                      height={100}
                      alt="logo profile"
                      className="rounded-full"
                    />
                    <div className="text-[12px]">
                      <div className="flex space-x-[380px]">
                        <h2 className="text-[14px] font-bold">Hydrangea</h2>
                        <h2>September 22, 2022 at 08:45 PM</h2>
                      </div>
                      <h3>A11.2022.14823</h3>
                      <h3>
                        To: Dany Rico, Cc: Trev Smith, Sophia Sun, Brian Tran
                      </h3>
                    </div>
                  </div>
                  <div className="max-w-[675px] text-[12.5px] my-4 mx-2">
                    <h3>
                      We’re in the early stages of planning a neighborhood
                      garden. Each family would be in charge of a plot. Bring
                      your own watering can :) Let me know if you are
                      interested.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Message;
