'use server'
import Image from "next/image";
import GuestNavbar from '@/components/layouts/header/GuestHeader';
import Body from "./fragments/body";
import Footer from "@/components/layouts/footer";

export default async function page() {
  return (
    <section className="bg-gray-50">
      <GuestNavbar/>
      {/* <AdminNavbar/> */}

      <Body />

      <div className="hidden md:block">
        <Footer />
      </div>
    </section>
  );
}
