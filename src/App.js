import React, { useEffect, useState } from "react";
import "./App.scss";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import BrandsData from "./Brands.json";
import MainContext from "./MainContext";
import Copied from "./components/Copied";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collection from "./components/Collection";

function App() {
  const BrandsArray = [];
  Object.keys(BrandsData).map((key) => {
    BrandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(BrandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    copied,
    setCopied,
    search,
    setSearch,
  };
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [copied]);

  useEffect(() => {
    setBrands(
      BrandsArray.filter((brand) => brand.title.toLowerCase().includes(search))
    );
  }, [search]);

  return (
    <div className="App">
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />

        <Router>

          <Routes>

            <Route path="/" exact element={<Content />}/>
            <Route path="/collection/:slugs"  element={<Collection />}/>

          </Routes>

        </Router>

      </MainContext.Provider>
    </div>
  );
}

export default App;
