import React from "react";

interface Props {
  children: React.ReactNode;
}

const InterviewSectionContainer = ({ children }: Props) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white p-4">
      {children}
    </section>
  );
};

export default InterviewSectionContainer;
