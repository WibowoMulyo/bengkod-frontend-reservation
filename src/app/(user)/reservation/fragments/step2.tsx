'use client'
// import Calendar from "@/app/component/calendar/Calendar";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useEffect, useState } from "react";
import ImageMapper from 'react-img-mapper';
import { getReservationHourMap } from "@/lib/SetCalendar";
import { reservations } from "@/components/mock_data/reservations";
import ReservedHour from "@/components/label/ReservedHour";
import ButtonNotReserved from "@/components/button/ButtonNotReserved";
import Image from "next/image";
import { Reservation } from "@/components/interface/Reservation";
import { getDataCalendar } from "@/services/CalendarServices";
import { useAddReservationMutation, useGetDetailTableQuery } from "@/services/ReservationServicesRedux";
interface props {
  step?: () => void,
  mapdata?: Array<any>,
  formdata?: Reservation,
  setResult?: (val: any) => void,
}

const tablearr = ['', '/image/table_img/meja1.jpg', '/image/table_img/meja2.jpg', '/image/table_img/meja3.jpg', '/image/table_img/meja3.jpg']

const now = new Date(); // Waktu sekarang
const currentTime = now.getHours() * 60 + now.getMinutes();

const renderDisplay = ({ step, mapdata, formdata, setResult }: props) => {
  const durations = [
    '08:00-10:00', '10:00-12:00', '13:00-15:00', '15:00-17:00'
  ];
  const [duration, setDuration] = useState<string>('')
  const [table, setTable] = useState<number>(0)
  const [error, setError] = useState<any>('')
  const [reservationMap, setReservationMap] = useState(getReservationHourMap([]));
  const [formfinal, setFormFinal] = useState<any>(formdata)
  const [addReservation, { isLoading }] = useAddReservationMutation()
  const { data } = useGetDetailTableQuery(
    { date: formfinal.date, type: formfinal.type, tableId: table },
    { skip: table == 0 }
    // Jangan panggil query jika tableId null
  );
  // const { data, error } = useGetCalendarQuery({ table_id: table }, {skip: table == null || table == 0});
  function clickToNotReserved(data: string) {
    setDuration(data);
    document.getElementById('my_modal_1')?.showModal()
    setFormFinal((prev: any) => ({
      ...prev,
      time_slot: data,
      table_id: table
    }))
  }

  function itemTemplate(data: string) {
    if (reservationMap[data]) {
      return (
        <ReservedHour data={data} key={data} />
      )
    }

    const [start, end] = data.split('-'); // Pisahkan start dan end
    const [startHours, startMinutes] = start.split(':').map(Number);
    const startTime = startHours * 60 + startMinutes;

    if (currentTime >= startTime) {
      console.log("Melewati jam!")
      return (
        <ButtonNotReserved
          disabled={true}
          key={data}
          className={'bg-[#d9d9d9]/[.5] text-black/[.5]'}
        // onClick={() => clickToNotReserved(data)}
        >
          {data}
        </ButtonNotReserved>
      )
    }

    return (
      <ButtonNotReserved
        disabled={table ? false : true}
        key={data}
        className={(table ? 'bg-[#d9d9d9] text-black hover:bg-blue-900 hover:text-white' : 'bg-[#d9d9d9]/[.5] text-black/[.5]')}
        onClick={() => clickToNotReserved(data)}
      >
        {data}
      </ButtonNotReserved>
    )
  }

  async function onClick() {
    console.log(formfinal)
    let res = await addReservation(formfinal).unwrap()
    console.log(res)
    if (res.status == 'error') {
      setError(res.message)
      document.getElementById('alert')?.showModal()
      // throw new Error(res.message)
    } else {
      if (setResult) {
        setResult(res)
      }
      if (step) {
        step()
      }
    }
  }

  async function changeTable(e: string) {
    setTable(parseInt(e))
  }

  useEffect(() => {
    if (data) {
      console.log(data)
      if (data.status == 'error') {
        throw new Error("Error fetch data reservasi")
      } else {
        setReservationMap(getReservationHourMap(data.data.reservations))
      }
    }
  }, [data])

  return (
    <div className="md:my-[3%] my-[5%]">
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

        {/* START CONTENT FORM */}
        <div className="md:my-[3%] my-[10%] mx-[7%]">
          <div className="flex flex-col">
            {/* START SECTION SEAT */}
            <div className="overflow-x-auto">
              {mapdata ? <div className="mb-10 min-w-[1360px] relative">
                <ImageMapper
                  width={1351}
                  height={416}
                  onClick={e => { changeTable(e.id || ''); }}
                  stayHighlighted={true}
                  src={'/image/mapping.png'}
                  map={
                    {
                      name: 'Meja image',
                      areas: mapdata
                    }
                  }
                />
                {mapdata.map((area) => (
                  <span
                    key={area.id}
                    className="tooltip absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      top: area.center.y,
                      left: area.center.x,
                      zIndex: 1000
                    }}

                  >
                    {/* {area.title} */}
                    {!area.is_avalaible ? area.title : <p className="text-red-600 font-semibold">PENUH</p>}
                  </span>
                ))}
              </div> : ''}
            </div>
            {/* END SECTION SEAT*/}

            <div className="my-5">
              <div className="flex flex-col md:flex-row gap-y-[3vh] md:gap-[3vh]">
                {/* START SECTION GAMBAR MEJA */}
                <div className="md:w-[540px] w-full mr-auto flex flex-col">
                  <div className="bg-white rounded-xl py-[3%] px-[4%] text-black border-black/[.3] border-2 font-normal mb-4 text-sm md:text-lg italic ">
                    <p>Gambar Meja</p>
                  </div>

                  <div className="bg-white px-[5%] pt-[5%] pb-[2%] rounded-xl text-center">
                    {table ?
                      <div className="w-full">
                        <Image
                          src={tablearr[table]}
                          alt={`Gambar meja ${table}`}
                          style={{
                            height: '100%',
                            width: '100%'
                          }}
                          width={500}
                          height={500}
                        />
                        <h1 className="font-bold text-sm mt-2">Table-01</h1>
                      </div> :
                      <div className="font-bold text-sm mt-2">Harap pilih foto terlebih dahulu!</div>
                    }
                  </div>
                </div>
                {/* END SECTION GAMBAR MEJA */}
                {/* START SECTION CALENDAR */}
                <div className="md:w-[715px] w-full flex flex-col">
                  <div className="bg-white rounded-xl md:py-[2.25%] py-[3%] px-[4%] text-black border-black/[.3] border-2 font-normal mb-4 text-sm md:text-lg italic ">
                    <p>pilih waktu </p>
                  </div>
                  <div className="flex mt-4 mb-2 gap-4 items-center">
                    <div className="flex justify-center gap-2 items-center border-[2px] rounded-full py-[2%] px-[3%] lg:py-[1%] lg:px[2%]">
                      <div className="hidden md:block">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.5 12.75C4.91667 12.75 4.42361 12.5486 4.02083 12.1458C3.61806 11.743 3.41667 11.25 3.41667 10.6666C3.41667 10.0833 3.61806 9.59024 4.02083 9.18746C4.42361 8.78468 4.91667 8.58329 5.5 8.58329C6.08333 8.58329 6.57639 8.78468 6.97917 9.18746C7.38194 9.59024 7.58333 10.0833 7.58333 10.6666C7.58333 11.25 7.38194 11.743 6.97917 12.1458C6.57639 12.5486 6.08333 12.75 5.5 12.75ZM2.16667 17.3333C1.70833 17.3333 1.31597 17.1701 0.989583 16.8437C0.663194 16.5173 0.5 16.125 0.5 15.6666V3.99996C0.5 3.54163 0.663194 3.14926 0.989583 2.82288C1.31597 2.49649 1.70833 2.33329 2.16667 2.33329H3V1.49996C3 1.26385 3.07986 1.06593 3.23958 0.906209C3.39931 0.746487 3.59722 0.666626 3.83333 0.666626C4.06944 0.666626 4.26736 0.746487 4.42708 0.906209C4.58681 1.06593 4.66667 1.26385 4.66667 1.49996V2.33329H11.3333V1.49996C11.3333 1.26385 11.4132 1.06593 11.5729 0.906209C11.7326 0.746487 11.9306 0.666626 12.1667 0.666626C12.4028 0.666626 12.6007 0.746487 12.7604 0.906209C12.9201 1.06593 13 1.26385 13 1.49996V2.33329H13.8333C14.2917 2.33329 14.684 2.49649 15.0104 2.82288C15.3368 3.14926 15.5 3.54163 15.5 3.99996V15.6666C15.5 16.125 15.3368 16.5173 15.0104 16.8437C14.684 17.1701 14.2917 17.3333 13.8333 17.3333H2.16667ZM2.16667 15.6666H13.8333V7.33329H2.16667V15.6666ZM2.16667 5.66663H13.8333V3.99996H2.16667V5.66663Z" fill="black" fillOpacity="0.8" />
                        </svg>
                      </div>
                      <div className="block md:hidden">
                        <svg width="13" height="15" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.5 12.75C4.91667 12.75 4.42361 12.5486 4.02083 12.1458C3.61806 11.743 3.41667 11.25 3.41667 10.6666C3.41667 10.0833 3.61806 9.59024 4.02083 9.18746C4.42361 8.78468 4.91667 8.58329 5.5 8.58329C6.08333 8.58329 6.57639 8.78468 6.97917 9.18746C7.38194 9.59024 7.58333 10.0833 7.58333 10.6666C7.58333 11.25 7.38194 11.743 6.97917 12.1458C6.57639 12.5486 6.08333 12.75 5.5 12.75ZM2.16667 17.3333C1.70833 17.3333 1.31597 17.1701 0.989583 16.8437C0.663194 16.5173 0.5 16.125 0.5 15.6666V3.99996C0.5 3.54163 0.663194 3.14926 0.989583 2.82288C1.31597 2.49649 1.70833 2.33329 2.16667 2.33329H3V1.49996C3 1.26385 3.07986 1.06593 3.23958 0.906209C3.39931 0.746487 3.59722 0.666626 3.83333 0.666626C4.06944 0.666626 4.26736 0.746487 4.42708 0.906209C4.58681 1.06593 4.66667 1.26385 4.66667 1.49996V2.33329H11.3333V1.49996C11.3333 1.26385 11.4132 1.06593 11.5729 0.906209C11.7326 0.746487 11.9306 0.666626 12.1667 0.666626C12.4028 0.666626 12.6007 0.746487 12.7604 0.906209C12.9201 1.06593 13 1.26385 13 1.49996V2.33329H13.8333C14.2917 2.33329 14.684 2.49649 15.0104 2.82288C15.3368 3.14926 15.5 3.54163 15.5 3.99996V15.6666C15.5 16.125 15.3368 16.5173 15.0104 16.8437C14.684 17.1701 14.2917 17.3333 13.8333 17.3333H2.16667ZM2.16667 15.6666H13.8333V7.33329H2.16667V15.6666ZM2.16667 5.66663H13.8333V3.99996H2.16667V5.66663Z" fill="black" fillOpacity="0.8" />
                        </svg>
                      </div>
                      <h1 className="md:text-sm text-xs">Today</h1>
                    </div>
                    <h1 className="lg:text-lg text-sm mr-auto">21 September 2024</h1>
                    {/* <button onClick={e => document.getElementById('my_modal_1')?.showModal()} >Selanjutnya</button> */}
                  </div>
                  {/* END SECTION CALENDAR */}
                  <div className="my-4 flex flex-col gap-4 h-[300px]">
                    {data ? durations.map(durr => (
                      itemTemplate(durr)
                    )) :
                      <div className="w-full h-full flex justify-center items-center">
                        <span className="loading loading-dots loading-lg"></span>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END CONTENT FORM */}
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box lg:w-[30%] w-11/12">
          <div className="border-b-2 border-[#00000066]/[.4] flex items-center">
            <h3 className="font-bold lg:text-lg text-[14px] pt-2 pb-4 mr-auto">Apakah kamu yakin?</h3>
            <form method="dialog" className="">
              <button>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.31382 5.89982L10.8488 2.36382C10.9443 2.27157 11.0205 2.16123 11.0729 2.03922C11.1253 1.91722 11.1529 1.786 11.1541 1.65322C11.1552 1.52044 11.1299 1.38876 11.0796 1.26587C11.0294 1.14297 10.9551 1.03132 10.8612 0.937425C10.7673 0.843532 10.6557 0.769279 10.5328 0.718998C10.4099 0.668717 10.2782 0.643415 10.1454 0.644569C10.0126 0.645723 9.88142 0.673309 9.75942 0.725718C9.63741 0.778127 9.52707 0.854309 9.43482 0.949819L5.89882 4.48482L2.36382 0.949819C2.27157 0.854309 2.16123 0.778127 2.03922 0.725718C1.91722 0.673309 1.786 0.645723 1.65322 0.644569C1.52044 0.643415 1.38876 0.668717 1.26587 0.718998C1.14297 0.769279 1.03132 0.843532 0.937425 0.937425C0.843532 1.03132 0.769279 1.14297 0.718998 1.26587C0.668717 1.38876 0.643415 1.52044 0.644569 1.65322C0.645723 1.786 0.673309 1.91722 0.725718 2.03922C0.778127 2.16123 0.854309 2.27157 0.949819 2.36382L4.48482 5.89882L0.949819 9.43482C0.854309 9.52707 0.778127 9.63741 0.725718 9.75942C0.673309 9.88142 0.645723 10.0126 0.644569 10.1454C0.643415 10.2782 0.668717 10.4099 0.718998 10.5328C0.769279 10.6557 0.843532 10.7673 0.937425 10.8612C1.03132 10.9551 1.14297 11.0294 1.26587 11.0796C1.38876 11.1299 1.52044 11.1552 1.65322 11.1541C1.786 11.1529 1.91722 11.1253 2.03922 11.0729C2.16123 11.0205 2.27157 10.9443 2.36382 10.8488L5.89882 7.31382L9.43482 10.8488C9.52707 10.9443 9.63741 11.0205 9.75942 11.0729C9.88142 11.1253 10.0126 11.1529 10.1454 11.1541C10.2782 11.1552 10.4099 11.1299 10.5328 11.0796C10.6557 11.0294 10.7673 10.9551 10.8612 10.8612C10.9551 10.7673 11.0294 10.6557 11.0796 10.5328C11.1299 10.4099 11.1552 10.2782 11.1541 10.1454C11.1529 10.0126 11.1253 9.88142 11.0729 9.75942C11.0205 9.63741 10.9443 9.52707 10.8488 9.43482L7.31382 5.89882V5.89982Z" fill="#98A2B3" />
                </svg>
              </button>
              {/* if there is a button in form, it will close the modal */}
            </form>
          </div>
          <p className="py-4 font-normal text-[14px]">Pastikan pilihanmu tepat dan datang tepat waktu agar pengalaman reservasi tetap optimal</p>
          <div className="py-2 text-[14px]">
            <p>Detail transaksi: </p>
            <ul>
              <li>• Waktu: {duration}</li>
              <li>• Meja: {table}</li>
            </ul>
          </div>
          {/* <p className="py-4">Kamu <span className="text-[#BA0900] uppercase font-bold">tidak</span> akan bisa mengubah pilihanmu!</p> */}
          <div className="modal-action">
            <button className="bg-[#1e3a8b] py-2 px-4 rounded-xl text-white" onClick={onClick}>Lanjut</button>
          </div>
        </div>
      </dialog>

      <dialog id="alert" className="modal">
        <div className="modal-box lg:w-[30%] w-11/12">
          <div className="flex items-center">
            <h3 className="font-bold lg:text-lg text-[14px] text-red-600 mr-auto">Error!</h3>
          </div>
            {/* <p className="py-4 font-normal text-[14px]">{error? error : 'Terjadi kesalahan!, coba lagi nanti'}</p> */}
            <div className="py-2 text-[14px]">
            <p>Penyebab error yang mungkin: </p>
            <ul>
              <li>• User sudah meminjam h6 hari ini</li>
              <li>• Pastikan user telah terdaftar pada sistem kami ya</li>
            </ul>
          </div>  
          <form method="dialog" className="">
            <button className="bg-red-600 py-2 px-4 rounded-xl text-white">Kembali</button>
            {/* if there is a button in form, it will close the modal */}
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default renderDisplay;