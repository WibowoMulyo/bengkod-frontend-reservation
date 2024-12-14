
import GuestNavbar from "@/components/layouts/GuestHeader";
import Step1 from "./fragments/step1";
import Step2 from "./fragments/step2";
import Step3 from "./fragments/step3";
import RenderStep from "./fragments/allstep";

const renderDisplay = () => {
  return (
    <section>
      <GuestNavbar />
      <RenderStep/>
    </section >
  )
}

export default renderDisplay;