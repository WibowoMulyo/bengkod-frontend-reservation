'use client'
import Footer from "../../template/footer";
import HeaderAuth from "../../template/header";
import Dashboard_navbar from "../../template/dashboard-navbar";
import { getDayOfWeek, getReservationsDateMap } from "@/app/component/calendar/calendartype";
import React, { useEffect, useState } from 'react';
import { reservations2 } from "@/app/component/mock_data/reservations";
import { filterData } from "@/app/component/FilterReservation";
import ReservedCalendar from "../components/ReservedCalendar";


const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const hours = ['08:00-10:00', '10:01-12:00', '12:01-13:00', '13:01-15:00', '15:01-17:00'];
const colors = ['#29CC39', '#FF6633', '#8833FF', '#33BFFF', '#FFCB33']

const getWeekPerDay = (indexDay: number) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - currentDate.getDay() + indexDay + 1); // set week from the day
  const datestring = currentDate.toISOString().split('T')[0]
  
  return datestring;
}

const getColor = () => {
  try {
    let randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  } catch (e) {
    console.log("Error index out of the range!")
  }
}

const Calendar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const contents = ['Table 01', 'Table 02', 'Table 03', 'Table 04', 'Table 05', 'Table 06'];
  const [reservationsMap, setReservationMap] = useState(getReservationsDateMap(filterData(reservations2, contents[0])))

  const handleNext = async () => {
    if (activeIndex < contents.length - 1) {
      // setActiveIndex(prevIndex => prevIndex + 1);
      setActiveIndex(prevIndex => prevIndex + 1)
      setReservationMap(getReservationsDateMap(filterData(reservations2, contents[activeIndex + 1])))
    }
  };

  const handlePrevious = async () => {
    if (activeIndex > 0) {
      setActiveIndex(prevIndex => prevIndex - 1);
      setReservationMap(getReservationsDateMap(filterData(reservations2, contents[activeIndex - 1])))
    }
  };
  return (
    <div className="">
      <HeaderAuth />
      <div className="flex md:flex-row flex-col my-[5%] lg:my-[1.5%] justify-center w-full h-full">
        <Dashboard_navbar />
        <div className="overflow-x-auto md:mx-auto">
          <div className="bg-white rounded-t-xl lg:w-[1150px] w-[715px] md:my-4 md:mr-4 ml-4 md:ml-0">
            <div className="flex py-8 justify-center">
              {/* Tombol Kiri */}
              <button
                onClick={handlePrevious}
                disabled={activeIndex === 0}
                className={'rounded-full border-2 lg:p-4 p-2 hover:border-gray-400 active:border-[3px] shadow-sm ' +
                  (activeIndex === 0 ? 'cursor-not-allowed' : '')}
              >
                <div className="">
                  <svg width="11" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.0732 0.672889C5.89882 0.49812 5.66208 0.399902 5.4152 0.399902C5.16831 0.399902 4.93157 0.49812 4.7572 0.672889L0.473195 4.95689C0.109195 5.32089 0.109195 5.90889 0.473195 6.27289L4.7572 10.5569C5.1212 10.9209 5.7092 10.9209 6.0732 10.5569C6.4372 10.1929 6.4372 9.60489 6.0732 9.24089L2.45186 5.61022L6.0732 1.98889C6.4372 1.62489 6.42786 1.02756 6.0732 0.672889Z" fill="#C3CAD9" />
                  </svg>
                </div>
              </button>
              {/* Konten Tengah */}
              <div className="flex lg:gap-x-4 gap-x-2 my-auto">
                <div className="py-1 px-4 font-medium text-[#71717A] lg:text-[14px] text-[10px]">
                  {activeIndex > 0 ? <h1 className=''>{contents[activeIndex - 1]}</h1> : <h1 className="invisible pointer-events-none">Table 00</h1>}
                </div>
                <div className="py-1 px-4 my-auto bg-[#dc2626] sm:rounded-full lg:rounded-lg font-medium text-white lg:text-[14px] text-[10px]">
                  <h1 className=''>{contents[activeIndex]}</h1>
                </div>
                <div className="py-1 px-4 rounded-lg font-medium text-[#71717A] lg:text-[14px] text-[10px]">
                  {activeIndex < contents.length - 1 ? <h1 className=''>{contents[activeIndex + 1]}</h1> : <h1 className="invisible pointer-events-none">Table XX</h1>}
                </div>
              </div>

              {/* Tombol Kanan */}
              <button
                onClick={handleNext}
                disabled={activeIndex === contents.length - 1}
                className={"rounded-full border-2 lg:p-4 p-2 hover:border-gray-400 active:border-[3px] shadow-sm " +
                  (activeIndex === contents.length - 1 ? 'cursor-not-allowed' : '')}
              >
                <div >
                  <svg width="11" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.473195 0.67408C0.109195 1.03808 0.109195 1.62608 0.473195 1.99008L4.09453 5.61141L0.473195 9.23275C0.109195 9.59675 0.109195 10.1847 0.473195 10.5487C0.837195 10.9127 1.4252 10.9127 1.7892 10.5487L6.0732 6.26475C6.4372 5.90075 6.4372 5.31275 6.0732 4.94875L1.7892 0.664747C1.43453 0.31008 0.837195 0.31008 0.473195 0.67408Z" fill="#C3CAD9" />
                  </svg>
                </div>
              </button>
            </div>
            <div className="">
              <table className="border-collapse w-full table-fixed">
                <thead>
                  <tr>
                    <th className="border-2 border-[#F5F6F7] lg:py-7 py-4">
                      <div className="h-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.49 0.5C4.97 0.5 0.5 4.98 0.5 10.5C0.5 16.02 4.97 20.5 10.49 20.5C16.02 20.5 20.5 16.02 20.5 10.5C20.5 4.98 16.02 0.5 10.49 0.5ZM10.5 18.5C6.08 18.5 2.5 14.92 2.5 10.5C2.5 6.08 6.08 2.5 10.5 2.5C14.92 2.5 18.5 6.08 18.5 10.5C18.5 14.92 14.92 18.5 10.5 18.5ZM10.28 5.5H10.22C9.82 5.5 9.5 5.82 9.5 6.22V10.94C9.5 11.29 9.68 11.62 9.99 11.8L14.14 14.29C14.48 14.49 14.92 14.39 15.12 14.05C15.33 13.71 15.22 13.26 14.87 13.06L11 10.76V6.22C11 5.82 10.68 5.5 10.28 5.5Z" fill="#C3CAD9" />
                        </svg>
                      </div>
                    </th>
                    {days.map((day, index) => {
                      // console.log(index)
                      const getdate = getWeekPerDay(index)
                      const pickday = getdate.split("-")[2]
                      return (
                        <th className="border-2 border-[#F5F6F7] text-[10px] lg:text-[14px]">
                          <div className="h-full flex items-center justify-center">
                            <h1 className='text-[#6B7A99] font-bold my-auto'>{day} {pickday}</h1>
                          </div>
                        </th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody>
                  {hours.map((hour, index) =>
                    <tr>
                      <td className={"px-5 lg:text-[14px] text-[9px] text-[#ADB8CC] border-2 border-[#F5F6F7] font-bold text-sm flex justify-center " + (hour == '12:01-13:00' ? 'lg:py-9 py-4 bg-[#E4E7EC]' : 'lg:py-16 py-10')} >{hour}</td>
                      {days.map((day, index) => {
                        let hexcolor = getColor()
                        const datestring = getWeekPerDay(index)
                        const isreserved = reservationsMap[datestring]?.has(hour)
                        return (
                          <td key={day} className={"border-2 border-[#F5F6F7] font-bold text-sm " + (hour == '12:01-13:00' ? 'bg-[#E4E7EC]' : '')} >
                            {isreserved ? <ReservedCalendar hexcolor={hexcolor}/> : ''}
                          </td>
                        )
                      })}
                    </tr>
                  )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Calendar;

