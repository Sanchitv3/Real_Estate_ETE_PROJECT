import React from "react";

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-red-500 bg-slate-900"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-red-500 transition-all duration-700 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-red-600 transition-all delay-200 duration-700 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-red-700 transition-all delay-300 duration-700 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-red-400 transition-all delay-500 duration-700 group-hover:h-full" />
    </button>
  );
};

export default DrawOutlineButton;