import Icon from "../Layouts/LayoutIcons";

const LargeButton = (props) => {
  switch(props.color) {
    default:
      return (
        <>
          <button className={`
          border-0
          w-full h-fit p-4
          text-colors-white bg-gradient-to-r from-colors-blue-600 to-colors-blue-500
          text-sm font-light flex justify-between rounded-lg
          shadow-md shadow-colors-blue-600/50 
          hover:text-colors-zinc-200 hover:cursor-pointer hover:from-colors-blue-500 hover:to-colors-blue-400
          `}
          >
            <div className="flex items-center gap-2">
            <Icon name={props.text}></Icon>
            {props.text}
            </div>
            <Icon name="ArrowRight" />
          </button>
        </>
      );
    case "gray":
      return (
        <>
          <button className={`
          border-0
          w-full h-fit p-4
          text-colors-white bg-gradient-to-r from-colors-gray-600 to-colors-gray-500
          text-sm font-light flex justify-between rounded-lg
          shadow-md shadow-colors-gray-600/50 
          hover:text-colors-zinc-200 hover:cursor-pointer hover:from-colors-gray-500 hover:to-colors-gray-400
          `}
          >
            <div className="flex items-center gap-2">
            <Icon name={props.text}></Icon>
            {props.text}
            </div>
            <Icon name="ArrowRight" />
          </button>
        </>
      );
  }
};


const SmallButton = (props) => (
  <button
    className="text-base text-colors-zinc-100 hover:text-colors-zinc-200 bg-gradient-to-r from-colors-blue-800 to-colors-blue-600 hover:shadow lg:w-[20vw]"
    onClick={props.onClick}
  >
    {props.name}
  </button>
);



export default SmallButton;
export {SmallButton, LargeButton};