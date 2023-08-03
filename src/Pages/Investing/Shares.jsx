import Card from "../../components/PortfolioCard";
import Button from "../../components/Button";
import Market from "../../components/Market";
import MyInteractions from "../../components/MyInteractions";

const Shares = () => {
  return (
    <li>
      <Card id="shares" title="Shares"/>
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
          type="Brands"
          filters={[
            "Highest dividend",
            "Lowest dividend",
            "Cheap first",
            "Expensive first",
            "Highest capitalization",
            "Lowest capitalization",
          ]}
        />
        <MyInteractions
          name="My Shares"
          type="Brands"
          filters={[
            "Highest dividend",
            "Lowest dividend",
            "Cheap first",
            "Expensive first",
            "Highest capitalization",
            "Lowest capitalization",
          ]}
        />
      </ul>
    </li>
  );
};

export default Shares;
