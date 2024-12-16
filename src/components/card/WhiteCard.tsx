import { card } from "@/components/interface/Card"


const WhiteCard = ({className, children}: card) => {
  return(
    <div className={"bg-white w-full rounded-xl md:my-4 md:mr-4 ml-4 md:ml-0 " + className}>
      {children}
    </div>
  )
}

export default WhiteCard;