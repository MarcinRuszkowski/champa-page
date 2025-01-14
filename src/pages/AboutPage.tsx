import champ_ball from "@/assets/champ_ball.jpg";
import champ_selfie from "@/assets/champ_selfie.jpg";
import champ_field from "@/assets/champ_field.jpg";

export const AboutPage = () => {
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
    <div className="flex flex-col gap-5 md:w-[85%] p-5 mb-16">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center rounded-lg bg-mDark text-mPrimary justify-between text-lg h-fit  p-5 gap-5 cursor-pointer  ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <img
            src={card.img}
            alt={card.img}
            className="w-[250px] aspect-square object-cover rounded-lg"
          />
          <div>{card.text}</div>
        </div>
      ))}
    </div>
  );
};
