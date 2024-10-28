'use client'
// import Calendar from "@/app/component/calendar/Calendar";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useEffect, useState } from "react";
import Checkbox from "../../component/Button";
import ImageMapper from 'react-img-mapper';
import { getReservationHourMap } from "@/app/component/calendar/calendartype";
import { reservations } from "@/app/component/mock_data/reservations";
interface props {
  step?: () => void,
  dur_arr: (val: string[]) => void,
}

const tablearr = ['', '/image/table_img/table1.jpeg', '/image/table_img/table2.jpeg']

const infoTable = [
  {
    "id": "1",
    "shape": "poly",
    "title": "gojomok",
    "alt": "gojomok",
    "coords": [
      377, 42, 329, 46, 304, 64, 306, 84, 306, 93, 319, 111,
      324, 123, 295, 133, 256, 136, 209, 149, 200, 162, 181,
      166, 161, 176, 98, 215, 78, 356, 69, 410, 93, 453, 134, 430,
      123, 364, 135, 252, 187, 238, 205, 252, 209, 277, 188, 296, 167,
      364, 151, 438, 120, 513, 99, 519, 24, 608, 64, 686, 43, 729, 98,
      728, 109, 698, 131, 707, 213, 663, 228, 572, 250, 549, 309,
      527, 369, 536, 404, 559, 384, 592, 436, 669, 426, 685, 453,
      722, 504, 727, 523, 726, 501, 681, 561, 655, 571, 601, 517,
      476, 366, 332, 402, 336, 392, 323, 362, 318, 392, 302, 383,
      275, 359, 282, 348, 309, 345, 281, 375, 239, 396, 272, 455,
      313, 487, 304, 458, 223, 462, 189, 448, 169, 429, 138, 426,
      170, 411, 165, 395, 150, 402, 131, 426, 126, 430, 101, 421,
      73, 392, 45, 337, 37
    ],
    "strokeColor": "black",
    "fillColor": "#eab54d4d",
    // "disabled" : true
  },
  {
    "id": "2",
    "shape": "poly",
    "title": "sukuna",
    "alt": "sukuna",
    "coords": [
      1003, 50, 997, 65, 994, 78, 983, 108, 995, 90, 1003, 111,
      993, 180, 1016, 176, 1020, 161, 1026, 169, 1053, 161, 1025,
      107, 1027, 90, 1016, 73
    ],
    "strokeColor": "black",
    "fillColor": "#eab54d4d"
  }
]

