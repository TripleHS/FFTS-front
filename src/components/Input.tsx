import React from "react";

const CreateInput: React.FC<{
  type?: string;
  value: any;
  changeState?: Function;
  className?: string;
}> = ({ type, value, className }) => {
  return (
    <input
      type={type}
      required
      value={value}
      className={`${
        type === "text" ? "w-2/5" : "w-1/5"
      } shadow-md border-gray-500 border ${className}`}
    />
  );
};
export default CreateInput;
