const thirdSec = () => {
  return (
    <div className="mx-12 my-16">
      <div className="my-16">
        <div className="flex flex-col justify-center items-center md:my-32">
          <div className="text-center">
            <h1 className="font-bold text-[24px] md:text-4xl">Peraturan Kami</h1>
            <p className="text-[10px] my-2 md:text-xl md:mx-48">
              Hai Dinusian harap memperhatikan beberapa peraturan dibawah ini
              untuk kenyamanan bersama saat menggunakan fasilitas bersama.
            </p>
          </div>
          <div className="md:flex md:flex-col-2">
            <div>
              <div
                className="text-center justify-center items-center max-w-2xs p-6 bg-white border border-gray-200 rounded-lg shadow-md mx-6 my-6
          md:mx-12"
              >
                <img
                  className="size-[150px] mx-auto"
                  src="./img/time_management.png"
                  alt="manajemen waktu"
                />
                <h2 className="font-bold my-2 text-[16px] md:text-lg">Waktu Penggunaan</h2>
                <p className="text-[10px] mx-4 md:text-sm">
                  Patuhi jam operasional ruang belajar yang sudah ditetapkan,
                  waktu adalah uang.
                </p>
              </div>

              <div
                className="text-center max-w-2xs p-6 bg-white border border-gray-200 rounded-lg shadow-md mx-6 my-6
          md:mx-12"
              >
                <img
                  className="size-[150px] mx-auto"
                  src="./img/ketenangan.png"
                  alt="manajemen waktu"
                />
                <h2 className="font-bold my-2 text-[16px] md:text-lg">Ketenangan</h2>
                <p className="text-[10px] mx-4 md:text-sm">
                  Jaga suasana tenang. Hindari suara berisik yang mengganggu
                  pengguna lain.
                </p>
              </div>
            </div>
            <div>
              <div
                className="text-center max-w-2xs p-6 bg-white border border-gray-200 rounded-lg shadow-md mx-6 my-6
          md:mx-12"
              >
                <img
                  className="size-[150px] mx-auto"
                  src="./img/no_bever.png"
                  alt="manajemen waktu"
                />
                <h2 className="font-bold my-2 text-[16px] md:text-lg">Makanan & Minuman</h2>
                <p className="text-[10px] mx-4 md:text-sm">
                  Dilarang makan makanan berat yang berbau menyengat di dalam
                  ruangan.
                </p>
              </div>

              <div
                className="text-center max-w-2xs p-8 bg-white border border-gray-200 rounded-lg shadow-md mx-6 my-6
          md:mx-12 md:size-auto"
              >
                <img
                  className="md:py-0 size-[150px] mx-auto"
                  src="./img/clean.png"
                  alt="manajemen waktu"
                />
                <h2 className="font-bold my-2 text-[16px] md:text-lg">Kebersihan</h2>
                <p className="text-[10px] mx-4 md:text-sm">
                  Jaga kebersihan lingkungan sekitar. Buang sampah pada
                  tempatnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default thirdSec;
