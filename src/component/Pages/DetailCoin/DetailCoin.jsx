import React, { useEffect, useState } from "react";
import Styles from "./DetailCoin.module.css";
import { useParams } from "react-router-dom";
import { Avatar } from "antd";
import axios from "axios";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const DetailCoin = () => {
  const { uuid } = useParams();
  const [data, setData] = useState({});
  const [overview, setOverview] = useState();
  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${uuid}`,
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "30d" },
    headers: {
      "X-RapidAPI-Key": "7288783b89msh2f841e64f21bb44p1b2b57jsnbcab43ae3883",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.data.coin);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [uuid]);
  const dataChartCoin =
    data.sparkline != undefined &&
    data.sparkline.map((x) => ({ Volume: parseFloat(x).toFixed(2) }));
  console.log(data);
  return (
    <div className={Styles.Detail__Coin}>
      <div className={Styles.Header__Detail__Coin}>
        <div className={Styles.Coin}>
          <Avatar src={data.iconUrl} />
          <h1 className={`${Styles.Name__Coin} ${Styles.MarginLeft__10}`}>
            {data.name}
          </h1>
          <div
            className={`${Styles.Hero__Coin__Symbol} ${Styles.MarginLeft__10}`}
          >
            {data.symbol}
            <span className={Styles.Hero__Coin__Rank}> #{data.rank}</span>
          </div>
          <p className={`${Styles.Price__Coin} ${Styles.MarginLeft__10}`}>
            $ {parseFloat(data.price).toFixed(2)}
          </p>
        </div>
        <div className={Styles.Overview}>
          <p
            className={`${Styles.Tab__Links} ${
              overview === "Overview" ? Styles.Active__Tab__Links : ""
            }`}
            onClick={() => {
              setOverview("Overview");
            }}
          >
            Overview
          </p>
          <p
            className={`${Styles.Tab__Links} ${
              overview === "Exchanges" ? Styles.Active__Tab__Links : ""
            }`}
            onClick={() => {
              setOverview("Exchanges");
            }}
          >
            Exchanges
          </p>
          <p
            className={`${Styles.Tab__Links} ${
              overview === "Markets" ? Styles.Active__Tab__Links : ""
            }`}
            onClick={() => {
              setOverview("Markets");
            }}
          >
            Markets
          </p>
        </div>
      </div>
      <div className={Styles.Container__Detail__Coin}>
        {dataChartCoin ? (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={dataChartCoin}>
              <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                  <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <Area dataKey="Volume" stroke="#2451B7" fill="url(#color)" />
              <XAxis dataKey="Volume" />
              <Tooltip />
              <CartesianGrid opacity={0.4} vertical={false} />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          ""
        )}
        {dataChartCoin ? (
          <div className={Styles.Description__Coin}>
            <div
              className={Styles.Description}
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
            <div className={Styles.Link__Description}>
              <table
                class="table"
                style={{
                  width: "100%",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <thead>
                  <tr className={Styles.Border__Table}>
                    <th
                      scope="col"
                      className={`${Styles.Text__Align__Left} ${Styles.Title__Link}`}
                    >
                      <h3>Links</h3>
                    </th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {data.links.map((link) => {
                    return (
                      <tr className={Styles.Border__Table}>
                        <th
                          scope="row"
                          className={`${Styles.Text__Align__Left} ${Styles.Type__Link}`}
                        >
                          {link.type}
                        </th>
                        <td
                          className={`${Styles.Text__Align__Right} ${Styles.Path__Link}`}
                        >
                          {link.name}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DetailCoin;
