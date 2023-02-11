import React, { useEffect, useState } from "react";
import Styles from "./TableCoin.module.css";
import StylesHeader from "../Header/Header.module.css";
import { Link } from "react-router-dom";
import { PieChartOutlined, StarOutlined } from "@ant-design/icons";
import Coin from "./CoinComponent/Coin";
import axios from "axios";
// Call API info coin
const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "7d",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "7288783b89msh2f841e64f21bb44p1b2b57jsnbcab43ae3883",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};
const TableCoin = () => {
  // Get data info coin after 7 days from API
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.data.coins);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const [tab, setTab] = useState();
  return (
    <>
      <div className={Styles.List__Select}>
        <div
          className={`${StylesHeader.WatchList} ${StylesHeader.Sub__Search__List}`}
        >
          <Link to="/watch-list" className={StylesHeader.Features__Header}>
            <StarOutlined />
            Danh sách theo dõi
          </Link>
        </div>
        <div
          className={`${StylesHeader.Category} ${StylesHeader.Sub__Search__List}`}
        >
          <Link
            to="/portfolio-tracker"
            className={StylesHeader.Features__Header}
          >
            <PieChartOutlined />
            Danh mục
          </Link>
        </div>
        {/* ========================================================================================== */}
        <p className={Styles.Outline}></p>
        <div
          className={`${StylesHeader.Category} ${StylesHeader.Sub__Search__List}`}
        >
          <Link
            to="/"
            className={`${StylesHeader.Features__Header} ${
              tab === "typeCurrent" ? Styles.Active : ""
            }`}
            onClick={() => {
              setTab("typeCurrent");
            }}
          >
            Các loại tiền điện tử
          </Link>
        </div>
        <div
          className={`${StylesHeader.Category} ${StylesHeader.Sub__Search__List}`}
        >
          <Link
            to="/"
            className={`${StylesHeader.Features__Header} ${
              tab === "category" ? Styles.Active : ""
            }`}
            onClick={() => {
              setTab("category");
            }}
          >
            Phân mục
          </Link>
        </div>
        <div
          className={`${StylesHeader.Category} ${StylesHeader.Sub__Search__List}`}
        >
          <Link
            to="/"
            className={`${StylesHeader.Features__Header} ${
              tab === "decentralized" ? Styles.Active : ""
            }`}
            onClick={() => {
              setTab("decentralized");
            }}
          >
            Tài chính phi tập trung
          </Link>
        </div>
        <div
          className={`${StylesHeader.Category} ${StylesHeader.Sub__Search__List}`}
        >
          <Link
            to="/"
            className={`${StylesHeader.Features__Header} ${
              tab === "NFT" ? Styles.Active : ""
            }`}
            onClick={() => {
              setTab("NFT");
            }}
          >
            NFT
          </Link>
        </div>
        <div
          className={`${StylesHeader.Category} ${StylesHeader.Sub__Search__List}`}
        >
          <Link
            to="/"
            className={`${StylesHeader.Features__Header} ${
              tab === "Metaverse" ? Styles.Active : ""
            }`}
            onClick={() => {
              setTab("Metaverse");
            }}
          >
            Metaverse
          </Link>
        </div>
        <div
          className={`${StylesHeader.Category} ${StylesHeader.Sub__Search__List}`}
        >
          <Link
            to="/"
            className={`${StylesHeader.Features__Header} ${
              tab === "Polkadot" ? Styles.Active : ""
            }`}
            onClick={() => {
              setTab("Polkadot");
            }}
          >
            Polkadot
          </Link>
        </div>
        <div
          className={`${StylesHeader.Category} ${StylesHeader.Sub__Search__List}`}
        >
          <Link
            to="/"
            className={`${StylesHeader.Features__Header} ${
              tab === "BNBChain" ? Styles.Active : ""
            }`}
            onClick={() => {
              setTab("BNBChain");
            }}
          >
            BNB Chain
          </Link>
        </div>
        <div
          className={`${StylesHeader.Category} ${StylesHeader.Sub__Search__List}`}
        >
          <Link
            to="/"
            className={`${StylesHeader.Features__Header} ${
              tab === "Solana" ? Styles.Active : ""
            }`}
            onClick={() => {
              setTab("Solana");
            }}
          >
            Solana
          </Link>
        </div>
        <div
          className={`${StylesHeader.Category} ${StylesHeader.Sub__Search__List}`}
        >
          <Link
            to="/"
            className={`${StylesHeader.Features__Header} ${
              tab === "Alavanche" ? Styles.Active : ""
            }`}
            onClick={() => {
              setTab("Alavanche");
            }}
          >
            Alavanche
          </Link>
        </div>
      </div>
      <div className={Styles.List__Coin}>
        <table className="table" style={{ width: 100 + "%" }}>
          <thead>
            <tr>
              <th></th>
              <th
                scope="col"
                className={Styles.Title_Table}
                style={{ textAlign: "start" }}
              >
                #
              </th>
              <th
                scope="col"
                className={Styles.Title_Table}
                style={{ textAlign: "start" }}
              >
                Tên
              </th>
              <th
                scope="col"
                className={Styles.Title_Table}
                style={{ textAlign: "end" }}
              >
                Giá
              </th>
              <th
                scope="col"
                className={Styles.Title_Table}
                style={{ textAlign: "end" }}
              >
                1h %
              </th>
              <th
                scope="col"
                className={Styles.Title_Table}
                style={{ textAlign: "end" }}
              >
                24h %
              </th>
              <th
                scope="col"
                className={Styles.Title_Table}
                style={{ textAlign: "end" }}
              >
                7h %
              </th>
              <th
                scope="col"
                className={Styles.Title_Table}
                style={{ textAlign: "end" }}
              >
                Vốn hoá thị trường
              </th>
              <th
                scope="col"
                className={Styles.Title_Table}
                style={{ textAlign: "end" }}
              >
                Khối lượng(24h)
              </th>
              <th
                scope="col"
                className={Styles.Title_Table}
                style={{ textAlign: "right" }}
              >
                7 ngày qua
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => {
              return (
                <Coin
                  key={coin.name}
                  uuid={coin.uuid}
                  symbol={coin.symbol}
                  name={coin.name}
                  change={coin.change}
                  color={coin.color}
                  icon={coin.iconUrl}
                  price={coin.price}
                  volume24h={coin["24hVolume"]}
                  rank={coin.rank}
                  sparkline={coin.sparkline}
                  marketcap={coin.marketCap}
                  btcprice={coin.btcPrice}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableCoin;
