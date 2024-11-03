'use client'
import HeaderAuth from "../layouts/header";
import Step1 from '@/app/reservation/form/step1';
import Step2 from '@/app/reservation/form/step2';
import Step3 from '@/app/reservation/form/step3';
import axios from "axios";
import { useRef, useState } from "react";

const totalStep = [Step1, Step2, Step3];

const RenderStep = () => {
  const [reservationdate, setReservationDate] = useState('')
  const [reservationtype, setReservationType] = useState('')
  const [reservationreason, setReservationReason] = useState('')
  const [table, setTable] = useState('')
  const [timeslot, setTimeSlot] = useState('')
  const [code, setCode] = useState('')
  const [email, setEmail] = useState<string[]>([''])

  const [status, setStatus] = useState('')

  const [step, setStep] = useState(1);

  const refform = useRef(0)
  function nextButt() {
    if (step < totalStep.length - 1) {
      setStep(step + 1)
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


const renderDisplay = () => {
  return (
    <div className="">
      <HeaderAuth />
      <RenderStep />
    </div>
  )
}

export default renderDisplay;