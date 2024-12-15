'use client'
import GuestNavbar from "@/components/layouts/GuestHeader";
import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import { useState } from "react";
import { register } from "@/components/interface/Register";

const totalStep = [Step1, Step2, Step3]

const RenderStep = () => {
  const [step, setStep] = useState(0);
  const [registerdata, setRegisterData] = useState<register>()
  function nextAction(){
    if(step < totalStep.length - 1){
      setStep(prev => prev + 1)
    }
  }
  function prevAction(){
    if(step > 0){
      setStep(prev => prev -1)
    }
  }
  switch(step){
    case 0:
      return <Step1 data={registerdata} setFormData={setRegisterData} onClick={nextAction}/>
    case 1:
      return <Step2 data={registerdata} onPrevious={prevAction} onSubmit={nextAction}/>
    case 2:
      return <Step3 email={registerdata?.email_mhs || ''}/>
    default:
  }

}

export default RenderStep;