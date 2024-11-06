'use client'

import Link from "next/link";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useEffect } from "react";

function Navlink({ className = '', children = '', href = '', statichref = '' }) {
  return (
    <Link
      href={href}
      className={"" + (usePathname().startsWith(href) || usePathname().startsWith(statichref) ? 'font-bold text-primary-900 border-b-4 border-b-primary-900 pb-3' : 'font-bold text-[#667085] ') + className}
    >
      {children}
    </Link>
  )
}

export default Navlink;