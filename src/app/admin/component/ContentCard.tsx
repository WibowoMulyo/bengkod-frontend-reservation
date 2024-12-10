import { Content } from "next/font/google";
import React from "react";

interface ContentCardProps {
  className?: string;
  content?: React.ReactNode;
}

const ContentCard: React.FC<ContentCardProps> = ({ className, content }) => {
  return (
    <div className={`rounded-2xl p-8 shadow-primary bg-gray ${className}`}>
      {content}
    </div>
  );
};

export default ContentCard;
