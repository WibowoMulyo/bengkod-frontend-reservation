import Image from "next/image";
import React from "react";

interface responsiveimage {
  className?: string;
  photoclassName?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ResponsiveImage = ({
  className,
  src,
  width,
  height,
  alt = "",
  photoclassName = "",
}: responsiveimage) => {
  return (
    <div className={"" + className}>
      <Image
        style={{
          width: "100%",
          height: "100%",
        }}
        className={photoclassName}
        src={src}
        height={height}
        width={width}
        alt={alt}
      />

      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
          alt="Burger"
        />
      </div>
    </div>
  );
};

export default ResponsiveImage;
