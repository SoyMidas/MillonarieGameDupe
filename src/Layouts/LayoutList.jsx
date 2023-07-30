import Icon from "../Layouts/LayoutIcons";
import {PersonalData, GameData} from "../data/Data";

const List = (props) => {
  return (
    <div className="px-8 pt-10 flex flex-col justify-center gap-3 w-screen h-full lg:w-[35vw]">
      <div className="flex flex-row items-center gap-2">
        <span className="lg:hidden grid place-content-center"><Icon name="ArrowLeft" /></span>
        <h1 className="h-fit w-fit text-3xl font-bold drop-shadow-md">
          {props.name}
        </h1>
      </div>
      <div className="flex flex-row gap-3 overflow-x-auto h-fit py-5">
        {props.Array.map((name, id) => (
          <div
            key={id}
            className="bg-colors-zinc-300 rounded-full font-semibold text-md h-max min-w-max py-2 px-6 lg:px-10 xl:px-20 text-colors-black cursor-pointer"
          >
            {name}
          </div>
        ))}
      </div>
      <ul className="flex flex-col gap-3 overflow-y-auto h-full">
        {GameData.SharesStockBrandsList.map(
          ({ id, name, state, MoneyValue, Porcentage, Value }, index) => {
            return (
              <li
                key={index}
                className={`
                items-center grid grid-cols-[4vw,_1fr,_max-content] gap-x-2 grid-rows-2 
                rounded-lg 
                bg-gradient-to-r from-colors-zinc-200 from-80% 
                shadow-md 
                w-full h-fit p-3 
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
                <span className="col-span-2 min-w-min max-w-max font-medium text-3xl col-start-2 row-start-1 text-left">
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

export default List;
