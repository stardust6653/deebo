import React from "react";

interface Props {
  children: React.ReactNode;
}

const FanFeatureSectionContainer = ({ children }: Props) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white ">
      {children}
    </section>
  );
};

export default FanFeatureSectionContainer;
