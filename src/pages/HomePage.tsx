import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import logo from "@/assets/champ_head.png";
import { MainDesc } from "@/components/MainDesc";

export const HomePage: React.FC = () => {
  return (
    <BackgroundLines className="bg-[#121212] h-auto w-screen flex  items-center justify-center relative">
      <div className="flex flex-row items-center w-fit absolute right-1/3">
        <img
          src={logo}
          alt=""
          className=" h-[400px] min-w-fit mr-10 absolute  right-1/2"
        />
        <div className="absolute right-1/2">
          <MainDesc />
        </div>
      </div>
    </BackgroundLines>
  );
};
