import Card from "./components/Card";
import Header from "./components/Header";

const thirdSec = () => {
  return (
    <div className="mx-10 my-24">
        <div className="flex flex-col justify-center items-center md:my-24 gap-y-4">
          <Header>Peraturan Kami</Header>
          <div className="text-center flex flex-col">
              <p className="text-[10px] md:text-[14px] lg:my-8 text-wrap">
                Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini
                untuk kenyamanan bersama saat menggunakan fasilitas bersama.
              </p>
          </div>
          <div className="md:flex gap-x-12">
            <div className="flex flex-col gap-y-8">
              <Card srcImage="/img/time_management.png"
                header="Waktu Penggunaan"
                content="Patuhi jam operasional ruang belajar yang sudah ditetapkan."
              />
              <Card srcImage="/img/ketenangan.png"
                header="Ketenangan"
                content="Jaga suasana tenang. Hindari suara berisik yang mengganggu
                  pengguna lain."
              />
            </div>
            <div className="flex flex-col gap-y-8">
              <Card srcImage="/img/no_bever.png"
                header="Makanan & Minuman"
                content="Dilarang makan makanan berat yang berbau menyengat di dalam
                ruangan."
              />
              <Card srcImage="/img/clean.png"
                header="Kebersihan"
                content="Jaga kebersihan lingkungan sekitar. Buang sampah pada
                  tempatnya."
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default thirdSec;
