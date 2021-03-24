import React from 'react'
import handleInputChange from "../utils/handleInputChange";

export default function CreateInput({ type, value, changeState, className }:{type?:string, value?:any, changeState?:Function, className?:string }) {
  function handleWidth() {
    if (type === "text") {
      return "w-2/5";
    } else {
      return "w-1/5";
    }
  }
  return (
    <input
      type={type}
      required
      value={value}
      onChange={(e) => handleInputChange(e, changeState)}
      className={`${handleWidth()} shadow-md border-gray-500 border ${className}`}
    />
  );
}
