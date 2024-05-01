import { BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  return (
    <button
      className="fixed bottom-5 right-5 
      w-[3rem] h-[3rem]
      flex items-center justify-center
      bg-white/80 backdrop-blur-sm borderBlack rounded-full shadow-2xl
      hover:scale-125 active:scale-105
      transition-all
      "
    >
      <BsSun />
    </button>
  );
}
