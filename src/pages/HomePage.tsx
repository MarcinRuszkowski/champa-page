import React from "react";
import logo from "@/assets/champ_head.png";
import { MainDesc } from "@/components/MainDesc";

export const HomePage: React.FC = () => {
  return (
    <div className="flex items-center relative">

      <div className="flex flex-col md:flex-row items-center justify-center md:mt-32">
        <img
          src={logo}
          alt="Logo"
          className="h-[400px] w-[300px] object-cover "
        />

        <div className="">
          <MainDesc />
        </div>
      </div>
    </div>
  );
};
