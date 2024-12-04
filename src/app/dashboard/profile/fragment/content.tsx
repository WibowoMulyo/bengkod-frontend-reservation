'use client'
import PrimaryButton from "@/app/component/Button/PrimaryButton";
import Dashboard_navbar from "@/app/component/layouts/dashboard-navbar";
import Footer from "@/app/component/layouts/footer";
import HeaderAuth from "@/app/component/layouts/header";
import SecondaryButton from "@/app/component/Button/SecondaryButton";
import DangerButton from "@/app/component/Button/DangerButton";
import PrimaryCard from "@/app/component/Card/PrimaryCard";
import Label from "@/app/component/Label/Label";
import GrayInput from "@/app/component/Input/GrayInput";
import Image from "next/image";
import ResponsiveImage from "@/app/component/ResponsiveImage";
import { getDataUser, updateDataUser } from "@/app/services/UserServices";
import { profile } from "@/app/component/interface/Profile";
import { FormEvent, useState } from "react";

const Profile = ({ data }: profile) => {
  const [name, setName] = useState(data.name)
  const [emailMhs, setEmailMhs] = useState(data.email_mhs)

  async function submit(e: any) {
    // e.preventDefault()
    let result = await updateDataUser({
      data: {
        name: name,
      },
      user_id: data.id,
    }).then(response => {
      console.log(response)
    })
  }

  return (
    <section className="mx-auto">
      <div className="bg-white w-full rounded-t-xl lg:min-w-[1150px] md:my-4 md:mr-4 ml-4 md:ml-0">
        <div className=""></div>
        <div className="font-bold text-xl p-8">
          <h1>Pengaturan</h1>
        </div>
        <hr className="text-gray-50 w-full border-2" />
        <div className="md:py-[6%] md:px-[10%]">
          <form action="">

            <div className="flex items-center space-x-[2.5%]">
              <div className="capitalize text-sm relative">
                <div className="absolute -top-9 left-0 text-nowrap">
                  <h1 className="font-semibold">Gambar profil</h1>
                </div>
                <ResponsiveImage className="w-[110px]" photoclassName="rounded-full" src={"/image/profile-image.jpeg"} alt="Foto profile" width={110} height={110} />
              </div>
              <SecondaryButton>ubah gambar</SecondaryButton>
              <DangerButton>hapus gambar</DangerButton>
            </div>
            <div className="flex flex-col mt-[4%] space-y-[1.5%]">
              <div className="font-normal">
                {/* <h1 className="text-sm">Nama profil</h1> */}
                <Label className="capitalize text-sm">nama profil</Label>
                <GrayInput value={name} className="pl-[1.5%] py-[1%] pr-[10%]" onChange={e => setName(e.target.value)}/>
              </div>

              <div className="flex items-center">
                <div className="font-normal w-full mr-auto">
                  {/* <h1 className="text-sm">Email</h1> */}
                  <Label className="capitalize text-sm">email</Label>
                  <GrayInput value={data.email_mhs} errorValue={"Harus menggunakan email mahasiswa"} className="pl-[1.5%] py-[1%] pr-[10%]" onChange={e => setEmailMhs(e.target.value)}/>
                </div>
                <PrimaryButton className="py-2 px-3 capitalize font-medium" onClick={e => submit(e)}>
                  simpan
                </PrimaryButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Profile;