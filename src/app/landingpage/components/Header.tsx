import React from "react";

interface header{
  className?: string,
  children: React.ReactNode
}

const Header = ({className, children}:header) =>{
  return (
    <h1 className={"text-2xl font-semibold md:text-4xl lg:text-left text-center "+className}>{children}</h1>
  )
}

export default Header;