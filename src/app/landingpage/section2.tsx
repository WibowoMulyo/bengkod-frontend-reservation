const secondSec = () => {
  return (
    <div className="mx-[5%] my-16">
      <div className="md:flex">
        <div className="">
          <h1 className="text-2xl font-semibold md:text-5xl">Fasilitas Kami</h1>
          <p className="text-[11px] my-4 md:text-xl md:my-8 md:text-left">
            Butuh tempat nugas/belajar? Kami menyediakan fasilitas lengkap
            yang akan membantu kamu fokus dan mencapai hasil maksimal. Nikmati
            suasana belajar yang kondusif dengan fasilitas yang nyaman.
          </p>
          <img
            className="hidden md:block"
            src="./img/facility.png"
            alt="fasilitas"

          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex my-2 space-x-6 items-center">
            <div>
              <img
                className="min-w-[45px] max-w-[45px]"
                src="./img/internet_cepat.png"
                alt="internet cepat"
              />
            </div>
            <div className="md:mx-4">
              <h2 className="font-bold text-[16px] md:text-2xl">Internet Cepat</h2>
              <p className="text-[10px] md:text-lg">
                Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini
              </p>
            </div>
          </div>

          <div className="flex my-2 space-x-6 items-center">
            <div>
              <img
                className="min-w-[45px] max-w-[45px]"
                src="./img/air_conditioner.png"
                alt="internet cepat"
              />
            </div>
            <div className="md:mx-4">
              <h2 className="font-bold text-[16px] md:text-2xl">Air Conditioner</h2>
              <p className="text-[10px] md:text-lg">
                Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini
              </p>
            </div>
          </div>

          <div className="flex my-2 space-x-6 items-center">
            <div>
              <img
                className="min-w-[45px] max-w-[45px]"
                src="./img/stop_kontak.png"
                alt="stop kontak"
              />
            </div>
            <div className="md:mx-4">
              <h2 className="font-bold text-[16px] md:text-2xl">Stop Kontak</h2>
              <p className="text-xs md:text-lg">
                Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini
              </p>
            </div>
          </div>

          <div className="flex my-2 space-x-6 items-center">
            <div>
              <img
                className="min-w-[45px] max-w-[45px]"
                src="./img/televisi.png"
                alt="televisi"
              />
            </div>
            <div className="md:mx-4">
              <h2 className="font-bold text-[16px] md:text-2xl">Televisi</h2>
              <p className="text-[10px] md:text-lg ">
                Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini
              </p>
            </div>
          </div>

          <div className="flex my-2 space-x-6 items-center">
            <div>
              <img
                className="min-w-[45px] max-w-[45px]"
                src="./img/meja_kursi.png"
                alt="meja dan kursi belajar"
              />
            </div>
            <div className="md:mx-4">
              <h2 className="font-bold text-[16px] md:text-2xl">Meja dan Kursi BelajarI</h2>
              <p className="text-[10px] md:text-lg ">
                Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default secondSec;
