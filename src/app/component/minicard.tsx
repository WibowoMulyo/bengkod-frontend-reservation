import { Http2ServerRequest } from "http2";
import React from "react";

interface MinicardProps {
  className?: string;
  children?: React.ReactNode;
  subtitle?: React.ReactNode;
  value?: React.ReactNode;
}

const MiniCard: React.FC<MinicardProps> = ({ className, subtitle, value }) => {
  return (
    <div className={`min-w-[200px] col-span-1 min-h-24 relative space-y-1 ${className}`}>
      <h2 className="font-semibold"> {subtitle} </h2>
      {value}
    </div>
  );
};

export default MiniCard;