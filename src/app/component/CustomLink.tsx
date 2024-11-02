'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { stringify } from "querystring";
import { useState } from "react";

interface props {
  children: React.ReactNode,
  href: string,
  className?: string,
  whenActive?: string,
  whenNonActive?: string,
  getActive?: (value: boolean) => void,
}

function CustomLink({ children, href, className, whenActive, whenNonActive, getActive }: props) {
  const pathname = usePathname()

  function onClick() {
    if(getActive){
      getActive(pathname.startsWith(href))
    }
  }
  return (
    <Link
      href={href}
      onClick={onClick}
    >
      <div className={className + ' ' + (pathname.startsWith(href) ? whenActive : whenNonActive)}>
        {children}
      </div>
      {pathname.startsWith(href) && <div className="absolute -translate-x-16 -translate-y-[50px] bg-[#1e3a8b] rounded-lg px-[15px] py-6">
      </div>}
    </Link>
  )
}

export default CustomLink;