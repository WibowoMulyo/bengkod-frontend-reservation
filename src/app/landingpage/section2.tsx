const secondSec = () => {
  return (
    <div className="mx-8 my-16">
      <div className="lg:flex lg:flex-col-2">
        <div className="text-center md:flex md:flex-col md:justify-center md:items-center md:mx-20 lg:size-1/2">
          <div className="md:flex md:flex-col md:justify-center lg:items-center">
            <h1 className="text-[24px] font-bold md:text-[36px]">
              Fasilitas Kami
            </h1>
            <p className="text-[11px] my-4 md:text-[14px] lg:my-8 lg:text-left">
              Butuh tempat nugas/belajar? Kami menyediakan fasilitas lengkap
              yang akan membantu kamu fokus dan mencapai hasil maksimal. Nikmati
              suasana belajar yang kondusif dengan fasilitas yang nyaman.
            </p>
            <img
              className="hidden lg:block"
              src="./img/facility.png"
              alt="fasilitas"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:mx-10">
          <div className="flex my-2 space-x-6 items-center">
            <div>
              <img
                className="min-w-[45px] max-w-[45px] md:min-w-[60px] md:max-w-[60px]"
                src="./img/internet_cepat.png"
                alt="internet cepat"
              />
            </div>
            <div className="md:mx-4">
              <h2 className="font-bold text-[16px] md:text-2xl">
                Internet Cepat
              </h2>
              <p className="text-[10px] md:text-lg">
                Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini
              </p>
            </div>
          </div>

          <div className="flex my-2 space-x-6 items-center">
            <div>
              <img
                className="min-w-[45px] max-w-[45px]  md:min-w-[60px] md:max-w-[60px]"
                src="./img/air_conditioner.png"
                alt="internet cepat"
              />
            </div>
            <div className="md:mx-4">
              <h2 className="font-bold text-[16px] md:text-2xl">
                Air Conditioner
              </h2>
              <p className="text-[10px] md:text-lg">
                Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini
              </p>
            </div>
          </div>

          <div className="flex my-2 space-x-6 items-center">
            <div>
              <img
                className="min-w-[45px] max-w-[45px]  md:min-w-[60px] md:max-w-[60px]"
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
                className="min-w-[45px] max-w-[45px] md:min-w-[60px] md:max-w-[60px]"
                src="./img/televisi.png"
                alt="televisi"
              />
            </div>
            <div className="md:mx-4">
              <h2 className="font-bold text-[16px] md:text-2xl">Televisi</h2>
              <p className="text-[10px] md:text-lg">
                Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini
              </p>
            </div>
          </div>

          <div className="flex my-2 space-x-6 items-center">
            <div>
              <img
                className="min-w-[45px] max-w-[45px] md:min-w-[60px] md:max-w-[60px]"
                src="./img/meja_kursi.png"
                alt="meja dan kursi belajar"
              />
            </div>
            <div className="md:mx-4">
              <h2 className="font-bold text-[16px] md:text-2xl">
                Meja dan Kursi BelajarI
              </h2>
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
