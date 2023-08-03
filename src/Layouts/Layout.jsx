import Icon from "../Layouts/LayoutIcons";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const List = [
    { name: "Investing", link: "/investing" },
    { name: "Business", link: "/business" },
    { name: "Earnings", link: "/earnings" },
    { name: "Items", link: "/items" },
    { name: "Profile", link: "/profile" },
  ];

  return (
    <div className="w-screen h-fit ">
      <nav
        className={`
      w-screen h-fit fixed bottom-0 left-0 z-50 
      rounded-t-lg 
      bg-gradient-to-r from-blue-600 to-blue-500
      lg:w-fit lg:h-screen
      lg:rounded-r-lg lg:rounded-l-none
      `}
      >
        <ul
          className={`
            flex flex-row justify-evenly
            h-14

            lg:flex-col lg:place-content-evenly
            lg:w-14 lg:h-full
        `}
        >
          {List.map(({ name, link }, index) => (
            <li
              key={index}
              className="p-4 grid place-content-center aspect-square"
            >
              <Link
                to={link}
                className="grid place-content-center text-black hover:bg-white rounded-full -m-5 transition-all"
              >
                <Icon name={name} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
