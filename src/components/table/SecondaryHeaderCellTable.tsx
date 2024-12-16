import React from "react";

interface celltable{
  className?: string,
  children: React.ReactNode
}

const SecondaryHeaderCellTable = ({className, children} : celltable) => {
  return (
    <div className={"col-span-1 text-left text-gray-400 capitalize " + className}>
      <h1>{children}</h1>
    </div>
  )
}

export default SecondaryHeaderCellTable;