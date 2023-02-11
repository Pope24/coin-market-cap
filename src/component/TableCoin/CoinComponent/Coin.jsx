import React, { useState } from "react";
import Styles from "./Coin.module.css";
import { Link } from "react-router-dom";
import {
  StarOutlined,
  StarFilled,
  CaretDownOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import AvatarCoin from "../../Avatar/AvatarCoin";
const Coin = ({ ...props }) => {
  const [statusCoin, setStatusCoin] = useState(false);
  const handleActiveCoin = () => {
    setStatusCoin(!statusCoin);
  };
  const {
    key,
    uuid,
    symbol,
    name,
    change,
    color,
    icon,
    price,
    volume24h,
    rank,
    sparkline,
    marketcap,
    btcprice,
  } = props;
  const dataChart = sparkline.map((x) => ({ pv: x }));
  return (
    <>
      <tr className={Styles.Coin}>
        <td
          className={statusCoin ? Styles.Active : Styles.Cursor__pointer}
          onClick={handleActiveCoin}
        >
          {statusCoin ? <StarFilled /> : <StarOutlined />}
        </td>
        <th scope="row" style={{ textAlign: "start" }}>
          {rank}
        </th>
        <td>
          <Link
            to={`/detail-coin/${uuid}`}
            style={{
              display: "flex",
              height: 80 + "px",
              alignItems: "center",
              textAlign: "start",
              textDecoration: "none",
              color: "#222531",
            }}
          >
            <AvatarCoin icon={icon} />
            &nbsp; {name}
            <span className={Styles.Symbol__coin}>{symbol}</span>
          </Link>
        </td>
        <td style={{ textAlign: "end" }}>{price}</td>
        <td
          className={change > 0 ? Styles.Color__green : Styles.Color__red}
          style={{ textAlign: "end" }}
        >
          {change > 0 ? <CaretUpOutlined /> : <CaretDownOutlined />}
          {change}%
        </td>
        <td
          className={change > 0 ? Styles.Color__green : Styles.Color__red}
          style={{ textAlign: "end" }}
        >
          {change > 0 ? <CaretUpOutlined /> : <CaretDownOutlined />}
          {change}%
        </td>
        <td
          className={change > 0 ? Styles.Color__green : Styles.Color__red}
          style={{ textAlign: "end" }}
        >
          {change > 0 ? <CaretUpOutlined /> : <CaretDownOutlined />}
          {change}%
        </td>
        <td style={{ textAlign: "end" }}>{marketcap}</td>
        <td style={{ textAlign: "end" }}>{volume24h}</td>
        <td
          style={{
            textAlign: "end",
          }}
        >
          <AreaChart width={170} height={40} data={dataChart}>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <defs>
              <linearGradient
                id="splitColor"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              ></linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#000"
              fill={change > 0 ? "green" : "red"}
            />
          </AreaChart>
        </td>
      </tr>
    </>
  );
};

export default Coin;
