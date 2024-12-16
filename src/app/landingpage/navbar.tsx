import HeaderLayout from "../component/layouts/HeaderLayout";
import PrimaryButton from "../component/Button/PrimaryButton";
import Navlink from "../component/Link/NavLink";
import Image from "next/image";
import CustomLink from "../component/Link/CustomLink";

const navbar = () => {
  return (
    <HeaderLayout className="m-4 fixed top-0">
      <div className="flex lg:mx-20 mx-5 relative items-center">
        <div className="mr-auto w-[220px] h-[90px]">
          <Image
            src={"/image/Bengkod_Logo.png"}
            style={{
              width: "100%",
              height: "auto",
            }}
            width={220}
            height={90}
            alt="logo bengkod"
          />
        </div>
        <div className="flex mr-20 gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full items-center">
          <Navlink statichref="#section1" href="#">
            Beranda
          </Navlink>
          <Navlink statichref="#section2" href="#">
            Tentang kami
          </Navlink>
          <Navlink statichref="#section4" href="#">
            Tutorial
          </Navlink>
        </div>
        <div className="my-auto flex gap-x-4 items-center">
          <CustomLink href="#" showline={false}>
            <PrimaryButton className="font-normal px-4">Masuk</PrimaryButton>
          </CustomLink>
          <CustomLink href="#" showline={false}>
            <PrimaryButton className="font-normal px-4">Daftar</PrimaryButton>
          </CustomLink>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default navbar;
