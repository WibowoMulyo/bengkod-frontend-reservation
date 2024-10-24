'use client'
import Image from "next/image";
import HeaderAuth from "../template/header";
import Calendar from "./calendar/Calendar2";
import History from "./history/history";
import Footer from "../template/footer";
import { useState } from "react";
import Dashboard_navbar from "../template/dashboard-navbar";


const renderDisplay = () => {
    return (
        <div className="">
            <HeaderAuth />
            <Dashboard_navbar/>
            <Footer />
        </div>
    )
}

export default renderDisplay;