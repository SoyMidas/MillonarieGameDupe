import React from "react";
import jsonData from "../data/Data.json";
import Icon from "./../Layouts/LayoutIcons";

type Props = {
  id: string;
  title: string;
} & ({} | {});

const Card = (props: Props) => {
  const jsonID = jsonData.Personal[props.id];

  const getValueColor = () => {
    switch (jsonID.StockPerHour.Value) {
      case "+":
        return "emerald";
      case "-":
        return "red";
      default:
        return "slate";
    }
  };

  return (
    <div
      className={`
      ------Div------
      h-fit
      overflow-clip max-w-[80vw] place-self-center w-80
      ---------------
      ------Top------
      [&>header]:h-[20%] [&>header]:rounded-t-lg
      [&>header]:bg-blue-600/90 [&>header]:text-white
      [&>header]:flex [&>header]:flex-row [&>header]:items-center [&>header]:gap-2
      [&>header]:px-4 [&>header]:py-2
      ---------------
      ----Section----
      [&>section]:bg-blue-200/90
      [&>section]:h-fit [&>section]:rounded-b-lg
      [&>section]:p-4 [&>section]:pt-2
      ------h4-------
      [&>section>h4]:text-zinc-500
      ---------------
      -------p-------
      [&>section>p]:text-2xl
      last:[&>section>p]:text-xl
      ---------------
    `}
    >
      <header>
        <Icon name="portfolio" />
        <h3>{props.title} portafolio</h3>
      </header>
      <section>
        <h4>Estimated yield per hour</h4>
        <p>$ {jsonID.Portfolio}</p>
        <h4>Pocket</h4>
        <p className={`text-${getValueColor()}-500`}>
          {jsonID.StockPerHour.Value}$ {jsonID.StockPerHour.Quantity}
        </p>
      </section>
    </div>
  );
};

export default Card;
