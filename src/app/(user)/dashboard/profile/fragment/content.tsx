'use client'
import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import DangerButton from "@/components/button/DangerButton";
import Label from "@/components/label/Label";
import GrayInput from "@/components/input/GrayInput";
import ResponsiveImage from "@/components/ResponsiveImage";
import { profile } from "@/components/interface/Profile";
import { FormEvent, useState } from "react";
import WhiteCard from "@/components/card/WhiteCard";
import { useUpdateUserMutation } from "@/services/UserServicesRedux";

const Profile = ({ data }: profile) => {
  const [name, setName] = useState(data.name)
  const [emailMhs, setEmailMhs] = useState(data.email_mhs)
  const [password, setPassword] = useState<string>('')
  const [confirm, setConfirmation] = useState<string>('')
  const [update, { isLoading }] = useUpdateUserMutation()
  const [file, setFile] = useState<File | null>(null);
  const path = process.env.NEXT_PUBLIC_STORAGE_BASE_URL + data.image

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let res = await update({ id: data.id, data: {photo: e.target?.files[0]} })
      setFile(e.target.files[0]);

      console.log(res)
      console.log(e.target.files[0])
    }
  };

  async function submit(e: FormEvent<HTMLFormElement>) {
    // e.preventDefault()
    e.preventDefault()
    let formdata = new FormData(e.currentTarget)
    // let body = {
    //   name: formdata.get('name'),
    //   email_mhs: formdata.get('email_mhs'),
    //   password: formdata.get('password'),
    //   password_confirmation: formdata.get('confirmation')
    // }
    let body = {
      name: name,
      emailMhs: emailMhs,
      // password: password,
      // password_confirmation: confirm
    }
    let res = await update({ id: data.id, data: body }).unwrap()
    console.log(res)
    if (res.status == 'success') {
      console.log("do something here...")
    }
  }
  // process.env.NEXT_PUBLIC_STORAGE_BASE_URL + (session?.user.image ? session.user.image : '') 
  return (
    <section className="mx-auto">
      <WhiteCard className="lg:min-w-[1000px] min-h-[890px]">
        <div className="font-bold text-xl p-8">
          <h1>Pengaturan</h1>
        </div>
        <hr className="text-gray-50 w-full border-2" />
        <div className="md:py-[6%] md:px-[10%]">
          <form action="" onSubmit={submit}>
            <div className="flex items-center space-x-[2.5%]">
              <div className="capitalize text-sm relative">
                <div className="absolute -top-9 left-0 text-nowrap">
                  <h1 className="font-semibold">Gambar profil</h1>
                </div>
                <ResponsiveImage className="w-[110px]" photoclassName="rounded-full" src={"/image/profile1.png"} alt="Foto profile" width={110} height={110} />
              </div>
              {/* <SecondaryButton>ubah gambar</SecondaryButton> */}
              <input id="file" type="file" onChange={handleFileChange} />
              {/* <DangerButton>hapus gambar</DangerButton> */}
            </div>
            <div className="flex flex-col mt-[4%] space-y-[1.5%]">
              <div className="font-normal">
                {/* <h1 className="text-sm">Nama profil</h1> */}
                <Label className="capitalize text-sm">nama profil</Label>
                <GrayInput value={name} name="name"
                  className="pl-[1.5%] py-[1%] pr-[10%]"
                  onChange={e => setName(e.target.value)} />
              </div>
              <div className="font-normal w-full mr-auto">
                <Label className="capitalize text-sm">email</Label>
                <GrayInput value={data.email_mhs} name="email_mhs"
                  errorValue=""
                  className="pl-[1.5%] py-[1%] pr-[10%]" onChange={e => setEmailMhs(e.target.value)} />
              </div>
              <div className="font-normal w-full mr-auto">
                <Label className="capitalize text-sm">Password</Label>
                <GrayInput value="" type="password"
                  name="password" errorValue=""
                  className="pl-[1.5%] py-[1%] pr-[10%]" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="font-normal w-full mr-auto">
                <Label className="capitalize text-sm">Konfirmasi Password</Label>
                <GrayInput value="" type="password"
                  name="password_confirmation" errorValue=""
                  className="pl-[1.5%] py-[1%] pr-[10%]" onChange={e => setConfirmation(e.target.value)} />
              </div>
              <div className="flex items-center">
                <PrimaryButton className="py-2 px-3 capitalize font-medium">
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