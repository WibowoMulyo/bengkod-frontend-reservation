import React from "react";

interface landingbutton {
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const LandingButton = ({ className, children, onClick }: landingbutton) => {
  return (
    <button
      className={
        "text-sm py bg-primary-900 hover:bg-primary-800 ease-in duration-200 rounded-lg py-2 px-5 text-[#f7f7f7] font-medium " +
        className
      }
    >
      {children}
    </button>
  );
};

export default LandingButton;
