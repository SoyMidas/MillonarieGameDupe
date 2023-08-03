import Icon from "../Layouts/LayoutIcons";
import jsonData from "../data/Data.json";

const List = (props) => {
  const { type } = props; // Destructure the "type" prop

  // Make sure "jsonData.Game" exists and has "type" as a property
  if (!jsonData.Game || !jsonData.Game[type]) {
    return null; // Or render some fallback content or an error message
  }

  const gameData = jsonData.Game[type];

  return (
    <ul className="w-full h-full flex flex-col gap-4 overflow-auto lg:pb-40 pb-12">
      {Object.entries(gameData).map(([id, brandData], index) => (
        <li
          key={index}
          className={`
            items-center grid grid-cols-[auto_1fr_max-content] gap-x-4 grid-rows-2
            rounded-lg  
            bg-gradient-to-r from-zinc-200 from-80% 
            shadow-md 
            w-full h-fit p-3
            ${
              brandData.Money.Value === "+"
                ? "to-green-300"
                : brandData.Money.Value === "-"
                ? "to-red-300"
                : "text-slate-300"
            }`}
        >
          {/* Icono */}
          <span className="row-span-2 col-span-1 row-start-1 w-fit p-1 aspect-square">
            <Icon name={id} />
          </span>

          {/* Nombre */}
          <h2 className="self-end col-span-2 w-full font-medium lg:font-semibold lg:text-xl text-xs col-start-2 row-start-1 text-left overflow-ellipsis">
            {brandData.name} {/* Access name from brandData */}
          </h2>
          {/* Estado */}
          <span className="text-sm capitalize text-zinc-500 col-start-2 row-start-2 w-fit self-start">
            {brandData.state} {/* Access state from brandData */}
          </span>
          {/* Valor */}
          <span className="font-medium text-xl w-fit col-start-3 row-start-1 self-end">
            $ {brandData.Money.Quantity} {/* Access Value from brandData */}
          </span>
          {/* Porcentaje */}
          {brandData.Money.Value === "+" ? (
            <span className="text-md text-emerald-500 flex flex-row items-center w-fit col-start-3 place-self-start">
              <Icon name="ArrowDown" />
              {brandData.Money.Porcentage} {/* Access Porcentage from brandData */}
            </span>
          ) : brandData.Money.Value === "-" ? (
            <span className="text-md text-red-500 flex flex-row items-center w-fit col-start-3 place-self-start">
              <Icon name="ArrowDown" />
              {brandData.Money.Porcentage} {/* Access Porcentage from brandData */}
            </span>
          ) : (
            <span className="text-md text-red-500 flex flex-row items-center w-fit col-start-3 place-self-start">
              404
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
