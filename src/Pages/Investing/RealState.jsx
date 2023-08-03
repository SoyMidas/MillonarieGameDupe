import Card from "../../components/PortfolioCard";
import Button from './../../components/Button';
import MyInteractions from './../../components/MyInteractions';
import Market from './../../components/Market';

const RealState = () => {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/6435228/pexels-photo-6435228.jpeg";

  const style = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
  };

  return (
    <li className="relative -top-40 h-screen w-screen pt-40" style={style}>
      <Card id="realstate" title="Real State" />
      <ul className="flex flex-col gap-6 lg:hidden w-full items-center">
        <Button size="base" bg="blue" to="stock_market">
          Stock market
        </Button>
        <Button size="base" bg="gray" to="my_shares">
          My shares
        </Button>
      </ul>
      <ul
        className={`
        hidden lg:flex flex-row h-full w-[70vw] gap-4 
        [&>div]:flex [&>div]:gap-3 [&>div]:flex-col [&>div]:w-full
        `}
      >
        <Market
          name="Shares Market"
          type="Houses"
          filters={[
            "Highest dividend",
            "Lowest dividend",
            "Cheap first",
            "Expensive first",
            "Highest capitalization",
            "Lowest capitalization"
          ]}
        />
        <MyInteractions
          name="My Shares"
          type="Houses"
          filters={[
            "Highest dividend",
            "Lowest dividend",
            "Cheap first",
            "Expensive first",
            "Highest capitalization",
            "Lowest capitalization"
          ]}
        />
      </ul>
    </li>
  );
};

export default RealState;
