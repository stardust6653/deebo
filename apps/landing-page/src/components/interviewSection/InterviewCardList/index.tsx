import React from "react";
import InterviewCard from "../InterviewCard";

const InterviewCardList = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <InterviewCard />
      <InterviewCard />
      <InterviewCard />
    </div>
  );
};

export default InterviewCardList;
