import Link from "next/link";

const renderComp = ({ active = false, className = '', children = '', href = '' }) => {
    return (
        // <Link
        //     href={href}
        //     className={"" + (active ? 'font-bold underline' : 'font-light') + className}
        // >
        // {children}
        // </Link>
        <a
            href={href}
            className={"" + (active ? 'font-bold text-[#1E3A8B] border-b-4 border-b-[#1E3A8B] pb-3' : 'font-bold text-[#667085]') + className}
        >
            {children}
        </a>
    )
}

export default renderComp;