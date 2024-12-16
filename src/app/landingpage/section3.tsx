import Card from "./components/Card";
import Header from "./components/Header";

const thirdSec = () => {
  return (
    <div className="mx-10 my-24">
      <div className="flex flex-col justify-center items-center md:my-24 gap-y-4">
        <Header>Peraturan Kami</Header>
        <div className="text-center flex flex-col max-w-[698px]">
          <p className="text-[10px] text-wrap md:text-[14px] md:my-2">
            Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini
            untuk kenyamanan bersama saat menggunakan fasilitas bersama.
          </p>
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
    </div>
  );
};

export default thirdSec;
