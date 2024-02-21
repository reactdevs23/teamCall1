import React from "react";

const Completed = ({ color, bg }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 26 26"
      fill="none"
    >
      <circle cx="12.9776" cy="12.9776" r="12.9776" fill={bg} />
      <path
        d="M7.7168 12.6269L11.9258 16.8359L18.2392 10.5225"
        stroke={color}
        strokeWidth="2.80597"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Completed;
