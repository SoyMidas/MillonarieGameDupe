import Card from "../components/PortfolioCard";
import { LargeButton } from "../components/Button";
import { Link } from "react-router-dom";
import List from "../Layouts/LayoutList";

const Market = () => {
  return (
    <>
      <List
        Array={[
          "Highest dividend",
          "Lowest dividend",
          "Cheap first",
          "Expensive first",
          "Highest capitalization",
          "Lowest capitalization",
        ]}
        name="Stock market"
      />
    </>
  );
};

const MyPocket = () => {
  return (
    <>
      <List
        Array={[
          "Highest dividend",
          "Lowest dividend",
          "Cheap first",
          "Expensive first",
          "Highest capitalization",
          "Lowest capitalization",
        ]}
        name="My stocks"
      />
    </>
  );
};

const Shares = () => {
  return (
    <li className="h-full w-full flex flex-col gap-4 px-4 lg:flex-row">
      <Card title="Shares" />
      <div className="flex flex-col gap-2 lg:hidden">
        <Link to="stock_market">
          <LargeButton text="Stock market" color="blue" />
        </Link>
        <Link to="my_shares">
          <LargeButton text="My shares" color="gray" />
        </Link>
      </div>
      <div className="hidden lg:flex flex-row h-full">
        <Market />
        <MyPocket />
      </div>
    </li>
  );
};

const RealState = () => {
  return <li className="h-screen w-screen px-4">Real Estate</li>;
};

const CryptoCurrency = () => {
  return <li className="h-screen w-screen px-4">Crypto Currency</li>;
};

export { Shares, RealState, CryptoCurrency, Market };
