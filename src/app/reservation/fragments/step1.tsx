import { useEffect, useState } from "react";
import InputTextOrDate from "@/app/component/Input/InputTextOrDate";
import PrimaryButton from "@/app/component/Button/PrimaryButton";
import Label from "@/app/component/Label/Label";
import Image from "next/image";
import { ValidationReservation } from "../../services/validation/Validation";
import { Reservation } from "@/app/component/interface/Reservation";
import InputErrorLight from "@/app/component/Input/InputErrorLight";
import { getDataAvalaible } from "../../services/ReservationServices";
interface props {
  onClick?: () => void,
  setFormData?: (val: Reservation) => void,
  setMapData?: (val: any) => void,
}

const renderDisplay = ({ onClick, setFormData, setMapData,...props }: props) => {

  const [date, setDate] = useState<string>('')
  const [email, setEmail] = useState<string[]>([''])
  const [type, setTypeReserve] = useState('')
  const [reason, setReason] = useState('')
  const [error, setError] = useState<any>([''])
  const [totalperson, setTotalPerson] = useState(1)
  const [isshown, setShown] = useState(false)

  const today = new Date();

  // Format tanggal ke YYYY-MM-DD
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Bulan ditambahkan 1 karena dimulai dari 0
  const ddnow = String(today.getDate()).padStart(2, '0');
  const ddafter = String(today.getDate() + 2).padStart(2, '0');

  const formattedToday = `${yyyy}-${mm}-${ddnow}`;
  const threedayafter = `${yyyy}-${mm}-${ddafter}`

  function shownTeamInput(e: string) {
    if (e.toLowerCase() === 'tim') {
      setTotalPerson(2)
      setShown(true)
    }
    else {
      setTotalPerson(1)
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
        <div className="my-2" key={index}>
          <InputTextOrDate
            value={email[index]}
            className="px-2"
            placeholder="example@mhs.ac.id"
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        </div>
      )
    }

    return render
  }

  async function getAvalaibleReservation(){
    let data = await getDataAvalaible({
      params:{
        date: date,
        type: type,
        total_seats: totalperson
      }
    })
    // console.log(data) 
    return data
  }
  
  async function submitButton() {
    let data = { date: date, email: email, type: type, reason: reason, totalperson:totalperson }
    let result: any = ValidationReservation({ type: 'step1', data: data }) || ''
    setError([])
    if (result.success == false) {
      setError(result.data)
    }
    if (result.success == true) {
      if (setFormData && setMapData) {
        const datareservation = await getAvalaibleReservation()
        setMapData(datareservation)
        setFormData(
          {
            date: date,
            email: email,
            type: type,
            reason: reason,
            total_person: totalperson
          }
        )
      }
      if(onClick){
        onClick()
      }
    }
  }

  function ChangeEmailInput(input?: number) {
    setEmail(Array(totalperson).fill(''))
  }

  useEffect(() => {
    // setEmail(Array(totalperson).fill(''))
    document.getElementById('my_modal_peraturan')?.showModal()
  }, [])

  return (
    <div className="my-10" {...props}>
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
          <div className="xl:w-[650px] xl:h-[466px] w-[280px] lg:w-[400px] mx-auto">
            <Image
              src={"/img/test-cropped.jpg"}
              alt="Foto meja"
              style={{
                width: '100%',
                height: '100%',
              }}
              width={650}
              height={650} />
          </div>
          {/* <img src="/img/test-cropped.jpg" alt="" className="xl:w-[650px] xl:h-[466px] w-[300px] lg:w-[400px]" /> */}
          <div className="bg-[#f6f6f6] rounded-xl ml-auto lg:w-[375px]">
            <div className="pt-6 px-6 pb-9 h-full flex flex-col lg:mt-0 mt-6">
              <div className="mb-auto">
                <div className="my-2">
                  <Label>Tanggal penggunaan</Label>
                  <div className="my-2 w-1/3">
                    <InputTextOrDate
                      max={threedayafter}
                      min={formattedToday}
                      value={date}
                      type="date"
                      errorValue={error.date ? error.date[0].message : ''}
                      onChange={(e) => { setDate(e.target.value); debugCheck(e.target.value) }}
                    />
                  </div>
                </div>
                <div className="my-2">
                  <Label>Tujuan</Label>
                  <div className="my-2">
                    <select name="" id="" className=
                      "border-[2px] shadow-[1px_2px_2px_rgba(0,0,0,0.1)] border-[#e5e5e5] rounded-lg text-[14px] font-medium p-1 pr-10 focus:ring-primary-700 focus:ring-2"
                      value={reason}
                      onChange={(e) => { setReason(e.target.value); }}
                    >
                      <option value="">--</option>
                      <option value="mandiri">Belajar mandiri</option>
                      <option value="santai">Nyantuy</option>
                    </select>
                    {/* {error.reason ? <p className="font-light text-red-600 text-xs">{error.reason}</p> : ''} */}
                    <InputErrorLight errorValue={error.reason ? error.reason[0].message : ''} value=""/>
                  </div>
                </div>
                <div className="my-2">
                  {/* <h1 className="font-semibold">Jenis pemesanan</h1> */}
                  <Label>Jenis pemesanan</Label>
                  <div className="my-2">
                    <select name="" id="" className=
                      "border-[2px] shadow-[1px_2px_2px_rgba(0,0,0,0.1)] border-[#e5e5e5] rounded-lg text-[14px] font-medium p-1 pr-10 focus:ring-primary-700 focus:ring-2"
                      value={type}
                      onChange={(e) => { setTypeReserve(e.target.value); shownTeamInput(e.target.value); ChangeEmailInput }}
                    >
                      <option value="">--</option>
                      <option value="Individu">individu</option>
                      <option value="Tim">Tim</option>
                    </select>
                    <InputErrorLight errorValue={error.type ? error.type[0].message : ''} value=""/>
                  </div>
                </div>
                {isshown && <div className="my-2">
                  <Label>Jumlah pemesanan</Label>
                  <div className="my-2">
                    <select name="" id="" className=
                      "border-[2px] shadow-[1px_2px_2px_rgba(0,0,0,0.1)] border-[#e5e5e5] rounded-lg text-[14px] font-medium p-1 pr-10"
                      value={totalperson}
                      onChange={(e) => { setTotalPerson(parseInt(e.target.value)); debugCheck(totalperson); ChangeEmailInput(parseInt(e.target.value)) }}
                    >
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                    <InputErrorLight errorValue={error.totalperson ? error.totalperson[0].message : ''} value=""/>
                  </div>
                </div>}
                <div className="my-2">
                  <Label>Email pemesan</Label>
                  <div className="mt-2 mb-6">
                    {extraInput(totalperson)}
                    <InputErrorLight errorValue={error.email ? error.email[0].message : ''} value=""/>
                  </div>
                </div>
              </div>
              <div className="md:mt-auto">
                <PrimaryButton onClick={submitButton}>
                  Selanjutnya
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
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