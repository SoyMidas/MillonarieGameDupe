import React, { useState } from "react";
import Business from "../Pages/Business";
import Earnings from "../Pages/Earnings";
import { Shares, RealState, CryptoCurrency, Market } from "../Pages/Investing";
import Items from "../Pages/Items";
import Profile from "../Pages/Profile";
import { SmallButton } from "../components/Button";

const Page = (props) => {
  const [distance, setDistance] = useState(0); // Estado para mantener el valor de distance

  // Función para actualizar el valor de distance al hacer clic en un botón
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

  switch (props.title) {
    case "Earnings":
      return <Earnings />;
    case "Business":
      return <Business />;
    case "Items":
      return <Items />;
    case "Profile":
      return <Profile />;
    case "Investing":
      return (
        <div className="overflow-clip w-screen h-screen pb-20 flex flex-col gap-4">
          <h1 className="font-bold text-4xl p-3">Investing</h1>

          <ul className="h-fit w-full flex flex-row justify-evenly">
            {["Shares", "Real State", "Crypto Currency"].map((name) => (
              <li key={name}>
                <SmallButton name={name} onClick={() => handleClick(name)} />
              </li>
            ))}
          </ul>
          <ul
            className="relative h-screen w-fit flex flex-row z-0 transition-all duration-300"
            style={{ right: `${distance}%` }}
          >
            <Shares />
            <RealState />
            <CryptoCurrency />
          </ul>
        </div>
      );
    case "Stock market":
      return <div className="w-screen h-fit"><Market /></div>;
    case "My shares":
      return <MyPocket />;
    default:
      return 404;
  }
};

export default Page;
