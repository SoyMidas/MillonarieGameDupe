import React, { useState } from "react";
import CryptoCurrency from "./CryptoCurrency";
import RealState from "./RealState";
import Shares from "./Shares";
import Button from "../../components/Button";

const Investing = () => {
  const [distance, setDistance] = useState(0);

  const handleClick = (name) => {
    switch (name) {
      case "Shares":
        setDistance(0);
        break;
      case "Real State":
        setDistance(100);
        break;
      case "Crypto Currency":
        setDistance(200);
        break;
      default:
        break;
    }
  };

  // Define text color based on the distance state
  let textColor;
  switch (distance) {
    case 0:
      textColor = "black";
      break;
    case 100:
      textColor = "white";
      break;
    case 200:
      textColor = "black";
      break;
  }

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col gap-4">
      <h1
        className={`
          font-bold text-4xl p-3 lg:pl-16 z-10
        `}
        style={{ color: textColor }} // Use the textColor variable here
      >
        Investing
      </h1>

      <ul
        className={`h-fit w-full flex flex-row justify-evenly lg:pl-16 z-10 transition-all`}
        style={{ left: `${distance}%` }}
      >
        {["Shares", "Real State", "Crypto Currency"].map((name) => (
          <li key={name} className="w-fit h-fit">
            <Button size="lg" bg="blue" onClick={() => handleClick(name)}>
              {name}
            </Button>
          </li>
        ))}
      </ul>

      <ul
        className={`
          relative 
          transition-all

          --Large--
          lg:mx-20 lg:flex lg:flex-row lg:w-fit
          [&>li]:lg:flex [&>li]:lg:flex-row [&>li]:lg:w-screen
          ----------------------------------------------------------
          --Default--
          flex flex-row 
          [&>li]:flex [&>li]:flex-col  [&>li]:px-5 [&>li]:w-screen w-fit [&>li]:gap-6
        `}
        style={{ right: `${distance}%` }} // Use a negative value for the right property
      >
        <Shares />
        <RealState />
        <CryptoCurrency />
      </ul>
    </div>
  );
};

export default Investing;
