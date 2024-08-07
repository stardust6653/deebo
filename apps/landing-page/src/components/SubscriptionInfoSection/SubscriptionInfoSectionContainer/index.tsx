import React from "react";

interface Props {
  children: React.ReactNode;
}

const SubscriptionInfoSectionContainer = ({ children }: Props) => {
  return (
    <section className="bg-[#c0e9fa] bg-opacity-30 min-h-screen flex flex-col justify-center items-center text-white">
      {children}
    </section>
  );
};

export default SubscriptionInfoSectionContainer;
