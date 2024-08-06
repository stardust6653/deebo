import AuthBanner from "@/components/common/auth/AuthBanner";
import AuthPageLayout from "@/components/common/layout/AuthPageLayout";
import LoginForm from "@/components/pages/Login/LoginForm";

export default function Home() {
  return (
    <AuthPageLayout>
      <LoginForm />
    </AuthPageLayout>
  );
}
