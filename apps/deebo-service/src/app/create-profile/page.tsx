"use client";

import { useSession } from "next-auth/react";
import React from "react";

const CreateProfilePage = () => {
  const session = useSession();

  console.log(session);

  return <div>CreateProfilePage</div>;
};

export default CreateProfilePage;
