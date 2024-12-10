"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import ResponsiveImage from "@/components/ResponsiveImage";

export default function Error({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    console.error("An error occurred:", error); // Logging error untuk debugging
  }, [error]);

  return (
    <section className="">
        <div className="flex justify-center items-center my-auto h-[637px]">
          <div className="font-normal text-[22px] w-[580px] flex flex-col gap-y-4">
            <p className="">500 internal server error</p>
            <h1 className="font-semibold text-5xl"><span className="text-primary-900">Oops!</span> Halaman tidak ditemukan</h1>
            <p>Halaman ini tidak ada atau sudah dihapus!
              Kami menyarankan Anda kembali ke halaman sebelumnya</p>
            <p>Kembali ke halaman Halaman Utama</p>
          </div>
          <ResponsiveImage
            src={"/image/error/error_500.png"}
            alt="error 404 image"
            width={570}
            height={490}
          />
        </div>
    </section>
  )
}
