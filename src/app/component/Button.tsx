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
            className={"relative py-2 pr-2 pl-4 rounded-xl flex items-center " + (isActive ? 'bg-blue-900 text-white' : 'bg-[#d9d9d9]')}
        >
            <div className="mr-auto py-4">
                {children}
            </div>
            <input type="checkbox" checked={true} value={value} 
            onChange={(e) => {setValue(e.target.value); switchBool()}}
            disabled={disabled}
            className="absolute top-0 left-0 p-4 w-full h-full opacity-0 cursor-pointer" />
        </div>
    )
}

export default renderComp;