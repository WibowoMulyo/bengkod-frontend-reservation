const ReservedCalendar = ({hexcolor=''}) => {
  return (
    <div
      style={{ backgroundColor: `${hexcolor}10`, borderColor: hexcolor }}
      className="border-[3px] lg:py-[54px] py-10 rounded-lg h-full m-[2px]"
    >
      <div className="font-semibold p-1 px-2 text-sm text-center "
        style={{ color: hexcolor }}
      >
        Reserved
      </div>
    </div>
  )
}

export default ReservedCalendar;
