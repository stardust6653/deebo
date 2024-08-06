import React from "react";

interface Props {
  title: string;
  errorMessage: string;
}

const LabelGroup = ({ title, errorMessage }: Props) => {
  const id = () => {
    switch (title) {
      case "이메일":
        return "email";
      case "비밀번호":
        return "password";
      case "비밀번호 확인":
        return "password check";
      case "성별":
        return "gender";
      case "생년월일":
        return "birthday";
      case "닉네임":
        return "nickName";
    }
  };

  return (
    <div className="flex justify-between mb-1">
      <label htmlFor={id()} className="text-sm font-light">
        {title}
      </label>
      <div className="text-xs text-red-600">{errorMessage}</div>
    </div>
  );
};

export default LabelGroup;
