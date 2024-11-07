import Header from "./components/Header";
import ResponsiveImage from "./components/ResponsiveImage";
import UnorderedList from "./components/UnorderedList";

const secondSec = () => {
  return (
    <div className="my-24">
      <div className="md:flex gap-x-10 justify-center">
        <div className="flex flex-col lg:gap-y-1 gap-y-4">
          {/* <h1 className="text-2xl font-semibold md:text-4xl lg:text-left text-center">Fasilitas Kami</h1> */}
          <Header>Fasilitas kami</Header>
          <div className="flex lg:space-x-[50px] space-y-[16px] lg:flex-row flex-col">
            <div className="w-5/6 text-center mx-auto lg:w-[500px] lg:text-left">
              <p className="text-[11px] md:text-lg md:my-8 text-wrap">
                Butuh tempat nugas/belajar? Kami menyediakan fasilitas lengkap
                yang akan membantu kamu fokus dan mencapai hasil maksimal. Nikmati
                suasana belajar yang kondusif dengan fasilitas yang nyaman.
              </p>
              <ResponsiveImage src="/img/facility.png" width={500} height={300} className="h-[290px] lg:block hidden" alt="foto desc" />
            </div>

            <div className="flex flex-col justify-center items-center mx-10 space-y-8 lg:w-[500px]">
              <UnorderedList
                srcImage="/img/internet_cepat.png"
                header="Internet Cepat"
                content="Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini"
              />
              <UnorderedList
                srcImage="/img/air_conditioner.png"
                header="Air Conditioner"
                content="Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini"
              />
              <UnorderedList
                srcImage="/img/stop_kontak.png"
                header="Stop kontak"
                content="Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini"
              />
              <UnorderedList
                srcImage="/img/televisi.png"
                header="Televisi"
                content="Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini"
              />
              <UnorderedList
                srcImage="/img/meja_kursi.png"
                header="Meja dan kursi belajar"
                content="Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default secondSec;
