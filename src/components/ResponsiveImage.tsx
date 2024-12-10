import Image from "next/image"
import React from "react"
import { image } from "@/components/interface/Image"

const ResponsiveImage = ({ className, src, width, height, alt = "", photoclassName = ""}: image) => {

  return (
    <div className={"" + className}>
      <Image
        style={{
          width: '100%',
          height: '100%'
        }}
        className={photoclassName}
        src={src}
        height={height}
        width={width}
        alt={alt}
      />
    </div>
  )
}

export default ResponsiveImage