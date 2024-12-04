import { button } from "../interface/Button";

const LogoutButton = ({className, children, onClick, ...props}: button) => {
  return(
    <button onClick={onClick} className={"font-semibold w-auto p-2 hover:bg-red-600 hover:text-white rounded-md " + className} {...props}>
      {children}
    </button>
  )
}

export default LogoutButton;