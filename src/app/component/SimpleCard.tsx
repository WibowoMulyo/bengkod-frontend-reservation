import React from "react";

interface simplecard{
  className?: string,
  children?: React.ReactNode
}

const SimpleCard = ({className, children}: simplecard) => {
  return(
    <div className={"rounded-2xl p-6 shadow-primary " + className}>{children}</div>
  )
}

export default SimpleCard;