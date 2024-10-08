const body_landing = () => {
  return (
    <div>
      <div className="p-8">
        <div>
          <h1 className="text-4xl items-center justify-center flex text-center">Ruang Belajar Privat dan Produktif,</h1>
          <h1 className="text-4xl items-center justify-center flex">Hanya Sekali Klik</h1>
        </div>
        <p className="items-center justify-center flex text-center p-4">Temukan ruang belajar yang sesuai dengan kebutuhanmu. Pesan sekarang dan dapatkan konfirmasi ketersediaan dalam 1 kali klik</p>
        <div className="items-center justify-center flex">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Pesan Sekarang</button>  
        </div>
      </div>

      <div className="flex items-center justify-center size-10/12 p-4">
        <img src="/image/group20.png" alt="bengkod_imgs" />
      </div>

      <div className="p-8 mx-32">
        <div>
          <h1 className="text-4xl items-center justify-center flex text-center">Tentang Kami</h1>
        </div>
        <div className="p-8">
          <p className="items-center justify-center flex text-center">Di Lobby H6, kami percaya bahwa setiap individu memiliki potensi yang luar biasa. Kami menyediakan ruang dan fasilitas yang mendukungmu untuk menggali potensi tersebut. Baik kamu sedang mempersiapkan ujian, mengerjakan tugas kelompok, atau sekadar ingin belajar dalam lingkungan yang kondusif, Lobby H6 adalah tempat yang tepat untukmu.</p>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-24">
        <div className="max-w-72">
          <img src="/image/ds.png" alt="data secure"/>
          <p className="text-center font-sans p-2">Data Secure</p>
        </div>
        <div className="max-w-72">
          <img src="/image/fl.png" alt="flexibility"/>
          <p className="text-center font-sans p-2">Flexibility</p>
        </div>
        <div className="max-w-72">
          <img src="/image/ds2.png" alt="data secure"/>
          <p className="text-center font-sans p-2">Data Secure</p>
        </div>
      </div>

      <div className="p-32">
        <h1 className="text-4xl items-center justify-center flex text-center p-8">Tutorial Pemesanan</h1>
        <iframe className="w-full aspect-video" src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></iframe>
      </div>
    </div>
  )
};

export default body_landing;