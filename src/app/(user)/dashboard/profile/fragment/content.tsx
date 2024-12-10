'use client'
import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import DangerButton from "@/components/button/DangerButton";
import Label from "@/components/label/Label";
import GrayInput from "@/components/input/GrayInput";
import ResponsiveImage from "@/components/ResponsiveImage";
import { updateDataUser } from "@/services/UserServices";
import { profile } from "@/components/interface/Profile";
import { useState } from "react";
import WhiteCard from "@/components/card/WhiteCard";

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
      <WhiteCard className="lg:min-w-[1000px] min-h-[890px]">
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
                <GrayInput value={name} className="pl-[1.5%] py-[1%] pr-[10%]" onChange={e => setName(e.target.value)} />
              </div>

              <div className="flex items-center">
                <div className="font-normal w-full mr-auto">
                  {/* <h1 className="text-sm">Email</h1> */}
                  <Label className="capitalize text-sm">email</Label>
                  <GrayInput value={data.email_mhs} errorValue={"Harus menggunakan email mahasiswa"} className="pl-[1.5%] py-[1%] pr-[10%]" onChange={e => setEmailMhs(e.target.value)} />
                </div>
                <PrimaryButton className="py-2 px-3 capitalize font-medium" onClick={e => submit(e)}>
                  simpan
                </PrimaryButton>
              </div>
            </div>
          </form>
        </div>
      </WhiteCard>
      {/* <div className="bg-white w-full rounded-t-xl lg:min-w-[1150px] md:my-4 md:mr-4 ml-4 md:ml-0">
      </div> */}
    </section>
  )
}

export default Profile;