import Data from "../data/profile";
import Icon from "../Layouts/LayoutIcons";

const List = () => {
  return (
    <div className="w-full h-fit my-6">
      <ul className="w-full h-fit flex flex-col gap-4">
        <li className="rounded-lg p-3 bg-colors-slate-200 h-fit w-full flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <Icon name="Income" />
            <h2 className="font-mono font-medium text-sm">Ganancias/hora</h2>
          </div>
          <p
            className={`
              ${
                Data.TotalMoneyPerHourValue === "+"
                  ? "text-colors-emerald-500"
                  : "text-colors-red-500"
              } font-semibold text-lg
            `}
          >
          {Data.TotalMoneyPerHourValue}$ {Data.TotalMoneyPerHour}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default List;
