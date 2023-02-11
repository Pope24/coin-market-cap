import React, { useState } from "react";
import ToggleButton from "../Button/Toggle/ToggleButton";
import TableCoin from "../TableCoin/TableCoin";
import Styles from "./Home.module.css";
const READMORE =
  "Tổng khối lượng giao dịch tiền điện tử trên thị trường trong 24 giờ qua là ₫1757.66T, tức tăng 14.43%. Tổng khối lượng giao dịch DeFi hiện tại là ₫186.00T, chiếm 10.58% tổng khối lượng giao dịch tiền điện tử trong 24 giờ. Khối lượng giao dịch của tất cả đồng tiền ổn định là ₫1460.58T, chiếm 83.10% tổng khối lượng giao dịch tiền điện tử trong 24 giờ. Sự thống trị của Bitcoin hiện là 41.41%, tăng 0.17% so với hôm trước.";
const Home = () => {
  const [readMore, setReadMore] = useState(false);
  const show = () => {
    setReadMore(!readMore);
  };
  return (
    <>
      <div className={Styles.Container__Home}>
        <div className={Styles.Title__Container} style={{ flex: 1 }}>
          <p className={Styles.Title__Main}>
            Top 100 Các loại tiền điện tử theo vốn hóa thị trường
          </p>
          <div className={Styles.Modifier}>
            Vốn hóa thị trường tiền điện tử toàn cầu là ₫24060.74T, giảm 3.97%
            {"  "}
            <span className={Styles.Read__More} onClick={show}>
              {readMore ? "Ẩn bớt" : "Đọc thêm"}
            </span>
            <div className={Styles.Modifier__Info}>
              {readMore ? <p>{READMORE}</p> : ""}
            </div>
          </div>
        </div>
        <div
          className={Styles.Toggle__Highlight}
          style={{
            width: 130,
            display: "flex",
            justifyContent: "right",
            marginTop: 20,
          }}
        >
          <span className={Styles.Highlight}>Highlight</span>
          <ToggleButton />
        </div>
      </div>
      <div className={Styles.Table__Coin}>
        <TableCoin />
      </div>
    </>
  );
};

export default Home;
