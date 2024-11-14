interface simplecard{
  className?: string,
  children: React.ReactNode,
}


const SimpleCard = ({className, children}: simplecard) => {
  return (
    <div className={"bg-white p-2 border-gray-200 border-2 " + className}>{children}</div>
  )
}

export default SimpleCard;