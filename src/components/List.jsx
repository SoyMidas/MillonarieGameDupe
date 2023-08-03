import jsonData from "../data/Data";
import Icon from "../Layouts/LayoutIcons";

const List = (i) => {

  return (
        <ul>
          <li
          key={i}
          className="rounded-lg p-3 bg-slate-200 h-fit w-fit flex flex-row justify-between items-center gap-8"
        >
          <div className="flex flex-row gap-2 items-center w-fit h-fit">
            <Icon name="Income" />
            <h2 className="font-mono font-medium text-base">Ganancias/hora</h2>
          </div>
          <span
            className={`
              ${
                jsonData.Personal.Total.Value === "+"
                  ? "text-emerald-500"
                  : "text-red-500"
              } font-semibold text-base
            `}
          >
            {jsonData.Personal.Total.Value}${" "}
            {jsonData.Personal.Total.Quantity}
          </span>
          </li>
        </ul>
  );
};

export default List;
