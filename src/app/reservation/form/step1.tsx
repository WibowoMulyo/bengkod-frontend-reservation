import { useEffect, useState } from "react";
import HeaderAuth from "../../template/header";

interface props {
    onClick?: () => void,
    reserv_date: (val: string) => void,
    reserv_email: (val: string[]) => void,
    reserv_opt: (val: string) => void,
    // data: {}
}

const renderDisplay = ({ onClick, reserv_date, reserv_email, reserv_opt }: props) => {

    const [date, setDate] = useState<string>('')
    const [email, setEmail] = useState<string[]>([''])
    const [typeReserve, setTypeReserve] = useState('')
    const [reason, setReason] = useState('')
    const [error, setError] = useState({})
    const [numberInput, setNumberInput] = useState(1)
    const [isShown, setShown] = useState(false)

    function shownTeamInput(e: string) {
        if (e === 'tim') {
            setShown(true)
        }
        else {
            setNumberInput(1)
            setShown(false)
        }
    }

    function handleInputChange(index: number, content: string) {
        const loadEmail = [...email]

        loadEmail[index] = content
        setEmail(loadEmail)
    }

    function debugCheck(data: any) {
        console.log(data)
    }

    function extraInput(e: number) {
        let render = []
        for (let index = 0; index < e; index++) {
            render.push(
                <div className="my-2">
                    <input type="email"
                        key={index}
                        className=
                        "rounded-md text-[14px] p-1 border-[2px] shadow-[1px_2px_2px_rgba(0,0,0,0.1)]"
                        placeholder="Example@gamil.com"
                        value={email[index]}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                </div>
            )
        }

        return render
    }

    function validation() {
        const eror = { date: '', email: '', typeReserve: '',  reason: '' }


        if (date.length < 1) {
            eror.date = 'Please select a date'
        }
        email.map(data => {
            if (data.length < 1) {
                eror.email = 'Please enter an email'
            }
        }
        )

        if (typeReserve == '') {
            eror.typeReserve = 'Please select an option'
        }

        if(reason == ''){
          eror.reason = 'Please select a reason'
        }

        setError(eror)
        return false
    }

    function submit() {
        validation()

        reserv_date(date)
        // reserv_email(email)
        // reserv_opt(option)

        console.log(date)
        let check = validation()
        if (onClick) {
            onClick()
        }
        if (check) {
        }
    }

    useEffect(() => {
        setEmail(Array(numberInput).fill(''))
    }, [numberInput])

    return (
        <div className="my-10">
            <div className="flex flex-col md:gap-y-[10%]">
                {/* START SECTION STEP FORM */}
                {/* RUN IN DESKTOP */}
                <div className="md:flex hidden w-full justify-center mx-auto items-center gap-3">
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
                    <div className="rounded-lg p-4 bg-[#c4c8d3] mr-2">
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

                {/* RUN IN MOBILE */}
                <div className="mb-[14%] mt-[10%] md:hidden flex space-y-[8%] flex-col">
                    <h1 className="text-center text-2xl font-bold">Reservation</h1>
                    <div className="flex justify-center items-center gap-2">
                        {/* Step 1 */}
                        <div className="flex items-center relative">
                            <div className="rounded-lg p-3 bg-[#1e3a8b] mr-2 mx-auto">
                                <div className="font-normal text-sm absolute top-8 -left-4">
                                    Tanggal
                                </div>
                            </div>
                            <div className="min-w-[76px] border-black border-t-[3px]">
                                <hr />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex items-center relative">
                            <div className="rounded-lg p-3 bg-[#1e3a8b] mr-2 mx-auto">
                                <div className="font-normal text-sm absolute top-8 -left-1">
                                    Meja
                                </div>
                            </div>
                            <div className="min-w-[76px] border-black border-t-[3px]">
                                <hr />
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex items-center relative">
                            <div className="rounded-lg p-3 bg-[#c4c8d3] mr-2 mx-auto">
                                <div className="font-normal text-sm absolute top-8 -left-8">
                                    Confirmation
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END SECTION STEP FORM */}
            </div>

            <div className="bg-white rounded-2xl lg:mx-36 lg:mb-44 my-10 mx-4">
                <div className="lg:py-16 lg:px-14 py-10 px-7 md:flex block">
                    <img src="/img/test-cropped.jpg" alt="" className="xl:w-[650px] xl:h-[466px] w-[300px] lg:w-[400px]" />
                    <div className="bg-[#f6f6f6] rounded-xl ml-auto lg:w-[375px]">
                        <div className="pt-6 px-6 pb-9 h-full flex flex-col lg:mt-0 mt-6">
                            <div className="mb-auto">
                                <div className="my-2">
                                    <h1 className="font-semibold">Tanggal penggunaan lobby</h1>
                                    <div className="my-2 w-1/3">
                                        <input type="date" className=
                                            "rounded-md text-[14px] p-1 pl-2 border-[2px] shadow-[1px_2px_2px_rgba(0,0,0,0.1)]"
                                            value={date}
                                            onChange={(e) => { setDate(e.target.value); debugCheck(e.target.value) }}
                                        />
                                    </div>
                                </div>
                                <div className="my-2">
                                    <h1 className="font-semibold">Tujuan pemesanan</h1>
                                    <div className="my-2">
                                        <select name="" id="" className=
                                            "border-[2px] shadow-[1px_2px_2px_rgba(0,0,0,0.1)] border-[#e5e5e5] rounded-lg text-[14px] font-medium p-1 pr-10"
                                            value={reason}
                                            onChange={(e) => { setReason(e.target.value); }}
                                        >
                                            <option value="">--</option>
                                            <option value="individu">Belajar mandiri</option>
                                            <option value="tim">Nyantuy</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="my-2">
                                    <h1 className="font-semibold">Jenis pemesanan</h1>
                                    <div className="my-2">
                                        <select name="" id="" className=
                                            "border-[2px] shadow-[1px_2px_2px_rgba(0,0,0,0.1)] border-[#e5e5e5] rounded-lg text-[14px] font-medium p-1 pr-10"
                                            value={typeReserve}
                                            onChange={(e) => { setTypeReserve(e.target.value); shownTeamInput(e.target.value) }}
                                        >
                                            <option value="">--</option>
                                            <option value="individu">individu</option>
                                            <option value="tim">Tim</option>
                                        </select>
                                    </div>
                                </div>
                                {isShown && <div className="my-2">
                                    <h1 className="font-semibold">Jumlah pemesan</h1>
                                    <div className="my-2">
                                        <select name="" id="" className=
                                            "border-[2px] shadow-[1px_2px_2px_rgba(0,0,0,0.1)] border-[#e5e5e5] rounded-lg text-[14px] font-medium p-1 pr-10"
                                            value={numberInput}
                                            onChange={(e) => { setNumberInput(parseInt(e.target.value)); debugCheck(numberInput) }}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                    </div>
                                </div>}
                                <div className="my-2">
                                    <h1 className="font-semibold">Email pemesanan</h1>
                                    <div className="my-2">
                                        {extraInput(numberInput)}
                                    </div>
                                </div>
                            </div>
                            <div className="md:mt-auto mt-6">
                                <button className="" onClick={submit}>
                                    <div className="bg-[#1e3a8b] rounded-xl p-2">
                                        <p className="text-[#f7f7f7] font-light">Selanjutnya</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default renderDisplay;