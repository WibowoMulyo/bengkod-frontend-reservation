interface button{
  children: React.ReactNode,
  className?: string,
  onClick?: () => void,
}

const SecondaryButton = ({children, className, onClick} : button) => {
  return(
    <button className={"bg-gray-300 hover:bg-gray-500 ease-in duration-200 rounded-xl p-2 text-[#f7f7f7] font-light capitalize " + className}
    onClick={onClick}
    >{children}</button>
  )
}

export default SecondaryButton;