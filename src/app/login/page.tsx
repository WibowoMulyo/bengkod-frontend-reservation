import Image from "next/image";
import Navbar from "./navbar";
import Body from "./body";
import Footer from "./footer";

export default function page() {
  return (
    <div className="bg-gray-50">
      <Navbar />

      <Body />

      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}
