import HeaderLayout from "../HeaderLayout"
import PrimaryButton from "@/components/button/PrimaryButton";
import Navlink from "@/components/link/NavLink";
import Image from "next/image";
import CustomLink from "@/components/link/CustomLink";
import ResponsiveImage from "../../ResponsiveImage";
import LogoutButton from "@/components/button/LogoutButton";
export default function AdminHeader() {
  return (
    <header>
      <HeaderLayout>
        <div className="flex lg:mx-20 mx-5 relative items-center">
          <div className="mr-auto w-[220px] h-[90px]">
            <CustomLink href="/" showline={false}>
              <ResponsiveImage src={"/image/Bengkod_Logo.png"} alt="logo bengkod" width={220}
                height={90} />
            </CustomLink>
          </div>
          <div className="dropdown dropdown-end">
            <div className="" tabIndex={0}>
              <button>
                <div className="w-[60px]">
                  <ResponsiveImage
                    src={"/image/profile-image.jpeg"}
                    width={60}
                    height={60}
                    alt="logo profile" 
                    photoclassName="rounded-full" />
                </div>
              </button>
              <ul tabIndex={0} className="dropdown-content z-[1] w-52 p-2 shadow-md rounded-lg bg-white border-gray-100 border-2">
                <li>
                  <CustomLink href="/dashboard/profile" showline={false} className="font-semibold w-auto p-2 hover:bg-primary-900 hover:text-white rounded-md" whenactive="text-white bg-primary-900" whennotactive="text-gray-700">
                    Profile
                  </CustomLink>
                </li>
                <li>
                  <LogoutButton className="w-full text-left">
                    Logout
                  </LogoutButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </HeaderLayout>
      <nav></nav>
    </header>
  )
}