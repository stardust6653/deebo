import React, { ReactNode } from "react";
import SubmitButton from "../../universal/SubmitButton";

interface Props {
  children: ReactNode;
  condition: boolean;
  text: string;
  onClick: any;
}

const AuthForm = ({ children, condition, text, onClick }: Props) => {
  return (
    <div className="flex justify-center items-center ml-48">
      <div className="min-h-[800px] min-w-[500px] bg-white rounded-3xl p-12 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-500 mb-12">Deebo</h1>
          {children}
        </div>

        <SubmitButton text={text} condition={condition} onClick={onClick} />
      </div>
    </div>
  );
};

export default AuthForm;
