import "./App.css";
import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout data={siteData} />}>
          <Route index element={<Home data={siteData.home} />} />
          <Route path="about" element={<About data={siteData.about} />} />
          <Route path="menu" element={<Menu data={siteData.menu} />} />
          <Route path="gallery" element={<Gallery data={siteData.gallery} />} />
          <Route path="contact" element={<Contact data={siteData.contact} />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
