import React, { useEffect, useState } from "react";
import { useScrollBackground } from "../../../hook/useScrollBackgroud";

const Header = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const backgroundColor = useScrollBackground("HEADER");
  // const fontColor = useScrollBackground("FONT");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage = Math.min((scrollPosition / maxScroll) * 100, 100);
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getColor = () => {
    const startColor = { r: 59, g: 130, b: 246 };
    const endColor = { r: 255, g: 255, b: 255 };
    const step = Math.floor(scrollPercentage / 3); // 5 steps (0-4)

    if (step >= 2) return `rgb(255, 255, 255)`;

    const r = Math.round(
      startColor.r + (endColor.r - startColor.r) * (step / 2)
    );
    const g = Math.round(
      startColor.g + (endColor.g - startColor.g) * (step / 2)
    );
    const b = Math.round(
      startColor.b + (endColor.b - startColor.b) * (step / 2)
    );

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <header
      style={{ backgroundColor }}
      className="fixed bg-blue-200 w-full p-4 px-8 flex justify-between items-center z-20"
    >
      <h1
        style={{ color: getColor() }}
        className="text-2xl font-bold  text-blue-500"
      >
        Deebo
      </h1>
      <nav>
        <ul
          style={{ color: getColor() }}
          className="flex space-x-4  text-blue-950"
        >
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
