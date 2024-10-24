const footer = () => {
  return (
    <div className="bg-blue-900 flex flex-col text-white md:relative mt-4">
      <div className="mx-6 my-10 md:flex md:mx-40">
        <div className="md:absolute md:right-64 text-sm">
          <h4 className="flex my-6 md:text-sm items-center">Beranda</h4>
          <h4 className="flex my-6 md:text-sm items-center">Tentang Kami</h4>
          <h4 className="flex my-6 md:text-sm items-center">Tutorial</h4>
        </div>

        <div className="my-12 md:my-0 md:mr-64">
          <div className="flex space-x-4 my-6 items-center">
            <div className="size-12 md:size-16">
              <img src="./image/benlogo_white.png" alt="benlogo" />
            </div>
            <div>
              <h1 className="text-xl font-bold md:text-3xl">Bengkel Koding</h1>
              <h4 className="text-xs md:text-lg">Bengkel Koding Space</h4>
            </div>
          </div>

          <div className="text-xs space-y-4 md:text-sm">
            <p>Gedung H, lantai 6,</p>

            <p>Jl. Imam Bonjol No.207, Pendrikan Kidul, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50131.</p>

            <p>Universitas Dian Nuswantoro Semarang</p>
          </div>

          <div className="flex size-6 my-6 md:size-8 md:my-10">
            <img src="./image/block_tktk.png" alt="tiktok icon" />
            <img src="./image/block_twitta.png" alt="twitter icon" />
            <img src="./image/block_insta.png" alt="instagram icon" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center md:my-2">
        <hr className="border-gray-300 size-8/12" />
        <div className="my-6 text-xs flex items-center justify-center md:text-lg">Copyright © 2024. Bengkel Koding</div>
      </div>

      <div>
        <h1 className="text-blue-900">Atashi no</h1>
      </div>



      <div className="hidden md:block">
        <img className="left-0 bottom-0 absolute w-56" src="./image/bg-left-bottom.png" alt="" />
        <img className="right-0 top-0 absolute w-56" src="./image/bg-right-top.png" alt="" />
      </div>

    </div>
  )
};

export default footer;