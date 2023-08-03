import Card from "../components/Card";
import Item from "../components/List";

const Investing = () => {
  return (
    <div className="h-screen w-screen grid lg:items-center justify-center mt-10 lg:mt-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-screen absolute rotate-180 top-0 z-0"
      >
        <path
          fill="#0099ff"
          d="M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div className="[&>span]:z-10 flex flex-col lg:flex-row lg:gap-4 items-center h-fit lg:ml-20 lg:mr-5 gap-6">
        <span className="lg:h-[17rem] h-[10rem] aspect-video min-w-fit min-h-fit">
          <Card Name="Midas Wolf" />
        </span>

        <ul className="lg:h-[17rem] w-full h-full gap-3 flex flex-col lg:flex-row flex-wrap z-10">
          <Item />
        </ul>
      </div>
    </div>
  );
};

export default Investing;
