import Icon from "../Layouts/LayoutIcons";
import Data from "../data/profile";

const Card = (props) => {
  const DataMoneyPocketStock = Data[props.title + "MoneyPocketStock"];
  const DataMoneyStockPerHour = Data[props.title + "MoneyStockPerHour"];
  const DataMoneyStockPerHourValue =
    Data[props.title + "MoneyStockPerHourValue"];

  return (
    <div className="shadow-lg shadow-colors-blue-800/20 overflow-clip rounded-lg flex flex-col grid-3 bg-colors-blue-200/30">
      <div className="bg-colors-blue-600 p-2 flex flex-row gap-1 text-colors-white">
        <Icon name="portfolio" />
        <h3>My stock portafolio</h3>
      </div>
      <div className="flex flex-col grid-1 p-4">
        <h4 className="text-sm font-light">Pocket</h4>
        <p className="text-lg font-semibold">$ {DataMoneyPocketStock}</p>
        <p
          className={`
            text-base font-medium
            ${
              DataMoneyStockPerHourValue === "+"
                ? "text-colors-emerald-500"
                : DataMoneyStockPerHourValue === "-"
                ? "text-colors-red-500"
                : "text-colors-slate-500"
            }
        `}
        >
          {DataMoneyStockPerHourValue}$ {DataMoneyStockPerHour}
        </p>
      </div>
      <div className="flex flex-col grid-1 p-4">
        <h4 className="text-sm font-light">Estimated yield per hour</h4>
        <p className="text-lg font-semibold">$ {Data.SharesMoneyPortfolio}</p>
      </div>
    </div>
  );
};

export default Card;
