interface button{
  children: React.ReactNode,
  className?: string,
  onClick?: () => void,
}

const Button = ({children, className, onClick} : button) => {
  return(
    <button className={"bg-primary-900 hover:bg-primary-800 ease-in duration-200 rounded-xl p-2 text-[#f7f7f7] font-light " + className}
    onClick={onClick}
    >{children}</button>
  )
}

export default Button;