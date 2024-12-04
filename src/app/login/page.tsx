import Image from "next/image";
import GuestNavbar from '@/app/component/layouts/guest-navbar';
import Body from "./body";
import Footer from "./footer";

export default function page() {
  return (
    <div className="bg-gray-50">
      <GuestNavbar/>

      <Body />

      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}
