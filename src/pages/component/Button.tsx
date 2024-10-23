import { ppid } from "process";
import React, { ReactElement, useState } from "react";

interface props extends React.PropsWithChildren {
    children: ReactElement,
    value: string,
    disabled?: boolean
    setValue: (val: any) => void,
}

const renderComp: React.FC<props> = ({ children, value, setValue, disabled }) => {
    const [isActive, setIsActive] = useState(false)

    function switchBool() {
        setIsActive(!isActive)
    }

    return (
        <div
            className={"relative md:py-[2.5%] md:pr-[2%] md:pl-[3%] pr-[1%] pl-[8%] py-[2%] md:rounded-2xl rounded-full flex items-center " + (isActive ? 'bg-blue-900 text-white' : 'bg-[#d9d9d9]')}
        >
            <div className="mr-auto">
                {children}
            </div>
            <input type="checkbox" checked={true} value={value} 
            onChange={(e) => {setValue(e.target.value); switchBool()}}
            disabled={disabled}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer md:text-lg text-sm" />
        </div>
    )
}

export default renderComp;