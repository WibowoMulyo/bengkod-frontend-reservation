'use client'
import HeaderAuth from "../../template/header";
// import Calendar from "@/app/component/calendar/Calendar";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useEffect, useState } from "react";
import RadioGroup from "../../component/radiobutton/RadioGroup";
import RadButton from "../../component/radiobutton/RadioButton";
import Checkbox from "../../component/Button";

interface props {
    step?: () => void,
    dur_arr: (val: string[]) => void,
    reserved_time: string[]
}

const renderDisplay = ({ step, dur_arr, reserved_time }: props) => {
    const durations = [
        '08:00', '09:00', '10:00', '11:00', '12:00',
        '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
    ];
    const maxDur = 4;

    const [selectSeat, setSelectSeat] = useState('');
    const [duration, setDuration] = useState<string[]>([])
    const [cannotSelect, setCannotSelect] = useState(false)

    const handleToggleTime = (time: string) => {
        if (duration.includes(time)) {
            // Jika waktu sudah dipilih, hapus dari array
            setDuration(duration.filter(t => t !== time));
        } else if (duration.length <= maxDur) {
            // Jika kurang dari 3 waktu yang dipilih, tambahkan ke array
            setDuration([...duration, time]);
            // dur_arr([...duration])
        }
    };

    function itemTemplate(data: string) {
        if (reserved_time.includes(data)) {
            return (
                <div className="py-2 pr-2 pl-4 bg-[#f7deb8] rounded-xl flex items-center">
                    <div className="mr-auto">
                        <h1>{data}</h1>
                    </div>
                    <div className="bg-[#f7c06d] w-[85%] rounded-xl flex gap-2 px-2 py-4">
                        <div className="bg-[#fe8630] rounded-lg p-3"></div>
                        <p className="font-light">Reserved</p>
                    </div>
                </div>
            )
        }

        return (
            <Checkbox value={data} setValue={(e) => handleToggleTime(e)}
                disabled={!duration.includes(data) && duration.length >= maxDur}
            >
                <h1>{data}</h1>
            </Checkbox>
        )
    }

    function onClick() {
        if (dur_arr) {
            dur_arr(duration)
        }
        if (step) {
            step()
        }
    }

    useEffect(() => {
        // setDuration(Array(4).fill(''))
    }, [selectSeat])
    return (
        <div className="my-10">
            {/* START SECTION STEP FORM */}
            <div className="flex w-full justify-center mx-auto items-center gap-3">
                {/* Step 1 */}
                <div className="rounded-lg p-4 bg-[#1e3a8b] mr-2">
                </div>
                <div className="font-semibold">
                    Dates
                </div>
                <div className="w-[5%] border-black border-t-[3px]">
                    <hr />
                </div>
                {/* Step 2 */}
                <div className="rounded-lg p-4 bg-[#1e3a8b] mr-2">
                </div>
                <div className="font-semibold">
                    Tables
                </div>
                <div className="w-[5%] border-black border-t-[3px]">
                    <hr />
                </div>
                {/* Step 3 */}
                <div className="rounded-lg p-4 bg-[#c4c8d3] mr-2">
                </div>
                <div className="font-semibold">
                    Confirmation
                </div>
            </div>
            {/* END SECTION STEP FORM */}

            <div className="my-10 mx-20">
                <div className="">
                    {/* START SECTION SEAT */}
                    <div className="mb-10">
                        <RadioGroup checkedValue={selectSeat} onChange={(value) => setSelectSeat(value)}>
                            <RadButton label="satu" value="01" />
                            <RadButton label="dua" value="02" />
                            <RadButton label="tiga" value="03" />
                            <RadButton label="empat" value="04" />
                            <RadButton label="lima" value="05" />
                            <RadButton label="enam" value="06" />
                            <RadButton label="tujuh" value="07" className="w-1/5" />
                            <RadButton label="Delapan" value="08" className="w-1/5" />
                            <RadButton label="Sembilan" value="09" className="w-1/5" />
                            <RadButton label="Sepuluh" value="10" className="w-1/5" />
                        </RadioGroup>
                    </div>
                    {/* END SECTION SEAT*/}

                    <div className="my-5">
                        {/* START SECTION CALENDAR */}
                        {/* <Calendar inline showWeek className="h-[45%]" /> */}
                        <div className="flex mt-4 mb-2 gap-4 items-center">
                            <div className="flex justify-center gap-2 items-center border-[2px] rounded-full py-2 px-3">
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 12.75C4.91667 12.75 4.42361 12.5486 4.02083 12.1458C3.61806 11.743 3.41667 11.25 3.41667 10.6666C3.41667 10.0833 3.61806 9.59024 4.02083 9.18746C4.42361 8.78468 4.91667 8.58329 5.5 8.58329C6.08333 8.58329 6.57639 8.78468 6.97917 9.18746C7.38194 9.59024 7.58333 10.0833 7.58333 10.6666C7.58333 11.25 7.38194 11.743 6.97917 12.1458C6.57639 12.5486 6.08333 12.75 5.5 12.75ZM2.16667 17.3333C1.70833 17.3333 1.31597 17.1701 0.989583 16.8437C0.663194 16.5173 0.5 16.125 0.5 15.6666V3.99996C0.5 3.54163 0.663194 3.14926 0.989583 2.82288C1.31597 2.49649 1.70833 2.33329 2.16667 2.33329H3V1.49996C3 1.26385 3.07986 1.06593 3.23958 0.906209C3.39931 0.746487 3.59722 0.666626 3.83333 0.666626C4.06944 0.666626 4.26736 0.746487 4.42708 0.906209C4.58681 1.06593 4.66667 1.26385 4.66667 1.49996V2.33329H11.3333V1.49996C11.3333 1.26385 11.4132 1.06593 11.5729 0.906209C11.7326 0.746487 11.9306 0.666626 12.1667 0.666626C12.4028 0.666626 12.6007 0.746487 12.7604 0.906209C12.9201 1.06593 13 1.26385 13 1.49996V2.33329H13.8333C14.2917 2.33329 14.684 2.49649 15.0104 2.82288C15.3368 3.14926 15.5 3.54163 15.5 3.99996V15.6666C15.5 16.125 15.3368 16.5173 15.0104 16.8437C14.684 17.1701 14.2917 17.3333 13.8333 17.3333H2.16667ZM2.16667 15.6666H13.8333V7.33329H2.16667V15.6666ZM2.16667 5.66663H13.8333V3.99996H2.16667V5.66663Z" fill="black" fill-opacity="0.8" />
                                </svg>

                                <h1 className="text-sm">Today</h1>
                            </div>
                            <h1 className="text-lg mr-auto">21 September 2024</h1>
                            <button onClick={onClick} >Selanjutnya</button>
                        </div>
                        {/* END SECTION CALENDAR */}
                        <div className="my-4 flex flex-col gap-4 h-[300px] overflow-y-scroll">
                            <div className="py-2 pr-2 pl-4 bg-[#f7deb8] rounded-xl flex items-center">
                                <div className="mr-auto">
                                    <h1>10 AM</h1>
                                </div>
                                <div className="bg-[#f7c06d] w-[85%] rounded-xl flex gap-2 px-2 py-4">
                                    <div className="bg-[#fe8630] rounded-lg p-3"></div>
                                    <p className="font-light">Reserved</p>
                                </div>
                            </div>
                            {durations.map(durr => (
                                // <Checkbox value={durr} setValue={(e) => handleToggleTime(e)}
                                //     disabled={!duration.includes(durr) && duration.length >= maxDur}
                                // >
                                //     <h1>{durr}</h1>
                                // </Checkbox>
                                itemTemplate(durr)
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default renderDisplay;