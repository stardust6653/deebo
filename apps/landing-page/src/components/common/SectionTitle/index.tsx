import React from "react";

interface Props {
  title: string;
  badge: string;
}

const SectionTitle = ({ title, badge }: Props) => {
  return (
    <div>
      <div className="text-xl">{badge}</div>
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
    </div>
  );
};

export default SectionTitle;
