import Image from 'next/image'
import NavBar from "./navbar";
import FirstSec from "./firstSection";
import SecondSec from "./secondSection";
import Footer from "../layouts/footer";

export default function Home() {
  return (
    <div>
      <NavBar />

      <FirstSec />

      <SecondSec />

      <Footer />
    </div>
  )
};