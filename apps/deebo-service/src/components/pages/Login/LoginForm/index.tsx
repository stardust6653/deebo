"use client";

import AuthForm from "@/components/common/auth/AuthForm";
import Input from "@/components/common/universal/Input";
import LabelGroup from "@/components/common/universal/LabelGroup";
import SubmitButton from "@/components/common/universal/SubmitButton";
import { isValidEmail, isValidPassword } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getSession, signIn as nextAuthSignIn } from "next-auth/react";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState(false);

  const loginCondition = isValidEmail(email) && isValidPassword(password);

  const emailErrorMessage = () => {
    if (!loginCondition && !isValidEmail(email) && email.length > 0) {
      return "올바른 이메일 형식이 아닙니다.";
    }
    if (!loginCondition && email.length === 0 && password.length !== 0) {
      return "이메일을 입력해주세요.";
    }
    if (loginError) {
      return "이메일 또는 비밀번호가 일치하지 않습니다.";
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

  useEffect(() => {
    setLoginError(false);
  }, [password, email]);

  const onEnterKeyDown = (e: any) => {
    if (e.key === "Enter") {
      signIn(email, password);
    }
  };

  async function signIn(email: string, password: string) {
    try {
      // 먼저 커스텀 API를 호출하여 Supabase 인증을 수행
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        setLoginError(true);
        throw new Error(error.error);
      }

      const data = await response.json();

      // NextAuth 세션 생성
      const result = await nextAuthSignIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        throw new Error(result.error);
      } else if (result?.ok) {
        console.log("로그인 완료");
        router.push("/create-profile");
      }

      return data;
    } catch (error: any) {
      console.error("Login error:", error.message);
      throw error;
    }
  }

  return (
    <AuthForm
      condition={loginCondition}
      text="로그인"
      onClick={() => signIn(email, password)}
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
            <Input
              id="email"
              type="email"
              setState={setEmail}
              onKeyDown={onEnterKeyDown}
            />
          </div>

          <div>
            <LabelGroup
              title="비밀번호"
              errorMessage={passwordErrorMessage()}
            />
            <Input
              id="password"
              type="password"
              setState={setPassword}
              onKeyDown={onEnterKeyDown}
            />
          </div>
        </div>
      </div>
    </AuthForm>
  );
};

export default LoginForm;
