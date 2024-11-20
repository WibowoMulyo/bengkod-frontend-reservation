'use client'
import Navlink from "@/app/component/Link/NavLink";

const LinkHeader = () => {
  return (
    <div className="flex mr-20 gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full items-center">
      <Navlink statichref="/dashboard" href="/dashboard/calendar">
        Dashboard
      </Navlink>
      <Navlink statichref="/reservation" href="/reservation">
        Reservasi
      </Navlink>
    </div>
  )
}
export default LinkHeader;