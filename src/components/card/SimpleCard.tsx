import { card } from "@/components/interface/Card"


const SimpleCard = ({className, children}: card) => {
  return(
    <div className={"rounded-2xl p-6 shadow-primary " + className}>{children}</div>
  )
}

export default SimpleCard;