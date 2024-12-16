'use client'
import HeaderAuth from "@/components/layouts/header/AuthHeader";
import Step1 from '@/app/(user)/reservation/fragments/step1';
import Step2 from '@/app/(user)/reservation/fragments/step2';
import Step3 from '@/app/(user)/reservation/fragments/step3';
import { useState } from "react";

import { Reservation } from "@/components/interface/Reservation";
import { mapitem } from "@/components/interface/Map";

const totalStep = [Step1, Step2, Step3];

const RenderStep = () => {

  const [formdatastep1, setFormData] = useState<Reservation>()
  const [mapdata, setMapdata] = useState<mapitem[]>([])
  const [result, setResult] = useState<any>()

  const [step, setStep] = useState(0);

  function nextButt() {
    if (step < totalStep.length - 1) {
      setStep(step + 1)
    }
  }

  function submit() {
    console.log(formdatastep1)
  }

  switch (step) {
    case 0:
      return <Step1
        onClick={nextButt}
        setFormData={setFormData}
        setMapData={setMapdata}
      />
    case 1:
      // console.log(formdatastep1)
      return mapdata ? <Step2 step={nextButt}
      mapdata={mapdata}
      setResult={setResult}
      formdata={formdatastep1} 
         /> : ''
    case 2:
      // submit()
      return <Step3 step={nextButt} status={'1'} result={result} data={formdatastep1}/>
  }
}


const renderDisplay = () => {

  return (
    <div className="">
      <HeaderAuth />
      <RenderStep />
    </div>
  )
}

export default renderDisplay;