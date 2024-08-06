"use client";

import AuthForm from "@/components/common/auth/AuthForm";
import Input from "@/components/common/universal/Input";
import LabelGroup from "@/components/common/universal/LabelGroup";
import SubmitButton from "@/components/common/universal/SubmitButton";
import { isValidEmail, isValidPassword } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginCondition = isValidEmail(email) && isValidPassword(password);

  const emailErrorMessage = () => {
    if (!loginCondition && !isValidEmail(email) && email.length > 0) {
      return "올바른 이메일 형식이 아닙니다.";
    }
    if (!loginCondition && email.length === 0 && password.length !== 0) {
      return "이메일을 입력해주세요.";
    }
    return "";
  };

  const passwordErrorMessage = () => {
    if (!loginCondition && !isValidPassword(password) && password.length > 0) {
      return "올바른 비밀번호 형식이 아닙니다.";
    }
    if (!loginCondition && email.length !== 0 && password.length === 0) {
      return "비밀번호를 입력해주세요.";
    }
    return "";
  };

  return (
    <AuthForm
      condition={loginCondition}
      text="로그인"
      onClick={() => console.log("click")}
    >
      <div>
        <p className="text-2xl font-normal mb-4">로그인</p>
        <div className="flex mb-8">
          <p className="mr-2 font-light">신규사용자 이신가요?</p>
          <button
            className="text-blue-500"
            onClick={() => router.push("/join")}
          >
            회원가입 하러가기
          </button>
        </div>

        <div className="mb-8">
          <div className="mb-4">
            <LabelGroup title="이메일" errorMessage={emailErrorMessage()} />
            <Input id="email" type="email" setState={setEmail} />
          </div>

          <div>
            <LabelGroup
              title="비밀번호"
              errorMessage={passwordErrorMessage()}
            />
            <Input id="password" type="password" setState={setPassword} />
          </div>
        </div>
      </div>
    </AuthForm>
  );
};

export default LoginForm;
