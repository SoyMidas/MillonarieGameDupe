import Card from "../components/PortfolioCard";
import { LargeButton } from "../components/Button";
import { Link } from "react-router-dom";
import Icon from "../Layouts/LayoutIcons";
import Data from "../data/profile";

const Shares = () => {
  return (
    <li className="h-screen w-screen flex flex-col gap-4 px-4">
      <Card title="Shares" />
      <div className="flex flex-col gap-2">
        <Link to="stock_market">
          <LargeButton text="Stock market" color="blue" />
        </Link>
        <Link to="my_shares">
          <LargeButton text="My shares" color="gray" />
        </Link>
      </div>
    </li>
  );
};

const Market = () => {
  return (
    <div className="px-8 pt-10 flex flex-col justify-center gap-3 w-scren h-fit">
      <div className="flex flex-row items-center gap-2">
        <Icon name="ArrowLeft" />
        <h1 className="h-fit w-fit text-3xl font-bold drop-shadow-md">
          Stock market
        </h1>
      </div>
      <div className="px-8 pt-10 flex flex-row justify-center gap-3 w-[100%] h-fit overflow-x-scroll">

        {
        ["Highest dividend", "Lowest dividend", "Cheap first", "Expensive first", "Highest capitalization", "Lowest capitalization"].map(
          (name)=> <div className="bg-colors-zinc-300 p-2 rounded-full font-semibold text-md min-w-max px-6">{name}</div>
          )}
      </div>
      <ul className="h-full flex flex-col gap-3">
        {Data.SharesStockBrandsList.map(
          ({ id, name, state, MoneyValue, Porcentage, Value }, index) => {
            return (
              <li
                key={index}
                className={`grid grid-cols-[fit-content,_1fr,_max-content] gap-x-2 grid-rows-2 rounded-lg bg-gradient-to-r from-colors-zinc-200 from-80% 
                shadow-md w-full h-fit p-3 items-center
                ${
                  MoneyValue === "+"
                    ? "to-colors-green-300"
                    : MoneyValue === "-"
                    ? "to-colors-red-300"
                    : "text-colors-slate-300"
                }`}
              >
                {/* Icono */}
                <span className="row-span-2 col-span-1 row-start-1 w-fit p-1 aspect-square">
                  <Icon name={id} />
                </span>

                {/* Nombre */}
                <span className="col-span-2 min-w-min max-w-max font-medium text-base col-start-2 row-start-1">
                  {name}
                </span>
                {/* Estado */}
                <span className="text-sm capitalize text-colors-zinc-500 col-start-2 row-start-2 w-fit">
                  {state}
                </span>
                {/* Valor */}
                <span className="font-medium text-xl w-fit col-start-3 row-start-1 place-self-end">
                  $ {Value}
                </span>
                {/* Porcentaje */}
                {MoneyValue === "+" ? (
                  <span className="text-md text-colors-emerald-500 flex flex-row items-center w-fit col-start-3 place-self-end">
                    <Icon name="ArrowDown" />
                    {Porcentage}
                  </span>
                ) : MoneyValue === "-" ? (
                  <span className="text-md text-colors-red-500 flex flex-row items-center w-fit col-start-3 place-self-end">
                    <Icon name="ArrowDown" />
                    {Porcentage}
                  </span>
                ) : (
                  <span className="text-md text-colors-red-500 flex flex-row items-center w-fit col-start-3 place-self-end">
                    404
                  </span>
                )}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

const RealState = () => {
  return <li className="h-screen w-screen px-4">Real Estate</li>;
};

const CryptoCurrency = () => {
  return <li className="h-screen w-screen px-4">Crypto Currency</li>;
};

export { Shares, RealState, CryptoCurrency, Market };
