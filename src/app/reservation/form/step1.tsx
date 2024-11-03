import { useEffect, useState } from "react";
import HeaderAuth from "../../template/header";

interface props {
    onClick?: () => void,
    reserv_date?: (val: string) => void,
    reserv_email?: (val: string[]) => void,
    reserv_opt?: (val: string) => void,
}

const renderDisplay = ({ onClick , reserv_date, reserv_email, reserv_opt}: props) => {

    const [date, setDate] = useState<string>('')
    const [email, setEmail] = useState<string[]>([''])
    const [option, setOption] = useState('')
    
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
                        "rounded-md text-[14px] p-1 pl-2 border-[2px] shadow-[1px_2px_2px_rgba(0,0,0,0.1)]"
                        placeholder="Example@gamil.com"
                        value={email[index]}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                </div>
            )
        }

        return render
    }

    // function validation(){
    //     if (date === '') {
    //     }
    //     if ()
    // }

    function submit(){
        if(reserv_date){
            reserv_date(date)
        }
        if(reserv_email){
            reserv_email(email)
        }
        if(reserv_opt){
            reserv_opt(option)
        }
        if(onClick){
            onClick()
        }
    }

    useEffect(() => {
        setEmail(Array(numberInput).fill(''))
    }, [numberInput])

    return (
        <div className="my-10">
            <div className="flex w-full justify-center items-center gap-3">
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
            <div className="bg-white rounded-2xl mx-36 mb-44 my-10">
                <div className="py-16 px-14 flex">
                    <img src="/img/test-cropped.jpg" alt="" width={650} height={900} />
                    <div className="bg-[#f6f6f6] rounded-xl ml-auto w-1/3">
                        <div className="pt-6 px-6 pb-9 h-full flex flex-col">
                            <div className="mb-auto">
                                {/* <div className="my-2">
                                    <h1 className="font-semibold">Waktu penggunaan H6</h1>
                                    <div className="flex mx-2 my-2">
                                        <select name="" id="" className=
                                            "mr-auto border-[2px] shadow-[1px_2px_2px_rgba(0,0,0,0.1)] border-[#e5e5e5] rounded-lg text-[14px] font-medium p-1">
                                            <option value="" className="">07.00</option>
                                            <option value="">08.00</option>
                                            <option value="">09.00</option>
                                            <option value="">10.00</option>
                                        </select>
                                        <select name="" id="" className=
                                            "border-[2px] shadow-[1px_2px_2px_rgba(0,0,0,0.1)] border-[#e5e5e5] rounded-lg text-[14px] font-medium p-1">
                                            <option value="">07.00</option>
                                            <option value="">08.00</option>
                                            <option value="">09.00</option>
                                            <option value="">10.00</option>
                                        </select>
                                    </div>
                                </div> */}
                                <div className="my-2">
                                    <h1 className="font-semibold">Tanggal penggunaan lobby</h1>
                                    <div className="mx-2 my-2 w-1/3">
                                        <input type="date" className=
                                            "rounded-md text-[14px] p-1 pl-2 border-[2px] shadow-[1px_2px_2px_rgba(0,0,0,0.1)]"
                                            value={date}
                                            onChange={(e) => { setDate(e.target.value); debugCheck(e.target.value) }}
                                        />
                                    </div>
                                </div>
                                <div className="my-2">
                                    <h1 className="font-semibold">Jenis pemesanan</h1>
                                    <div className="mx-2 my-2">
                                        <select name="" id="" className=
                                            "border-[2px] shadow-[1px_2px_2px_rgba(0,0,0,0.1)] border-[#e5e5e5] rounded-lg text-[14px] font-medium p-1 pr-10"
                                            value={option}
                                            onChange={(e) => { setOption(e.target.value); shownTeamInput(e.target.value) }}
                                        >
                                            <option value="individu">individu</option>
                                            <option value="tim">Tim</option>
                                        </select>
                                    </div>
                                </div>
                                {isShown && <div className="my-2">
                                    <h1 className="font-semibold">Jumlah pemesan</h1>
                                    <div className="mx-2 my-2">
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
                                    <div className="mx-2 my-2 w-1/3">
                                        {extraInput(numberInput)}
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <button className="mt-auto" onClick={submit}>
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