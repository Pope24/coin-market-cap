import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Exchange from "./component/Pages/Exchange/Exchange";
import Community from "./component/Pages/Community/Community";
import WatchList from "./component/Pages/WatchList/WatchList";
import DetailCoin from "./component/Pages/DetailCoin/DetailCoin";

const App = () => {
  return (
    <div className="Coin_App">
      <div className="header">
        <Header />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/community" element={<Community />} />
        <Route path="/watch-list" element={<WatchList />} />
        <Route path="/portfolio-tracker" element={<WatchList />} />
        <Route path="/detail-coin/:uuid" element={<DetailCoin />} />
      </Routes>
    </div>
  );
};

export default App;
