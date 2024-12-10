import { card } from "@/components/interface/Card"

const PrimaryCard = ({ className, children }: card) => {
  return (
    <div className={"bg-primary-200 p-6 rounded-2xl italic text-[14px] font-normal text-gray-700 " + className}>
      {children}
    </div>
  )
}

export default PrimaryCard;