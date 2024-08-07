import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainSectionContainer = ({ children }: Props) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white p-4 overflow-hidden">
      {children}
    </section>
  );
};

export default MainSectionContainer;
