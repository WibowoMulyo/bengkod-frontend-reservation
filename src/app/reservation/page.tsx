'use client'
import HeaderAuth from "../template/header";
import Step1 from '@/app/reservation/form/step1';
import Step2 from '@/app/reservation/form/step2';
import Step3 from '@/app/reservation/form/step3';
import axios from "axios";
import { useState } from "react";

const totalStep = [Step1, Step2, Step3];


const renderDisplay = () => {
    const [reservationDate, setReservationDate] = useState('')
    const [reservationType, setReservationType] = useState('')
    const [time, settime] = useState<string[]>([''])
    const [endedAt, setEndedAt] = useState('')
    const [email, setEmail] = useState<string[]>([''])
    const [table, setTable] = useState()

    const [status, setStatus] = useState('')

    const [step, setStep] = useState(1);
    function nextButt(){
        if(step == totalStep.length - 1){
            // submit()
            console.log(date2String())
        }
        if (step < totalStep.length - 1) {
            setStep(step + 1)
        }
    }

    function submit(){
        const formData = {
            reservationDate: reservationDate,
            reservationType: reservationType,
            time: time,
            email: email,
            table: table
        }
        axios.post("#", formData).then(
            (response)=>{
                setStatus(response.data)
                console.log(response.data)
            }
        )
    }

    function prevButt(){
        if (step > 0) {
            setStep(step - 1)
        }
    }

    const RenderStep = () => {
        switch (step) {
            case 0:
                return <Step1
                    onClick={nextButt}
                    reserv_date={setReservationDate}
                    reserv_email={setEmail}
                    reserv_opt={setReservationType}
                />
            case 1:
                return <Step2 step={nextButt} dur_arr={settime}/>
            case 2:
                return <Step3 step={nextButt} status={'1'}/>

        }
    }

    function date2String(){
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