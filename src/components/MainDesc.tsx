import React from "react";
import { FadeText } from "./ui/fade-text";
import { TextLoop } from "./ui/text-loop";
import { LinkPreview } from "./ui/link-preview";
import { FaInstagram } from "react-icons/fa";

export const MainDesc: React.FC = () => {
  return (
    <div className="">
      <FadeText
        className="text-6xl font-bold text-[#247afb]"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.2 } },
        }}
        text="CHAMPA"
      />
      <div className=" flex flex-col gap-3 ml-3 text-white">
        <div>
          {" "}
          jestem{" "}
          <TextLoop
            className="text-xl text-[#247afb]"
            children={["REPRODUKTOREM", "CHAMPIONEM", "RUCHACZEM"]}
          />
          <br />
          mam juz rok i zaczynam dupczyć. Chętna??? <br /> To ustaw się w
          kolejce
        </div>
        <LinkPreview
          className="text-mPrimary text-2xl bg-mDark p-3 w-fit rounded-full"
          url="https://www.instagram.com/bulterierchampa/?igsh=azhrMmY2M3F1YjFm#"
        >
          <FaInstagram />
        </LinkPreview>
      </div>
    </div>
  );
};