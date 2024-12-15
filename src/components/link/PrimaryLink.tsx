'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { link } from "../interface/Link";

function PrimaryLink({ className, children, href}: link) {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={"bg-primary-900 hover:bg-primary-800 ease-in duration-200 rounded-lg p-2 text-[#f7f7f7] " + className}
    >
      {children}
    </Link>
  )
}

export default PrimaryLink;