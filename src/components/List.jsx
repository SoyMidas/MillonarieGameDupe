import {PersonalData, GameData} from "../data/Data";
import Icon from "../Layouts/LayoutIcons";

const List = () => {
  return (
    <div className="w-full h-fit my-6">
      <ul className="w-full h-fit flex flex-col gap-4 lg:grid grid-cols-4 grid-rows-4 grid-flow-row lg:h-72 lg:w-max">
        <li className="rounded-lg p-3 bg-colors-slate-200 h-[1fr] w-full flex flex-row justify-between items-center gap-3">
          <div className="flex flex-row gap-2 items-center">
            <Icon name="Income" />
            <h2 className="font-mono font-medium text-sm">Ganancias/hora</h2>
          </div>
          <span
            className={`
              ${
                PersonalData.TotalMoneyPerHourValue === "+"
                  ? "text-colors-emerald-500"
                  : "text-colors-red-500"
              } font-semibold text-lg
            `}
          >
          {PersonalData.TotalMoneyPerHourValue}$ {PersonalData.TotalMoneyPerHour}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default List;