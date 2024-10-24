'use client'

import Link from "next/link";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'



function Navlink ({ className = '', children = '', href = '' }){
    return (
        <Link
            href={href}
            // onClick={handleClick}
            className={"" + (usePathname().startsWith(href) ? 'font-bold text-[#1E3A8B] border-b-4 border-b-[#1E3A8B] pb-3' : 'font-bold text-[#667085] ') + className}
        >
            {children}
        </Link>
    )
}

export default Navlink;