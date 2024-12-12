import React from "react";
import { MagicCard } from "@/components/ui/magic-card";
import champ_ball from "@/assets/champ_ball.jpg";
import champ_selfie from "@/assets/champ_selfie.jpg";
import champ_field from "@/assets/champ_field.jpg";

export const AboutPage: React.FC = () => {
  const cards = [
    {
      text: "Jestem bulterierem miniaturowym, urodziłem się 21 września 2023 roku. Od 4 miesiąca biorę udział w wystawach w których idzie mi conajmniej świetnie. Mam championat w kategori szczeniaczkowej. Mój brat jest czarny i nie ma jaj.",
      img: champ_selfie,
    },
    {
      text: "Moją pasją są piłki i bardzo długie spacery. Interesuje mnie też wszystko co się rusza. W domu to bym leżał tylko pod pierzyną.",
      img: champ_field,
    },
    {
      text: "Uwielbiam bawić się piłkami, a najbardziej cenię długie spacery. Nic mnie tak nie cieszy, jak wyścigi po polu!",
      img: champ_ball,
    },
  ];

  return (
    <div className="flex flex-col gap-5 w-[80%] pt-5">
      {cards.map((card, index) => (
        <MagicCard
          key={index}
          className={`cursor-pointer flex-col items-center bg-mDark text-mPrimary border-0 justify-center text-lg w-[800px] h-fit ${
            index % 2 === 0 ? "self-end" : "self-start"
          }`}
          gradientColor="#333"
        >
          <div className="flex items-center justify-between p-5 gap-5">
            {index % 2 === 0 ? (
              <>
                <div>{card.text}</div>
                <img
                  src={card.img}
                  alt=""
                  className="w-[200px] aspect-square object-cover rounded-lg"
                />
              </>
            ) : (
              <>
                <img
                  src={card.img}
                  alt=""
                  className="w-[200px] aspect-square object-cover rounded-lg"
                />
                <div>{card.text}</div>
              </>
            )}
          </div>
        </MagicCard>
      ))}
    </div>
  );
};
