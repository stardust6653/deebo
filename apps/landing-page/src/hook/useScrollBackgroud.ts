import { useEffect, useState } from "react";

export const useScrollBackground = (type: "MAIN" | "HEADER" | "FONT") => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const percentage = (scrollPosition / maxScroll) * 100;
      setScrollPercentage(Math.min(percentage, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerColors = Array.from({ length: 30 }, (_, i) => {
    const ratio = i / 29;
    const r = Math.round(191 + (5 - 191) * ratio);
    const g = Math.round(219 + (1 - 219) * ratio);
    const b = Math.round(254 + (48 - 254) * ratio);
    return `rgb(${r}, ${g}, ${b})`;
  });

  const fontColors = Array.from({ length: 30 }, (_, i) => {
    const ratio = i / 29;
    const r = Math.round(59 + (255 - 59) * ratio);
    const g = Math.round(130 + (255 - 130) * ratio);
    const b = Math.round(246 + (255 - 246) * ratio);
    return `rgb(${r}, ${g}, ${b})`;
  });

  const colors = Array.from({ length: 30 }, (_, i) => {
    const ratio = i / 29;
    const r = Math.round(64 + (30 - 64) * ratio);
    const g = Math.round(165 + (41 - 169) * ratio);
    const b = Math.round(245 + (96 - 255) * ratio);
    return `rgb(${r}, ${g}, ${b})`;
  });

  const currentColorIndex = Math.floor((scrollPercentage / 100) * 29);
  const currentColor = () => {
    switch (type) {
      case "MAIN":
        return colors[currentColorIndex];
      case "HEADER":
        return headerColors[currentColorIndex];
      case "FONT":
        return fontColors[currentColorIndex];
      default:
        return colors[currentColorIndex];
    }
  };

  return currentColor();
};
