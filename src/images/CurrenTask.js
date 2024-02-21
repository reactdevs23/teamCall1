import React from "react";

const CurrenTask = ({ color, bg }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.9786" cy="12.9776" r="12.9776" fill={bg} />
      <path
        d="M7.71777 12.627L18.9417 12.627"
        stroke={color}
        strokeWidth="2.80597"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4336 16.1343L18.9411 12.6268"
        stroke={color}
        strokeWidth="2.80597"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4336 9.11938L18.9411 12.6268"
        stroke={color}
        strokeWidth="2.80597"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CurrenTask;
