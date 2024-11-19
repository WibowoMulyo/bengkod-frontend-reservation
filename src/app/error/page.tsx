import HeaderAuth from "../component/layouts/header";
import ResponsiveImage from "../component/ResponsiveImage";
import Footer from "../component/layouts/footer"
const maintenance = () => {
  return (
    <section className="">
        <HeaderAuth />
        <div className="flex flex-col justify-center items-center my-auto h-[737px]">
          <ResponsiveImage
            src={"/image/error/maintenance.png"}
            alt="Maintenance"
            width={570}
            height={490}
          />
          <div className="font-normal text-lg w-[580px] flex flex-col gap-y-4">
            <h1 className="font-semibold text-2xl text-center">Situs sedang dalam perawatan</h1>
            <p className="text-center">Mohon maaf atas ketidaknyamanannya! Saat ini, kami sedang melakukan perawatan untuk meningkatkan layanan. Kami akan kembali secepatnya. Terima kasih atas kesabaran Anda!</p>
          </div>
        </div>
        <Footer/>
    </section>
  )
}

export default maintenance;