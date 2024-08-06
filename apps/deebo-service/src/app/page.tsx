import AuthBanner from "@/components/common/\bauth/AuthBanner";
import LoginForm from "@/components/pages/Login/LoginForm";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-blue-600 h-[100vh] w-full">
      <main className="flex">
        <AuthBanner />
        <LoginForm />
      </main>
    </div>
  );
}
