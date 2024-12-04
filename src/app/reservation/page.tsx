'use client'
import HeaderAuth from "../component/layouts/header";
import Step1 from '@/app/reservation/fragments/step1';
import Step2 from '@/app/reservation/fragments/step2';
import Step3 from '@/app/reservation/fragments/step3';
import axios from "axios";
import { useState } from "react";

import { Reservation } from "../component/interface/Reservation";
import { mapitem } from "../component/interface/Map";

const totalStep = [Step1, Step2, Step3];

const RenderStep = () => {
  // const [reservationdate, setReservationDate] = useState('')
  // const [reservationtype, setReservationType] = useState('')
  // const [reservationreason, setReservationReason] = useState('')
  // const [email, setEmail] = useState<string[]>([''])
  const [formdatastep1, setFormData] = useState<Reservation>()
  const [mapdata, setMapdata] = useState<mapitem[]>([])
  const [result, setSetup] = useState<any>()
  // const [table, setTable] = useState('')
  // const [timeslot, setTimeSlot] = useState('')
  // const [data, setData] = useState<any>()

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
      formdata={formdatastep1} 
         /> : ''
    case 2:
      // submit()
      return <Step3 step={nextButt} status={'1'} />
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