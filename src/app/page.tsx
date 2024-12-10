import GuestNavbar from '@/components/layouts/GuestHeader';
import FirstSec from "@/app/(guest)/landingpage/firstSection";
import SecondSec from "@/app/(guest)/landingpage/secondSection";
import Footer from "@/components/layouts/footer";

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
