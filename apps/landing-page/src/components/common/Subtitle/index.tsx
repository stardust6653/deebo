import React from "react";

interface Props {
  line1: string;
  line2: string;
  type?: string;
}

const Subtitle = ({ line1, line2, type }: Props) => {
  return (
    <div
      className={`text-center text-xl font-thin leading-8 ${
        type === "FEATURE" ? "mb-[20px]" : "mb-12"
      }`}
    >
      <p>{line1}</p>
      <p>{line2}</p>
    </div>
  );
};

export default Subtitle;
