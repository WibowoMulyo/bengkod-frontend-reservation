'use client'
import { useEffect, useState } from "react";
import InputError from "@/components/input/InputError";
import { FormEvent } from 'react'
// import Cookies from 'js-cookie';
import SimpleCard from "@/components/card/NavBarCard";
import CustomLink from "@/components/link/CustomLink";
import GrayInput from "@/components/input/GrayInput";
import Label from "@/components/label/Label";
// import { useFormState, useFormStatus } from "react-dom";
import { useFormState, useFormStatus } from "react-dom";
import { useLoginMutation } from "@/services/AuthServicesRedux";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
const body = () => {
  const [error, setError] = useState<any | ''>({})
  const searchParams = useSearchParams()
  const [login] = useLoginMutation();
  const { pending } = useFormStatus()

  async function OnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formdata = new FormData(e.currentTarget)

    let email_mhs = formdata.get("email_mhs")
    let password = formdata.get("password")
    let dict = { email_mhs: email_mhs, password: password }

    let res = await login(dict).unwrap()
    console.log(res)
    if (res.status == 'error') {
      setError(res)
    }else if(res.status == 'success'){
      let user = res.data
      const loginres = await signIn("credentials", {
        id: user.id,
        email_mhs: user.email_mhs,
        name: user.name,
        token: user.token,
        image: user.photo,
        callbackUrl: searchParams.get('callbackUrl') || '/',
        redirect: false,
      })
      window.location.replace('/dashboard/calendar')
    }
  }

  return (
    <div className="flex flex-col gap-y-6 mx-[5%]">
      <SimpleCard className="flex gap-x-4 rounded-xl p-4">
        <CustomLink className="font-semibold" href="#" showline={false} whenactive="text-primary-900" statichref="/login" whennotactive="text-gray-600">
          Beranda
        </CustomLink>

        <CustomLink className="font-semibold" href="#" showline={false} whenactive="text-primary-900" whennotactive="text-gray-600">
          Login
        </CustomLink>
      </SimpleCard>
      <div className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:py-0">
          <div className="w-full bg-white rounded-lg shadow">
            <div className="p-6 space-y-4 sm:p-8 flex md:m-10 md:space-x-10">
              <div className="md:w-1/2 md:space-y-6">
                <form className="space-y-4 md:space-y-6" method="POST" onSubmit={OnSubmit}>
                  <div className="items-center justify-center flex flex-col md:my-12">
                    <img className="w-20" src="./image/benlogo.png" alt="" />
                    <h1 className="text-2xl font-bold md:text-4xl md:my-4">
                      Bengkel Koding
                    </h1>
                    <p className="text-sm mx-12 text-center md:text-lg md:mx-32 md:my-2">
                      Masuk dengan akun mahasiswa
                    </p>
                  </div>
                  <div>
                    <Label>Email</Label>
                    <GrayInput
                      type="email"
                      className="bg-primary-100 w-full p-3"
                      // value=""
                      name="email_mhs"
                      // onChange={(e) => setEmailMhs(e.target.value)}
                      placeholder="Masukkan alamat email"
                      // errorValue={state?.data ? state.data.email_mhs : ''}
                      errorValue={error.errors ? error.errors.email_mhs : ''}
                    />
                  </div>
                  <div>
                    <Label>Password</Label>
                    <GrayInput
                      type="password"
                      // value=""
                      name="password"
                      // onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan alamat email"
                      className="bg-primary-100 w-full p-3"
                      errorValue={error.errors ? error.errors.password : ''}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start md:items-center md:my-2">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3">
                        <label className="text-gray-500 text-xs md:text-lg">
                          Ingatkan Saya
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Lupa Kata Sandi?
                    </a>
                  </div>
                  <button
                    // type="submit"
                    disabled={pending}
                    className="w-full bg-blue-900 text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Masuk
                  </button>
                  <div className="flex justify-center">
                    <InputError value={error.message} />
                  </div>
                </form>
              </div>
              <div className="md:w-1/2">
                <img
                  className="hidden md:block md:rounded-3xl md:rounded-bl-[200px]"
                  src="./image/login_pic2.png"
                  alt="picture login"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default body;