const renderDisplay = ({ step, dur_arr }: props) => {
  const durations = [
    '08:00-10:00', '10:01-12:00', '13:01-15:00', '15:01-17:00'
  ];
  const [selectSeat, setSelectSeat] = useState('');
  const [duration, setDuration] = useState<string[]>([])
  const [table, setTable] = useState('')
  const [reservationMap, setReservationMap] = useState(getReservationHourMap([]));

  function itemTemplate(data: string) {
    if (reservationMap[data]) {
      return (
        <div className="bg-[#f7deb8] relative md:py-[1.5%] md:pr-[2%] md:pl-[3%] pr-[1%] pl-[8%] py-[2%] md:rounded-2xl rounded-full flex items-center">
          <div className="mr-auto">
            <h1>{data}</h1>
          </div>
          <div className="bg-[#f7c06d] lg:w-[85%] w-[70%] md:rounded-xl rounded-full flex gap-2 px-[2%] py-[2%] md:py-[2%] md:mx-0 mx-[1.5%]">
            <div className="bg-[#fe8630] md:rounded-lg rounded-full p-3"></div>
            <p className="font-light">Reserved</p>
          </div>
        </div>
      )
    }

    return (
      <button
        disabled={table ? false : true}
        onClick={e => document.getElementById('my_modal_1')?.showModal()}
        className={"relative md:py-[2.5%] md:pr-[2%] md:pl-[3%] pr-[1%] pl-[8%] py-[2%] md:rounded-2xl rounded-full flex items-center " + (table ? 'bg-[#d9d9d9] text-black hover:bg-blue-900 hover:text-white' : 'bg-[#d9d9d9]/[.5] text-black/[.5]')}
      >
        {data}
      </button>
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

  async function changeTable(e: string) {
    setTable(e)
    setReservationMap(getReservationHourMap(reservations.filter((data) => data.table.includes(e))))
  }
  useEffect(() => {

  }, [selectSeat])
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
              <div className="mb-10 min-w-[1360px]">
                <ImageMapper
                  width={1308}
                  height={736}
                  onClick={e => changeTable(e.id || '')}
                  stayHighlighted={true}
                  // stayMultiHighlighted={true}
                  src={'/image/goatjo vs sukuna.jpg'}
                  map={
                    {
                      name: 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg',
                      areas: infoTable
                    }
                  }
                />
              </div>
            </div>
            {/* END SECTION SEAT*/}

            <div className="my-5">
              <div className="flex flex-col md:flex-row gap-y-[3vh] md:gap-0">
                {/* START SECTION GAMBAR MEJA */}
                <div className="md:w-[540px] w-full mr-auto flex flex-col">
                  <div className="bg-white rounded-xl py-[3%] px-[4%] text-black border-black/[.3] border-2 font-normal mb-4 text-sm md:text-lg italic ">
                    <p>Gambar Meja</p>
                  </div>

                  <div className="bg-white px-[5%] pt-[5%] pb-[2%] rounded-xl text-center">
                    <img src={tablearr[parseInt(table)]} alt="Gambar meja" className="rounded-xl md:w-full mb-2" />
                    <h1 className="font-bold text-sm">Table-01</h1>
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
                          <path d="M5.5 12.75C4.91667 12.75 4.42361 12.5486 4.02083 12.1458C3.61806 11.743 3.41667 11.25 3.41667 10.6666C3.41667 10.0833 3.61806 9.59024 4.02083 9.18746C4.42361 8.78468 4.91667 8.58329 5.5 8.58329C6.08333 8.58329 6.57639 8.78468 6.97917 9.18746C7.38194 9.59024 7.58333 10.0833 7.58333 10.6666C7.58333 11.25 7.38194 11.743 6.97917 12.1458C6.57639 12.5486 6.08333 12.75 5.5 12.75ZM2.16667 17.3333C1.70833 17.3333 1.31597 17.1701 0.989583 16.8437C0.663194 16.5173 0.5 16.125 0.5 15.6666V3.99996C0.5 3.54163 0.663194 3.14926 0.989583 2.82288C1.31597 2.49649 1.70833 2.33329 2.16667 2.33329H3V1.49996C3 1.26385 3.07986 1.06593 3.23958 0.906209C3.39931 0.746487 3.59722 0.666626 3.83333 0.666626C4.06944 0.666626 4.26736 0.746487 4.42708 0.906209C4.58681 1.06593 4.66667 1.26385 4.66667 1.49996V2.33329H11.3333V1.49996C11.3333 1.26385 11.4132 1.06593 11.5729 0.906209C11.7326 0.746487 11.9306 0.666626 12.1667 0.666626C12.4028 0.666626 12.6007 0.746487 12.7604 0.906209C12.9201 1.06593 13 1.26385 13 1.49996V2.33329H13.8333C14.2917 2.33329 14.684 2.49649 15.0104 2.82288C15.3368 3.14926 15.5 3.54163 15.5 3.99996V15.6666C15.5 16.125 15.3368 16.5173 15.0104 16.8437C14.684 17.1701 14.2917 17.3333 13.8333 17.3333H2.16667ZM2.16667 15.6666H13.8333V7.33329H2.16667V15.6666ZM2.16667 5.66663H13.8333V3.99996H2.16667V5.66663Z" fill="black" fill-opacity="0.8" />
                        </svg>
                      </div>
                      <div className="block md:hidden">
                        <svg width="13" height="15" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.5 12.75C4.91667 12.75 4.42361 12.5486 4.02083 12.1458C3.61806 11.743 3.41667 11.25 3.41667 10.6666C3.41667 10.0833 3.61806 9.59024 4.02083 9.18746C4.42361 8.78468 4.91667 8.58329 5.5 8.58329C6.08333 8.58329 6.57639 8.78468 6.97917 9.18746C7.38194 9.59024 7.58333 10.0833 7.58333 10.6666C7.58333 11.25 7.38194 11.743 6.97917 12.1458C6.57639 12.5486 6.08333 12.75 5.5 12.75ZM2.16667 17.3333C1.70833 17.3333 1.31597 17.1701 0.989583 16.8437C0.663194 16.5173 0.5 16.125 0.5 15.6666V3.99996C0.5 3.54163 0.663194 3.14926 0.989583 2.82288C1.31597 2.49649 1.70833 2.33329 2.16667 2.33329H3V1.49996C3 1.26385 3.07986 1.06593 3.23958 0.906209C3.39931 0.746487 3.59722 0.666626 3.83333 0.666626C4.06944 0.666626 4.26736 0.746487 4.42708 0.906209C4.58681 1.06593 4.66667 1.26385 4.66667 1.49996V2.33329H11.3333V1.49996C11.3333 1.26385 11.4132 1.06593 11.5729 0.906209C11.7326 0.746487 11.9306 0.666626 12.1667 0.666626C12.4028 0.666626 12.6007 0.746487 12.7604 0.906209C12.9201 1.06593 13 1.26385 13 1.49996V2.33329H13.8333C14.2917 2.33329 14.684 2.49649 15.0104 2.82288C15.3368 3.14926 15.5 3.54163 15.5 3.99996V15.6666C15.5 16.125 15.3368 16.5173 15.0104 16.8437C14.684 17.1701 14.2917 17.3333 13.8333 17.3333H2.16667ZM2.16667 15.6666H13.8333V7.33329H2.16667V15.6666ZM2.16667 5.66663H13.8333V3.99996H2.16667V5.66663Z" fill="black" fill-opacity="0.8" />
                        </svg>
                      </div>
                      <h1 className="md:text-sm text-xs">Today</h1>
                    </div>
                    <h1 className="lg:text-lg text-sm mr-auto">21 September 2024</h1>
                    {/* <button onClick={e => document.getElementById('my_modal_1')?.showModal()} >Selanjutnya</button> */}
                  </div>
                  {/* END SECTION CALENDAR */}
                  <div className="my-4 flex flex-col gap-4 h-[300px] overflow-y-scroll">
                    {durations.map(durr => (
                      itemTemplate(durr)
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END CONTENT FORM */}
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="border-b-2 border-[#00000066]/[.4]">
            <h3 className="font-normal text-lg italic text-center py-4">Apakah kamu sudah yakin dengan pilihanmu?</h3>
          </div>
          <p className="py-4">Kamu <span className="text-[#BA0900] uppercase font-bold">tidak</span> akan bisa mengubah pilihanmu!</p>
          <div className="modal-action">
            <form method="dialog" className="flex gap-x-4">
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-[#BA0900] py-2 px-4 rounded-xl text-white">Close</button>
            </form>
            <button className="bg-[#1e3a8b] py-2 px-4 rounded-xl text-white" onClick={onClick}>Lanjut</button>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default renderDisplay;