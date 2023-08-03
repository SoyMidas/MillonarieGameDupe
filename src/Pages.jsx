import Business from "./Pages/Business";
import Earnings from "./Pages/Earnings";
import Investing from "./Pages/Investing/Investing";
import Items from "./Pages/Items";
import Profile from "./Pages/Profile";
import Market from "./components/Market"

const Page = (props) => {
  

  switch (props.title) {
    case "Earnings":
      return <Earnings />;
    case "Business":
      return <Business />;
    case "Items":
      return <Items />;
    case "Profile":
      return <Profile />;
    case "Investing":
      return <Investing />;
    case "Stock market":
      return <Market />;
    case "My shares":
      return <MyPocket />;
    default:
      return 404;
  }
};

export default Page;
