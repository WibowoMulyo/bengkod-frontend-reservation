interface primarycard {
  className?: string,
  children: React.ReactNode,
}

const PrimaryCard = ({ className, children }: primarycard) => {
  return (
    <div className={"bg-primary-200 p-6 rounded-2xl italic text-[14px] font-normal text-gray-700 " + className}>
      {children}
    </div>
  )
}

export default PrimaryCard;