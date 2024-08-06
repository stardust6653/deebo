"use client";

import SEO from "@/components/common/SEO";

import React from "react";

interface PostPageProps {
  params: { category: string; id: string };
}

const ProfilePage = ({ params }: PostPageProps) => {
  console.log(params.id);

  return (
    <div>
      <SEO title={params.id} />
      <div>ProfilePage</div>
    </div>
  );
};

export default ProfilePage;
