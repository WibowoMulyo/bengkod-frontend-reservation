"use client";
import Footer from "../../component/layouts/footer";
import AdminNavbar from "../admin-navbar";
import React, { useEffect, useState } from "react";
import HeaderAuth from "../../admin/header";
import ContentCard from "../component/ContentCard";
import SearchBar from "../component/SearchBar";

const Dashboard = () => {
  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <div>
      <HeaderAuth />
      <div className="flex md:flex-row flex-col my-[5%] lg:my-[1.5%] justify-center w-full h-full">
        <AdminNavbar />
        <div className="overflow-x-auto md:mx-auto">
          <div className="bg-white rounded-t-xl lg:w-[1150px] lg:h-[890px] w-[715px] md:my-4 md:mr-4 ml-4 md:ml-0">
            {/* <SearchBar 
             
            /> */}
            <div className="flex py-8 justify-center">Hello Admin-kun!</div>
            <div>
              <ContentCard />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
