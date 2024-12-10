interface button{
  children: React.ReactNode,
  className?: string,
  onClick?: () => void,
}

const DangerButton = ({children, className, onClick} : button) => {
  return(
    <button className={"bg-red-700 hover:bg-red-800 ease-in duration-200 rounded-xl p-2 text-[#f7f7f7] font-light " + className}
    onClick={onClick}
    >{children}</button>
  )
}

export default DangerButton;