import { card } from "../interface/Card";

export default function GreenCard({ children, className }: card) {
  return (
    <div className={"bg-green-500 rounded-xl p-4 text-white w-[240px] h-[120px] " + className}>
      {children}
    </div>
  )
}