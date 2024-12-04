import GuestNavbar from './component/layouts/guest-navbar';
import FirstSec from "@/app/landingpage/firstSection";
import SecondSec from "@/app/landingpage/secondSection";
import Footer from "@/app/component/layouts/footer";

export default function Home() {
  return (
    <div>
      <GuestNavbar />

      <FirstSec />

      <SecondSec />

      <Footer />
    </div>
  )
};
