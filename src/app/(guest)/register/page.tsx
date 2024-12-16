
import GuestNavbar from '@/components/layouts/header/GuestHeader';

import RenderStep from "./fragments/allstep";
import Footer from "@/components/layouts/footer";
const renderDisplay = () => {
  return (
    <section>
      <GuestNavbar />
      <RenderStep/>
      <Footer/>
    </section >
  )
}

export default renderDisplay;