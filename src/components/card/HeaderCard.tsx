import { card } from "../interface/Card";

const HeaderCard = ({className, children} : card) => {
  return(
    <nav className={"rounded-3xl m-4 bg-white hidden md:block border-gray-100 border-[3px] " + className}>
      {children}
    </nav>
  )
}

export default HeaderCard;