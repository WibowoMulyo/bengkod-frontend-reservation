import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2">
        <img className="p-8" src="/image/login_pic.png" alt="login picture" />
      </div>
      <div className="w-1/2">
      <div className="p-8 justify-center items-center h-screen py-48">
        <h1>Masuk dengan akun Mahasiswa</h1>
        <p>Masukkan email dan kata sandi Anda untuk melanjutkan</p>
        <input type="text"/>
        <input type="password" name="" id="" />
        <p>Forgot Password?</p>
        <button>Masuk</button>
      </div>
      </div>
    </div>
  )
};