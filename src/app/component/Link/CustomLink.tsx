'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { stringify } from "querystring";

interface props {
  children: React.ReactNode,
  href: string,
  className?: string,
  statichref?: string,
  whenactive?: string,
  whennotactive?: string,
  getActive?: (value: boolean) => void,
  showline?: boolean
}

function CustomLink({ children, href, className, whenactive, whennotactive, getActive, showline=true, statichref = href, ...props }: props) {
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
      {...props}
    >
      <div className={className + ' ' + (pathname.startsWith(href) || pathname.startsWith(statichref) ? whenactive : whennotactive)}>
        {children}
      </div>
      {pathname.startsWith(href) && showline && <div className="absolute -translate-x-16 -translate-y-[50px] bg-[#1e3a8b] rounded-lg px-[15px] py-6">
      </div>}
    </Link>
  )
}

export default CustomLink;