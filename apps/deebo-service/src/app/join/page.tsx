import AuthPageLayout from "@/components/common/layout/AuthPageLayout";
import JoinForm from "@/components/pages/Join/JoinForm";
import React from "react";

const JoinPage = () => {
  return (
    <AuthPageLayout>
      <JoinForm />
    </AuthPageLayout>
  );
};

export default JoinPage;
