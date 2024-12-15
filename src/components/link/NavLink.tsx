'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { link } from "../interface/Link";

function Navlink({ className, children, href, statichref}: link) {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={"" + (pathname.startsWith(href) || pathname.startsWith(statichref) ? 'font-bold text-primary-900 border-b-4 border-b-primary-900 pb-3' : 'font-bold text-[#667085] ') + className}
    >
      {children}
    </Link>
  )
}

export default Navlink;