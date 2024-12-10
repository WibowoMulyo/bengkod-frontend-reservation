import React from "react";

interface celltable{
  className?: string,
  children: React.ReactNode
}

const HeaderCellTable = ({className, children} : celltable) => {
  return (
    <div className={"col-span-1 text-center text-gray-900/[.8] capitalize " + className}>
      <h1>{children}</h1>
    </div>
  )
}

export default HeaderCellTable;