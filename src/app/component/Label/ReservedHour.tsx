const ReservedHour = ({data='', className=''}) => {
  return (
    <div className={"bg-[#f7deb8] relative md:py-[1.5%] md:pr-[2%] md:pl-[3%] pr-[1%] pl-[8%] py-[2%] md:rounded-2xl rounded-full flex items-center" + className}>
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

export default ReservedHour;