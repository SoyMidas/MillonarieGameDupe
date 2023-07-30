import Card from '../components/Card';
import List from '../components/List';

const Investing = () => {
  return (
    <div className="flex flex-col h-screen w-screen p-10 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-screen h-auto absolute rotate-180 top-0 z-0"
      >
        <path
          fill="#0099ff"
          d="M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <Card Name="Midas Wolf" />
      <List />
    </div>
  );
};

export default Investing;