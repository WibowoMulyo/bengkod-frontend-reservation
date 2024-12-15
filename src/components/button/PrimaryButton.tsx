import React, { ReactElement, useState } from "react";
import { button } from "@/components/interface/Button";



const PrimaryButton = ({children, className, onClick, disabled=false} : button) => {
  return(
    <button className={
      (disabled ? 'bg-primary-500 text-gray-50 ': "bg-primary-900 hover:bg-primary-800 ease-in duration-200 text-gray-100 " )
      + "rounded-lg p-2 " + className
    }
    disabled={disabled}
    onClick={onClick}
    >{children}</button>
  )
}

export default PrimaryButton;