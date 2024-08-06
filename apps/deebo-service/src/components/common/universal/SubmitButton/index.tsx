import React from "react";

interface Props {
  text: string;
  condition: boolean;
  onClick: () => void;
}

const SubmitButton = ({ text, condition, onClick }: Props) => {
  const disabledColor = () => {
    if (condition) {
      return "bg-blue-500  text-white ";
    } else {
      return "bg-slate-300  text-white";
    }
  };

  return (
    <button
      className={`w-full p-2 rounded-md text-white ${disabledColor()}`}
      disabled={!condition}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
