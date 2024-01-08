import useNavColor from "@/store/useNavColor";
import { useEffect } from "react";

const useChangeNavColor = (reverse?: boolean) => {
  const { color, setColor } = useNavColor();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 850) {
        setColor(reverse ? "black" : "white");
      } else {
        setColor(reverse ? "white" : "black");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return color;
};

export default useChangeNavColor;
