import Image from "next/image";
import NavBar from "@/app/landingpage/navbar";
import FirstSec from "@/app/landingpage/section1";
import SecondSec from "@/app/landingpage/section2";
import ThirdSec from "@/app/landingpage/section3";
import ForthSec from "@/app/landingpage/section4";
import Footer from "@/app/landingpage/footer";

export default function Home() {
  return (
    <div>
      <NavBar />

      <FirstSec />

      <SecondSec />

      <ThirdSec />
      
      <ForthSec />

      <Footer />
    </div>
  );
}
