'use client'
import Dashboard_navbar from "../template/dashboard-navbar";
import HeaderAuth from "../template/header";

const renderDisplay = () => {
    return (
        <div className="">
            <HeaderAuth />
            <div className="flex w-full justify-center">
                <Dashboard_navbar />
                <div className="bg-white rounded-3xl w-[1080px]">
                    <div className="font-bold text-xl p-8">
                        <h1>Pengaturan</h1>
                    </div>
                    <hr className="text-[#D9D9D9] w-full border-2" />
                    <div className="mx-[10%] mt-[5%]">
                        <div className="flex items-center space-x-[2.5%]">
                            <div className="capitalize font-bold text-sm relative">
                                <div className="absolute -top-9 left-0 text-nowrap">
                                    <h1 className="">Gambar profil</h1>
                                </div>
                                <img src="./image/profile-image.jpeg" className="rounded-full mx-auto" width={110} alt="" />
                            </div>
                            <button className="bg-[#D0D5DD] rounded-lg p-2 capitalize text-white">ubah gambar</button>
                            <button className="bg-[#D92D20] rounded-lg p-2 capitalize text-white">hapus gambar</button>
                        </div>
                        <div className="flex flex-col mt-[4%] space-y-[1.5%]">
                            <div className="font-normal">
                                <h1 className="text-sm">Sisa Token</h1>
                                <div className="text-[#667085] italic font-light text-sm ml-2 mt-2">
                                    <p>Anda memiliki sisa 99 jam peminjaman</p>
                                </div>
                            </div>

                            <div className="font-normal">
                                <h1 className="text-sm">Nama profil</h1>
                                <div className="text-[#667085] text-[16px] mt-2">
                                    <input type="text" className="border-2 border-[#D0D5DD] rounded-lg pl-[1.5%] py-[1%] pr-[10%]" value={"Kaoruko Waguri"}/>
                                </div>
                            </div>

                            <div className="font-normal">
                                <h1 className="text-sm">Email</h1>
                                <div className="text-[#667085] text-[16px] mt-2">
                                    <input type="text" className="border-2 border-[#FDA29B] rounded-lg pl-[1.5%] py-[1%] pr-[10%]" value={"Kaoruko Waguri"}/>
                                </div>
                                <div className="text-[#F04438] text-sm mt-1">
                                    <p>Harus menggunakan email mahasiswa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default renderDisplay;