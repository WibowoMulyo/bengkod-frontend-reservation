'use client'
import Image from "next/image";
import HeaderAuth from "../template/header";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
const renderDisplay = () => {

  useEffect(() => {
    // Cookies.remove('token')
    // if(!Cookies.get('token')){
    //   redirect('login')
    // }
  })

    return (
        <div className="">
            <HeaderAuth />
        </div>
    )
}

export default renderDisplay;