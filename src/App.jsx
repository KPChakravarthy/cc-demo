import "./App.css";
import React from 'react';
import { RouterProvider, createHashRouter } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Menu from "./components/Menu";

function App() {
  const [siteData, setSiteData] = React.useState({})
  React.useEffect(() => {
    fetch("https://gist.githubusercontent.com/KPChakravarthy/96bfc84fa48977463704b33a165b439a/raw/data.json").then(res => res.json())
      .then(r => {
        setSiteData(r)
      })
      .catch((error) => {
        console.log('Error during fetch: ' + error.message);
    });
  }, [])

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout data={siteData} />,
      children: [
        {
          path: "",
          element: <Home data={siteData.home} />,
        },
        {
          path: "about",
          element: <About data={siteData.about} />,
        },
        {
          path: "menu",
          element: <Menu data={siteData.menu} />,
        },
        {
          path: "gallery",
          element: <Gallery data={siteData.gallery} />,
        },
        {
          path: "contact",
          element: <Contact data={siteData.contact} />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
