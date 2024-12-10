'use server'
import Image from "next/image";
import GuestNavbar from '@/components/layouts/GuestHeader';
import Body from "./fragments/body";
import Footer from "@/components/layouts/footer";

export default async function page() {
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
