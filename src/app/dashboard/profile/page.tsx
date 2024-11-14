'use client'
import PrimaryButton from "@/app/component/Button/PrimaryButton";
import Dashboard_navbar from "../../component/layouts/dashboard-navbar";
import Footer from "../../component/layouts/footer";
import HeaderAuth from "../../component/layouts/header";
import SecondaryButton from "@/app/component/Button/SecondaryButton";
import DangerButton from "@/app/component/Button/DangerButton";
import PrimaryCard from "../../component/Card/PrimaryCard";
import Label from "@/app/component/Label/Label";
import GrayInput from "../../component/Input/GrayInput";
import Image from "next/image";
import ResponsiveImage from "@/app/component/ResponsiveImage";
const renderDisplay = () => {
  return (
    <div className="">
      <HeaderAuth />
      <div className="flex md:flex-row flex-col">
        <Dashboard_navbar />
        <div className="mx-auto">
          <div className="bg-white w-full rounded-t-xl lg:min-w-[1150px] md:my-4 md:mr-4 ml-4 md:ml-0">
            <div className=""></div>
            <div className="font-bold text-xl p-8">
              <h1>Pengaturan</h1>
            </div>
            <hr className="text-gray-50 w-full border-2" />
            <div className="md:py-[6%] md:px-[10%]">
              <div className="flex items-center space-x-[2.5%]">
                <div className="capitalize text-sm relative">
                  <div className="absolute -top-9 left-0 text-nowrap">
                    <h1 className="font-semibold">Gambar profil</h1>
                  </div>
                  <ResponsiveImage className="w-[110px]" photoclassName="rounded-full" src={"/image/profile-image.jpeg"} alt="Foto profile" width={110} height={110}/>
                </div>
                <SecondaryButton>ubah gambar</SecondaryButton>
                <DangerButton>hapus gambar</DangerButton>
              </div>
              <div className="flex flex-col mt-[4%] space-y-[1.5%]">
                <PrimaryCard>
                  <p className="mb-4">
                    Peraturan pengguna:
                  </p>
                  <ol>
                    <li>1. Pengguna diperbolehkan meminjam meja 1 kali dalam 1 hari</li>
                    <li>2. Pengguna diperbolehkan meminjam meja maksimal untuk 2 hari kedepan</li>
                    <li>3. Pengguna dilarang membawa makan dan minum kedalam lobby H6</li>
                    <li>4. Bagi pengguna yang tidak mengikuti aturan akan dikenakan penalti selama 1  minggu</li>
                    <li>5. Jika pengguna sudah pesan tetapi tidak melakukan konfirmasi kehadiran selama 1 jam, akan terbatalkan secara sistem</li>
                  </ol>
                </PrimaryCard>

                <div className="font-normal">
                  {/* <h1 className="text-sm">Nama profil</h1> */}
                  <Label className="capitalize text-sm">nama profil</Label>
                  <GrayInput value={"Kaoruko Waguri"} className="pl-[1.5%] py-[1%] pr-[10%]"/>
                </div>

                <div className="flex items-center">
                  <div className="font-normal w-full mr-auto">
                    {/* <h1 className="text-sm">Email</h1> */}
                    <Label className="capitalize text-sm">email</Label>
                    <GrayInput value={"Kaoruko Waguri"} errorValue={"Harus menggunakan email mahasiswa"} className="pl-[1.5%] py-[1%] pr-[10%]"/>
                  </div>
                  <PrimaryButton className="py-2 px-3 capitalize font-medium">
                    simpan
                  </PrimaryButton>
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