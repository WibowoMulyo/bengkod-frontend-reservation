const firstSec = () => {
  return (
    <div className="my-10 md:mx-16">
      <div className="font-poppins items-center text-center justify-center">
        <div className="mx-6 my-4">
          <div className="font-poppins font-bold text-2xl mx-8 md:text-5xl md:mx-40">
          <h1 className="">
          Ruang Belajar Privat dan Produktif, Hanya <span className="bg-gradient-to-r from-blue-800 to-green-500 text-transparent bg-clip-text"> Sekali Klik</span>
          </h1>
          </div>
          <h2 className="my-2 text-xs mx-4 md:text-xl md:mx-40 md:my-10">
            Temukan ruang belajar yang sesuai dengan kebutuhanmu. Pesan sekarang dan dapatkan konfirmasi ketersediaan dalam 1 kali klik.
          </h2>
        </div>
      <button className="text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
        text-sm px-3 py-1.5 me-2 mb-2
        md:text-3xl md:py-4 md:w-40 md:h-12
      ">
        Pesan Sekarang
      </button>
      </div>

      <div className="hidden md:flex md:w-10/12 md:my-10">
        <img className="hidden md:flex md:items-center md:justify-center" src="./image/group20.png" alt="preview bengkel koding" />
      </div>

      <div id="default-carousel" className="relative w-full my-12 md:hidden" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 mx-8">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="./image/carousel/pic1.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="./image/carousel/pic2.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="./image/carousel/pic3.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
        </div>
      </div>
    </div>
  )
};

export default firstSec;