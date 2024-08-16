import { useEffect, useRef, useState } from "react";

export const useUListElementScrollEnd = (threshold = 50) => {
  const [isBottom, setIsBottom] = useState(false);
  const elementRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      setIsBottom(scrollHeight - (scrollTop + clientHeight) < threshold);
    };

    element.addEventListener("scroll", handleScroll);
    return () => element.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { isBottom, elementRef };
};
