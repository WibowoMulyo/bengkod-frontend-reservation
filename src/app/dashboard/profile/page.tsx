'use client'
// import Dashboard_navbar from "../../template/dashboard-navbar";
import Footer from "../../template/footer";
import HeaderAuth from "../../template/header";

const renderDisplay = () => {
  return (
    <div className="">
      <HeaderAuth />
      <div className="flex md:flex-row flex-col">
        {/* <Dashboard_navbar /> */}
        <div className="mx-auto">
          <div className="bg-white w-full rounded-t-xl lg:min-w-[1150px] md:my-4 md:mr-4 ml-4 md:ml-0">
            <div className=""></div>
            <div className="font-bold text-xl p-8">
              <h1>Pengaturan</h1>
            </div>
            <hr className="text-[#D9D9D9] w-full border-2" />
            <div className="md:py-[6%] md:px-[10%]">
              <div className="flex items-center space-x-[2.5%]">
                <div className="capitalize font-bold text-sm relative">
                  <div className="absolute -top-9 left-0 text-nowrap">
                    <h1 className="">Gambar profil</h1>
                  </div>
                  <img src="/image/profile-image.jpeg" className="rounded-full mx-auto" width={110} alt="" />
                </div>
                <button className="bg-[#D0D5DD] rounded-lg p-2 capitalize text-white">ubah gambar</button>
                <button className="bg-[#D92D20] rounded-lg p-2 capitalize text-white">hapus gambar</button>
              </div>
              <div className="flex flex-col mt-[4%] space-y-[1.5%]">
                <div className="bg-[#E9EEF9] p-6 rounded-2xl italic text-[14px] font-normal text-[#344054]">
                  <p className="mb-4">
                  Peraturan pengguna:
                  </p>
                  <ol>
                    <li>1. Pengguna diperbolehkan meminjam meja 1 kali dalam 1 hari</li>
                    <li>2. Pengguna diperbolehkan meminjam meja maksimal untuk 2 hari kedepan</li>
                    <li>3. Pengguna dilarang membawa makan dan minum kedalam lobby H6</li>
                    <li>4. Bagi pengguna yang tidak mengikuti aturan akan dikenakan penalti selama 1  minggu</li>
                    <li>5. Jika pengguna sudah pesan tetapi tidak melakukan konfirmasi kehadiran selama 1 jam, akan terbatalkan secara sistem</li>
                  </ol>
                </div>

                <div className="font-normal">
                  <h1 className="text-sm">Nama profil</h1>
                  <div className="text-[#667085] text-[16px] mt-2">
                    <input type="text" className="border-2 border-[#D0D5DD] rounded-lg pl-[1.5%] py-[1%] pr-[10%]" value={"Kaoruko Waguri"} />
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="font-normal w-full mr-auto">
                    <h1 className="text-sm">Email</h1>
                    <div className="text-[#667085] text-[16px] mt-2">
                      <input type="text" className="border-2 border-[#FDA29B] rounded-lg pl-[1.5%] py-[1%] pr-[10%]" value={"Kaoruko Waguri"} />
                    </div>
                    <div className="text-[#F04438] text-sm mt-1">
                      <p>Harus menggunakan email mahasiswa</p>
                    </div>
                  </div>
                  <button className="bg-[#1E3A8B] rounded-xl text-white py-2 px-3 capitalize h-1/2 ">
                    simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default renderDisplay;