import React from "react";

interface buttondashboard{
  className?: string,
  children: React.ReactNode,
  onClick?: (e:  React.MouseEvent<HTMLButtonElement>) => void

}

const ButtonDashboard = ({className, children, onClick}: buttondashboard) => {
  return(
    <button className={"rounded-full border-2 border-gray-100 text-gray-900 focus:border-primary-900 hover:border-primary-900 p-2 font-medium " + className}>{children}</button>
  )
}

export default ButtonDashboard;