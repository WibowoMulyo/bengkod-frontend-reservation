import Image from 'next/image'
import NavBar from "./navbar";
import FirstSec from "./firstSection";
import SecondSec from "./secondSection";
import Footer from "../component/layouts/footer";

export default function Home() {
  return (
    <div>
      <NavBar />

      <Section1 />

      <Section2 />

      <Footer />
    </div>
  )
};
