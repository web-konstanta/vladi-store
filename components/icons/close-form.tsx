import React from "react";

const CloseFormIcon = ({ className, color }: { className?: string; color?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <path d="M17 1L1 17M17 17L1 1" stroke="#27241F" strokeWidth="2" strokeLinecap="round" color={color} />
    </svg>
  );
};

export default CloseFormIcon;
