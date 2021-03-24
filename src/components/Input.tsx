import React from "react";
import handleInputChange from "../utils/handleInputChange";

export default function CreateInput({
  type,
  value,
  changeState,
  className,
}: {
  type?: string;
  value?: any;
  changeState?: Function;
  className?: string;
}) {

  return (
    <input
      type={type}
      required
      value={value}
      onChange={(e) => handleInputChange(e, changeState)}
      className={`${type === 'text'? 'w-2/5':'w-1/5'} shadow-md border-gray-500 border ${className}`}
    />
  );
}
