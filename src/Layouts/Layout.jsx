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
    <div className="w-screen h-fit">
      <nav className={`
      w-screen h-fit fixed bottom-0 left-0 z-50 
      rounded-lg rounded-b-none 
      bg-gradient-to-r from-colors-blue-600 to-colors-blue-500
      `}>
        <ul
          className={`
            flex flex-row justify-around
            h-14 
        `}
        >
          {List.map(({ name, link }, index) => (
            <li
              key={index}
              className="p-4 grid place-content-center aspect-square"
            >
              <Link to={link} className="grid place-content-center text-colors-black hover:bg-colors-white rounded-full -m-5 transition-all">
                <Icon name={name}/>
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
