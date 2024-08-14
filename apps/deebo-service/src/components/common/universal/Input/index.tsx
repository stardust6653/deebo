import React, { Dispatch, SetStateAction } from "react";

interface Props {
  id: string;
  type: "text" | "password" | "email" | "number" | "date";
  setState: Dispatch<SetStateAction<string>>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({ type, id, setState, onKeyDown }: Props) => {
  const maxLength = () => {
    switch (id) {
      case "email":
        return 50;
      case "password":
        return 20;
      case "password check":
        return 20;
      case "nickName":
        return 15;
    }
  };

  const minLength = () => {
    switch (id) {
      case "email":
        return 5;
      case "password":
        return 8;
      case "password check":
        return 8;
      case "nickName":
        return 2;
    }
  };

  return (
    <input
      id={id}
      type={type}
      className="w-full border-b-2 border-gray-300 focus:border-blue-500 p-1 px-1"
      onChange={(e) => setState(e.target.value)}
      maxLength={maxLength()}
      minLength={minLength()}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
