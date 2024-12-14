import { button } from "@/components/interface/Button";


const SecondaryButton = ({children, className, onClick} : button) => {
  return(
    <button className={"bg-gray-500 ease-in duration-200 rounded-lg p-2 text-white font-light capitalize " + className}
    onClick={onClick}
    >{children}</button>
  )
}

export default SecondaryButton;