import Image from "next/image";
import ResponsiveImage from "./components/ResponsiveImage";

const firstSec = () => {
  return (
    <div className="my-24 md:mx-16" id="beranda">
      <div className="flex flex-col space-y-[2%] items-center text-center justify-center">
        <div className="text-[24px] md:text-[45px] font-semibold">
          <h1 className="mx-[64px]">
            Ruang Belajar Privat dan Produktif,
          </h1>
          <h1>
            Hanya
            <span className="bg-gradient-to-r from-[#1E3A8B] to-[#35C677] text-transparent bg-clip-text">
              {" "}Sekali Klik
            </span>
          </h1>
        </div>
        <h2 className="my-4 mx-6 text-[11px] md:text-[14px] md:text-xl md:mx-[120px]">
          Temukan ruang belajar yang sesuai dengan kebutuhanmu. Pesan sekarang
          dan dapatkan konfirmasi ketersediaan dalam 1 kali klik.
        </h2>
        <button
          className="text-white bg-[#1E3A8B] hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded-xl
          text-[13px] font-medium
          md:text-lg px-4 py-3">
          Pesan Sekarang
        </button>
      </div>

      <div className="hidden md:flex md:my-10 justify-center">
        <ResponsiveImage src="/img/meja-pack.png" width={1000} height={1000} className="w-[800px] h-[370px]" alt="foto meja" />
      </div>

      <div
        id="default-carousel"
        className="relative w-full my-12 lg:hidden"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 mx-8">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <ResponsiveImage src="/img/carousel/pic1.png" width={312} height={195} className="w-[312px] h-[195px]" alt="carousel image 1" />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <ResponsiveImage src="/img/carousel/pic2.png" alt="carousel image 2" width={312} height={195} className="w-[312px] h-[195px]" />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <ResponsiveImage src="/img/carousel/pic3.png" alt="carousel image 2" width={312} height={195} className="w-[312px] h-[195px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default firstSec;
