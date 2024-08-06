import React from "react";

interface Props {
  title: string;
  errorMessage: string;
}

const LabelGroup = ({ title, errorMessage }: Props) => {
  return (
    <div className="flex justify-between mb-1">
      <label htmlFor="password" className="text-sm font-light">
        {title}
      </label>
      <div className="text-xs text-red-600">{errorMessage}</div>
    </div>
  );
};

export default LabelGroup;
