import React from "react";

const Blocker = ({ color, bg }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 27 26"
      fill="none"
    >
      <circle cx="13.9481" cy="12.9776" r="12.9776" fill={bg} />
      <path
        d="M11.1426 16.4851L17.456 10.1716"
        stroke={color}
        strokeWidth="2.80597"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.456 16.4851L11.1426 10.1717"
        stroke={color}
        strokeWidth="2.80597"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Blocker;
