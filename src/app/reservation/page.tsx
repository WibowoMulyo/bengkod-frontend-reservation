'use client'
import HeaderAuth from "../template/header";
import Step1 from '@/app/reservation/form/step-1';
import Step2 from '@/app/reservation/form/step-2';
import Step3 from '@/app/reservation/form/step-3';
import axios from "axios";
import { useRef, useState } from "react";

const totalStep = [Step1, Step2, Step3];


const renderDisplay = () => {
  const [reservationdate, setReservationDate] = useState('')
  const [reservationtype, setReservationType] = useState('')
  const [reservationreason, setReservationReason] = useState('')
  const [table, setTable] = useState('')
  const [timeslot, setTimeSlot] = useState('')
  const [code, setCode] = useState('')
  const [email, setEmail] = useState<string[]>([''])

  const [status, setStatus] = useState('')

  const [step, setStep] = useState(0);

  const refform = useRef(0)
  function nextButt() {
    // if (step === 1) {
    //   submit()
    //   console.log("memasuki set table!", table)
    //   console.log("memasuki timeslot!", timeslot)
    // }
    if (step < totalStep.length - 1) {
      setStep(step+1)
    }
  }

  function submit() {
    const formData = {
      reservationdate: reservationdate,
      reservationtype: reservationtype,
      reservationreason: reservationreason,
      time: timeslot,
      table: table,
      email: email,
    }
    console.log(formData)
  }

  function prevButt() {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const RenderStep = () => {
    switch (step) {
      case 0:
        return <Step1
          onClick={nextButt}
          reserveDate={setReservationDate}
          reserveEmail={setEmail}
          reserveOpt={setReservationType}
          reserveReason={setReservationReason}
        />
      case 1:
        return <Step2 step={nextButt}
          reserveTable={setTable}
          timeSlot={setTimeSlot} />
      case 2:
        submit()
        return <Step3 step={nextButt} status={'1'} />
    }
  }

  function date2String() {
    const date = new Date('2024-10-22')
    console.log(date.getDay())
  }
  return (
    <div className="">
      <HeaderAuth />
      <RenderStep />
    </div>
  )
}

export default renderDisplay;