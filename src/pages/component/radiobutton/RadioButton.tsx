interface props {
    label: string,
    value: string,
    className?: string,
}

const renderComp = ({ label, value, className, ...props}: props) => {
    return (
        <button
            type="button"
            role="radio"
            aria-checked={"false"}
            tabIndex={-1}
            className={
                "p-5 text-lg min-w-[150px] max-w-max bg-[#d9d9d9] border-0 text-white aria-checked:bg-[#f48c06] hover:bg-[#f7c06d] "
                + className
            }
            data-label={label}
            data-value={value}
        >
            {label}
        </button>
    )
}

export default renderComp;
