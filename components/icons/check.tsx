import React from "react";

const CheckIcon = ({ className, color }: { className?: string; color?: string }) => {
  return (
    <div className="w-max h-max pt-1">
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill={color ?? "none"}
      >
        <path
          d="M1.66797 9.79726C3.23704 10.9384 6.37518 14.0765 7.65896 16.2162C9.22803 12.7928 13.222 5.09005 17.5013 1.66663"
          stroke="black"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CheckIcon;
