// import HeaderAuth from "../component/layouts/header";
import GuestNavbar from "@/components/layouts/header/GuestHeader";
import ResponsiveImage from "../../components/ResponsiveImage";
import Footer from "../../components/layouts/footer"
const error_ui = () => {
  return (
    <section className="">
        {/* <HeaderAuth /> */}
        <GuestNavbar />
        <div className="flex justify-center items-center my-auto h-[637px]">
          <div className="font-normal text-[22px] w-[580px] flex flex-col gap-y-4">
            <p className="">404 Route not found</p>
            <h1 className="font-semibold text-5xl"><span className="text-primary-900">Oops!</span> Halaman tidak ditemukan</h1>
            <p>Halaman ini tidak ada atau sudah dihapus!
              Kami menyarankan Anda kembali ke halaman sebelumnya</p>
            <p>Kembali ke halaman Halaman Utama</p>
          </div>
          <ResponsiveImage
            src={"/image/error/error_404.png"}
            alt="error 404 image"
            width={570}
            height={490}
          />
        </div>
        <Footer/>
    </section>
  )
}

export default error_ui;