'use client'
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import InputError from "../component/InputError";
import Cookies from 'js-cookie';
import Router from 'next/router';
import { redirect } from 'next/navigation'
import { RequestHttp } from "../services/Request";
const body = () => {
  const [email_mhs, setEmailMhs] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<any | ''>({})

  const sendRequest = async () => {
    // setError()
    const data = await RequestHttp({
      type: 'post', 
      url: `http://127.0.0.1:8000/api/login`,
      datas: {email_mhs: email_mhs, password: password},
    })
    if(data){
      Cookies.set('token', data.data.token)
    }
  }

  function onSubmit(e: any) {
    e.preventDefault()
    sendRequest()
  }
  useEffect(() => {
    if (Cookies.get('token')) {
      redirect('dashboard')
    }
  }, [])

  return (
    <div>
      <div
        className=" hidden md:flex max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow
      md:m-8"
      >
        <div className="flex items-center space-x-2">
          <h1 className="text-blue-800 font-bold text-lg">Beranda</h1>
          <svg
            className="w-6 h-6 text-gray-400 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
          <h1 className="text-lg">Login</h1>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:py-0">
          <div className="w-full bg-white rounded-lg shadow">
            <div className="p-6 space-y-4 sm:p-8 flex md:m-10 md:space-x-10">
              <div className="md:w-1/2 md:space-y-6">
                <form className="space-y-4 md:space-y-6" method="POST" onSubmit={(e) => onSubmit(e)}>
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
                    <label className="block mb-2 text-sm text-gray-900 dark:text-white md:text-lg">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email_mhs}
                      onChange={(e) => setEmailMhs(e.target.value)}
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Masukkan alamat email"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-900 dark:text-white md:text-lg">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      placeholder="Masukkan kata sandi"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            <h1 className="my-4 text-white">atashi no dayo</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default body;
