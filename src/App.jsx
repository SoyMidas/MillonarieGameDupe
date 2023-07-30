import Layout from './Layouts/Layout';
import React from "react";
import {BrowserRouter as Router, useRoutes} from "react-router-dom";
import Page from './components/Pages'
import 'material-symbols';


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
          element: <Page title="Stock market" />,
        },
        {
          path: "investing/my_shares",
          element: <Page title="My shares" />,
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
