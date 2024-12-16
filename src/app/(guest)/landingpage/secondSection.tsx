import Card from "@/components/card/Card";
const firstSec = () => {
  return (
    <div className="mx-12 my-16">
      <div className="md:flex md:flex-col-2" id="aboutme">
        <div className="text-center md:size-1/2 md:flex md:flex-col md:justify-center md:items-center md:mx-20">
          <div className="md:flex md:flex-col md:justify-center md:items-center">
            <h1 className="text-2xl font-bold md:text-5xl">Fasilitas Kami</h1>
            <p className="text-xs my-4 md:text-xl md:my-8 md:text-left">Butuh tempat nugas/belajar? Kami menyediakan fasilitas lengkap yang akan membantu kamu fokus dan mencapai hasil maksimal. Nikmati suasana belajar yang kondusif dengan fasilitas yang nyaman.</p>
            <img className="hidden md:block" src="./image/facility.png" alt="fasilitas" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:mx-10">
          <div className=" flex my-2 space-x-4 items-center">
            <div>
              <img className="w-20" src="/image/internet_cepat.png" alt="internet cepat" />
            </div>
            <div className="md:mx-4">
              <h2 className="font-bold md:text-2xl">Internet Cepat</h2>
              <p className="text-xs md:text-lg">Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini</p>
            </div>
          </div>

          <div className="flex my-2 space-x-4 items-center">
            <div>
              <img className="w-20" src="/image/air_conditioner.png" alt="internet cepat" />
            </div>
            <div className="md:mx-4">
              <h2 className="font-bold md:text-2xl">Air Conditioner</h2>
              <p className="text-xs md:text-lg">Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini</p>
            </div>
          </div>

          <div className="flex my-2 space-x-4 items-center">
            <div>
              <img className="w-20" src="/image/stop_kontak.png" alt="stop kontak" />
            </div>
            <div className="md:mx-4">
              <h2 className="font-bold md:text-2xl">Stop Kontak</h2>
              <p className="text-xs md:text-lg">Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini</p>
            </div>
          </div>

          <div className="flex my-2 space-x-4 items-center">
            <div>
              <img className="w-20" src="/image/televisi.png" alt="televisi" />
            </div>
            <div className="md:mx-4">
              <h2 className="font-bold md:text-2xl">Televisi</h2>
              <p className="text-xs md:text-lg ">Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini</p>
            </div>
          </div>

          <div className="flex my-2 space-x-4 items-center">
            <div>
              <img className="w-20" src="/image/meja_kursi.png" alt="meja dan kursi belajar" />
            </div>
            <div className="md:mx-4">
              <h2 className="font-bold md:text-2xl">Meja dan Kursi BelajarI</h2>
              <p className="text-xs md:text-lg ">Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini</p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-16">
        <div className="flex flex-col justify-center items-center md:my-32">
          <div className="text-center">
            <h1 className="font-bold text-xl md:text-4xl">Peraturan Kami</h1>
            <p className="text-xs my-2 md:text-xl md:mx-48">Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini untuk kenyamanan bersama saat menggunakan fasilitas bersama.</p>
          </div>
          <div className="md:flex gap-x-12">
            {[
              [
                {
                  srcImage: "/image/time_management.png",
                  header: "Waktu Penggunaan",
                  content:
                    "Patuhi jam operasional ruang belajar yang sudah ditetapkan.",
                },
                {
                  srcImage: "/image/ketenangan.png",
                  header: "Ketenangan",
                  content:
                    "Jaga suasana tenang. Hindari suara berisik yang mengganggu pengguna lain.",
                },

                {
                  srcImage: "/image/no_bever.png",
                  header: "Makanan & Minuman",
                  content:
                    "Dilarang makan makanan berat yang berbau menyengat di dalam ruangan.",
                },
                {
                  srcImage: "/image/clean.png",
                  header: "Kebersihan",
                  content:
                    "Jaga kebersihan lingkungan sekitar. Buang sampah pada tempatnya.",
                },
              ],
            ].map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="flex flex-col md:grid md:grid-cols-2 md:gap-x-[80px] gap-y-4"
              >
                {column.map((card, index) => (
                  <Card
                    key={index}
                    className="md:col-span-1"
                    srcImage={card.srcImage}
                    header={card.header}
                    content={card.content}
                  />
                ))}
              </div>
            ))}
          </div>

        </div>

        <div className="my-8 flex flex-col justify-center items-center mx-auto text-center sm:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow
        md:max-w-4xl md:max-h-fit" id="tutorial">
          <img className="mx-auto size-10 md:size-20" src="./image/benlogo.png" alt="manajemen waktu" />
          <h2 className="font-bold my-2 md:text-3xl">Bengkel Koding</h2>
          <p className="text-xs md:text-lg md:m-4 md:mx-40">Berikut adalah tutorial memesan tempat belajar melalui website bengkel koding</p>

          <div className="my-2 flex justify-center items-center w-full">
            <iframe width="560" 
            height="315" 
            src="https://www.youtube.com/embed/uxI49vC3cGM?si=SBqU0PzY2eERhKJQ" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className="w-full h-full lg:min-h-[480px]"></iframe>
          </div>
        </div>
      </div>

    </div>
  )
};

export default firstSec;