import useHorizontalScroll from "@/hooks/useHorizontalScroll";
import React, { ReactNode } from "react";

const HorizontalScrollContainer = ({ children }: { children: ReactNode }) => {
  const scrollRef = useHorizontalScroll();

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-auto overflow-y-hidden scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {children}
    </div>
  );
};

export default HorizontalScrollContainer;
