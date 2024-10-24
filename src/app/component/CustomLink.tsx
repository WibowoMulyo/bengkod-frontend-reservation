import Link from "next/link";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

interface props{
    children: React.ReactNode,
    href: string,
    classWhenActive?: string,
    classWhenInactive?: string,
    className?: string
}

function CustomLink ({children, href, classWhenActive, classWhenInactive, className } : props){
    return (
        <Link
            href={href}
            // onClick={handleClick}
            className={"" + (usePathname().startsWith(href) ? classWhenActive : classWhenInactive + ' ' + className)}
        >
            {children}
        </Link>
    )
}

export default CustomLink;