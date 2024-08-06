import React, { ReactNode } from "react";
import AuthBanner from "../../auth/AuthBanner";

interface Props {
  children: ReactNode;
}

const AuthPageLayout = ({ children }: Props) => {
  return (
    <div className="flex justify-center items-center bg-blue-600 h-[100vh] w-full">
      <main className="flex">
        <AuthBanner />
        {children}
      </main>
    </div>
  );
};

export default AuthPageLayout;
