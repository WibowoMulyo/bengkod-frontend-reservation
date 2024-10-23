import Image from "next/image";
import NavBar from "./navbar";
import FirstSec from "./section1";
import SecondSec from "./section2";
import ThirdSec from "./section3";
import ForthSec from "./section4";
import Footer from "./footer";

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
