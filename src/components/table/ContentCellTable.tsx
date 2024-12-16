import React from "react";

interface celltable{
  className?: string,
  children: React.ReactNode
  indexcolortext?: number,
}

const colortext = ['text-gray-950/[.9]', 'text-green-500', 'text-primary-900', 'text-red-700', 'text-yellow-500']

const ContentCellTable = ({className, children, indexcolortext=0} : celltable) => {
  if(indexcolortext < 0 || indexcolortext > colortext.length-1){
    indexcolortext=0
  }
  return (
    <div className={"capitalize font-medium " + colortext[indexcolortext]+ " " + className}>
      <p>{children}</p>
    </div>
  )
}

export default ContentCellTable;