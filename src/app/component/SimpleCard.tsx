import React from "react";

interface SimpleCardProps {
  className?: string;
  children?: React.ReactNode;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ className, children }) => {
  return (
    <div className={`rounded-2xl p-8 shadow-primary ${className}`}>
      {children}
    </div>
  );
};

export default SimpleCard;
