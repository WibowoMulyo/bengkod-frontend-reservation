'use client'

import Link from "next/link";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useEffect } from "react";

function Navlink({ className = '', children = '', href = '', statichref = '' }) {
  useEffect(() => {
    console.log(href)
  }, [])
  return (
    <Link
      href={href}
      className={"" + (usePathname().startsWith(href) || usePathname().startsWith(statichref) ? 'font-bold text-[#1E3A8B] border-b-4 border-b-[#1E3A8B] pb-3' : 'font-bold text-[#667085] ') + className}
    >
      {children}
    </Link>
  )
}

export default Navlink;