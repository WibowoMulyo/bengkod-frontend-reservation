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
            className={"" + (active ? 'font-bold underline' : 'font-light') + className}
        >
            {children}
        </a>
    )
}

export default renderComp;