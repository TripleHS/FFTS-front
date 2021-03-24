import React from "react";

const CreateLabel: React.FC<{ description?: string }> = ({
  description,
  children,
}) => {
  return (
    <label className="p-1 flex justify-center">
      <p className="w-1/4">{description}</p>
      {children}
    </label>
  );
};
export default CreateLabel;
