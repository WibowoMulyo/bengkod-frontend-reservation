import { card } from "@/components/interface/Card"

const NavBarCard = ({className, children}: card) => {
  return (
    <div className={"bg-white p-2 border-gray-200 border-2 " + className}>{children}</div>
  )
}

export default NavBarCard;