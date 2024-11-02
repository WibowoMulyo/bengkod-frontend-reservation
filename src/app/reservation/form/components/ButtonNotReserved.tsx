interface buttonnotreserved{
  disabled?: boolean,
  className?: string,
  children: React.ReactNode,
  onClick?: () => void,
}

const ButtonNotReserved = ({disabled=false, className, children, onClick} : buttonnotreserved) => {
  return(
    <button
        disabled={disabled}
        onClick={onClick}
        className={"relative md:py-[2.5%] md:pr-[2%] md:pl-[3%] pr-[1%] pl-[8%] py-[2%] md:rounded-2xl rounded-full flex items-center " + className}
      >
        {children}
      </button>
  )
}

export default ButtonNotReserved;