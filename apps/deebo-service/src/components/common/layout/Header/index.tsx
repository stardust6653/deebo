import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const session = useSession();
  const router = useRouter();

  return (
    <div className="fixed w-full h-[64px] flex  justify-between items-center px-5 bg-blue-800 text-white font-medium">
      <h1 className="text-3xl font-bold text-white">Deebo</h1>
      <ul>
        <li className="cursor-pointer" onClick={() => signOut()}>
          {session.data !== null && "로그아웃"}
        </li>
        <li className="cursor-pointer" onClick={() => router.push("/")}>
          {session.data === null && "로그인"}
        </li>
      </ul>
    </div>
  );
};

export default Header;
