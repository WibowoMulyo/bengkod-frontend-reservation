import { ppid } from "process";
import React, { ReactElement, useState } from "react";
import { button } from "../interface/Button";



const PrimaryButton = ({children, className, onClick} : button) => {
  return(
    <button className={"bg-primary-900 hover:bg-primary-800 ease-in duration-200 rounded-xl p-2 text-[#f7f7f7] " + className}
    onClick={onClick}
    >{children}</button>
  )
}

export default PrimaryButton;