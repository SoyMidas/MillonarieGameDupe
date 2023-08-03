import Layout from "./Layouts/Layout";
import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Page from "./Pages";
import "material-symbols";
import MyInteractions from "./components/MyInteractions";
import Market from "./components/Market";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "investing",
          element: <Page title="Investing" />,
        },
        {
          path: "business",
          element: <Page title="Business" />,
        },
        {
          path: "earnings",
          element: <Page title="Earnings" />,
        },
        {
          path: "items",
          element: <Page title="Items" />,
        },
        {
          path: "profile",
          element: <Page title="Profile" />,
        },
        {
          path: "investing/stock_market",
          element: (
            <div className="m-6">
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
            </div>
          ),
        },
        {
          path: "investing/my_shares",
          element: (
            <div className="m-6">
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
            </div>
          ),
        },
        {
          path: "investing/*",
          element: <h2>Invalid Subpage for Investing</h2>,
        },
      ],
    },
    { path: "*", element: <h2>Page Not Found</h2> },
  ]);

  return element;
}

export default App;
