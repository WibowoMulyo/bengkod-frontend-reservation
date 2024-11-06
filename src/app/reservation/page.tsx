'use client'
import HeaderAuth from "../layouts/header";
import Step1 from '@/app/reservation/fragments/step1';
import Step2 from '@/app/reservation/fragments/step2';
import Step3 from '@/app/reservation/fragments/step3';
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import PrimaryCard from "../dashboard/components/PrimaryCard";
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

  const [step, setStep] = useState(0);

  const refform = useRef(0)
  function nextButt() {
    if (step < totalStep.length - 1) {
      setStep(step + 1)
    }
  }

  useEffect(() => {
    if (step === 0) {
      document.getElementById('my_modal_peraturan')?.showModal()
    }
  }, [])

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

      <dialog id="my_modal_peraturan" className="modal">
        <div className="rounded-2xl italic text-[14px] font-normal bg-primary-200 text-gray-700 modal-box max-w-[45%]">
          <div className="flex">
            <p className="mb-4">
              Peraturan pengguna:
            </p>

          </div>
          <ol>
            <li>1. Pengguna diperbolehkan meminjam meja 1 kali dalam 1 hari</li>
            <li>2. Pengguna diperbolehkan meminjam meja maksimal untuk 2 hari kedepan</li>
            <li>3. Pengguna dilarang membawa makan dan minum kedalam lobby H6</li>
            <li>4. Bagi pengguna yang tidak mengikuti aturan akan dikenakan penalti selama 1  minggu</li>
            <li>5. Jika pengguna sudah pesan tetapi tidak melakukan konfirmasi kehadiran selama 1 jam, akan terbatalkan secara sistem</li>
          </ol>
          {/* <PrimaryCard>
          </PrimaryCard> */}
        </div>
        <form method="dialog" className="modal-backdrop h-screen w-screen">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default renderDisplay;