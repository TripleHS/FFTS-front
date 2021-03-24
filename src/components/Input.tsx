import React from "react";
import handleInputChange from "../utils/handleInputChange";

const CreateInput: React.FC<{
  type?: string;
  value: any;
  changeState?: Function;
  className?: string;
}> = ({ type, value, changeState, className }) => {
  return (
    <input
      type={type}
      required
      value={value}
      onChange={(e) => handleInputChange(e, changeState)}
      className={`${
        type === "text" ? "w-2/5" : "w-1/5"
      } shadow-md border-gray-500 border ${className}`}
    />
  );
};
export default CreateInput;
