import React from "react";

interface Props {
  children: React.ReactNode;
}

const QnASectionContainer = ({ children }: Props) => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-white p-4">
      {children}
    </section>
  );
};

export default QnASectionContainer;
