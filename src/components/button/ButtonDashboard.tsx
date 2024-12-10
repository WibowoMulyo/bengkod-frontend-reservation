import React from "react";
import { button } from "@/components/interface/Button";

const ButtonDashboard = ({className, children, onClick}: button) => {
  return(
    <button className={"rounded-full border-2 border-gray-100 text-gray-900 focus:border-primary-900 hover:border-primary-900 p-2 font-medium " + className}>{children}</button>
  )
}

export default ButtonDashboard;