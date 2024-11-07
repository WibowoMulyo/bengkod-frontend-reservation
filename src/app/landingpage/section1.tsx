import LandingButton from "./components/LandingButton";
import ResponsiveImage from "./components/ResponsiveImage";

const firstSec = () => {
  return (
    <div className="md:mx-16" id="beranda">
      <div className="flex my-12 flex-col space-y-[5%] items-center text-center justify-center">
        <div className="text-[24px] md:text-[45px] font-semibold">
          <h1 className="mx-[64px]">Ruang Belajar Privat dan Produktif,</h1>
          <h1>
            Hanya
            <span className="bg-gradient-to-r from-[#1E3A8B] to-[#35C677] text-transparent bg-clip-text">
              {" "}
              Sekali Klik
            </span>
          </h1>
        </div>
        <h2 className="mx-6 text-[11px] md:text-[14px] md:max-w-xl">
          Temukan ruang belajar yang sesuai dengan kebutuhanmu. Pesan sekarang
          dan dapatkan konfirmasi ketersediaan dalam 1 kali klik.
        </h2>
        <LandingButton>Pesan Sekarang</LandingButton>
      </div>
      <div className="flex justify-center carousel mx-auto w-[300px] h-[186px] md:w-[480px] md:h-[298px]">
        <div className="carousel-item">
          <img
            src="/img/carousel/pic1.png"
            alt="Carousel 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/img/carousel/pic2.png"
            alt="Carousel 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/img/carousel/pic3.png"
            alt="Carousel 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="hidden lg:flex md:my-10">
        <ResponsiveImage
          src="/img/meja-pack.png"
          width={300}
          height={186}
          className="w-[300px] h-[186px] md:w-[300px] md:h-[186px]"
          alt="foto meja"
        />
      </div>
    </div>
  );
};

export default firstSec;
