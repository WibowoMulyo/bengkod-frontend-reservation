
import GuestNavbar from "@/components/layouts/GuestHeader";

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