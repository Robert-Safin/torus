'use client'
import useChangeNavColor from "../lib/useChangeNavColor";

const FaqPage = () => {
  const navColor = useChangeNavColor(true);
  return (
    <>
      <div className="bg-black h-screen">
        <p className="pt-40 text-white">FAQ</p>
      </div>
      <div className="bg-black h-screen">
        <p className="pt-40 text-white">FAQ</p>
      </div>
    </>
  );
};

export default FaqPage;
