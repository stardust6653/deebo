"use client";

import AuthBanner from "@/components/common/auth/AuthBanner";
import AuthPageLayout from "@/components/common/layout/AuthPageLayout";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SignIn = () => {
  const router = useRouter();
  const [count, setCount] = useState(3);

  setInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, 1000);

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, count * 1000);
  }, []);

  return (
    <div className="flex justify-center items-center bg-blue-600 h-[100vh] w-full">
      <main className="flex flex-col justify-center items-center">
        <AuthBanner />
        <div className="w-[200px] border mb-8"></div>
        <div className="text-center text-yellow-100 font-bold text-2xl">
          {count}초 후 로그인 페이지로 이동합니다.
        </div>
      </main>
    </div>
  );
};

export default SignIn;
