import React from "react"

const CreateInput: React.FC<{
  type: string
  value: string
  changeState: React.Dispatch<React.SetStateAction<string>>
  className?: string
}> = ({ type, value, changeState, className }) => {
  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    fc: (a: string) => void
  ) {
    fc(e.target.value)
  }

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
  )
}
export default CreateInput
