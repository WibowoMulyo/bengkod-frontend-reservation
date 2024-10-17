'use client'

import Image from "next/image";
import Link from "next/link";
import Navlink from "@/app/component/NavLink";
import { useEffect } from "react";
import { useRouter } from 'next/router';
const renderDisplay = () => {
    // const {route} = useRouter();
    return (
        <div className="border-2 border-[rgb(236,238,239)] rounded-3xl m-4 bg-white">
            <div className="flex mx-20 relative">
                <div className="mr-auto">
                    <Image
                        src={"/img/Bengkod_Logo.png"}
                        alt="bengkod logo"
                        width={220}
                        height={100}
                    />
                </div>
                <div className="flex mr-20 gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Navlink
                        href="dashboard"
                        active={window.location.pathname == "/dashboard"}
                    >
                        Dashboard
                    </Navlink>
                    <Navlink
                        href="reservation"
                        active={window.location.pathname == "/reservation"}
                    >
                        reservation
                    </Navlink>

                </div>
                <div className="my-auto">
                    {/* <Image
                        src={"https://dummyimage.com/150/000000/fff&text=Foto+profile"}
                        alt="profile"
                        width={100}
                        height={40}
                    /> */}
                    <img src="https://dummyimage.com/150/000000/fff&text=Foto+profile" width={60} alt="" className="rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default renderDisplay;