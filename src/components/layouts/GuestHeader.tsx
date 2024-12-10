import HeaderLayout from "@/components/layouts/HeaderLayout";
import PrimaryButton from "@/components/button/PrimaryButton";
import Navlink from "@/components/link/NavLink";
import Image from "next/image";
import CustomLink from "@/components/link/CustomLink";

const GuestNavbar = () => {
  return(
    <HeaderLayout className="m-4">
      <div className="flex lg:mx-20 mx-5 relative items-center">
        <div className="mr-auto w-[220px] h-[90px]">
          <CustomLink href="/" showline={false}>
            <Image src={"/image/Bengkod_Logo.png"}
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={220}
              height={90} alt="logo bengkod" />
          </CustomLink>
        </div>
        <div className="flex mr-20 gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full items-center">
          <Navlink
            statichref="#"
            href="#"
          >
            Beranda
          </Navlink>
          <Navlink
            statichref="#"
            href="#"
          >
            Tentang kami
          </Navlink>
          <Navlink
            statichref="#"
            href="#"
          >
            Tutorial
          </Navlink>
        </div>
        <div className="my-auto flex gap-x-4 items-center">
          <CustomLink href="/login" showline={false}>
            <PrimaryButton className="font-normal px-4">
              Masuk
            </PrimaryButton>
          </CustomLink>
          <CustomLink href="#" showline={false}>
            <PrimaryButton className="font-normal px-4">
              Daftar
            </PrimaryButton>
          </CustomLink>
        </div>
      </div>
    </HeaderLayout>
  )
}

export default GuestNavbar;