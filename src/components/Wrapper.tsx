import React from "react";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="bg-white rounded-2xl p-5 w-[800px] m-5">{children}</div>
  );
};

export default Wrapper;
