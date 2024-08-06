import React, { Dispatch, SetStateAction } from "react";

interface Props {
  type: "text" | "password" | "email" | "number";
  setState: Dispatch<SetStateAction<string | number | boolean>>;
}

const Input = ({ type, setState }: Props) => {
  return (
    <input
      id={type}
      type={type}
      className="w-full border-b-2 border-gray-300 focus:border-blue-500 p-1 px-1"
      onChange={(e) => setState(e.target.value)}
    />
  );
};

export default Input;
