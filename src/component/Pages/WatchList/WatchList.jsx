import React from "react";
import Styles from "./WatchList.module.css";
import {
  BellFilled,
  FolderFilled,
  MoneyCollectFilled,
  SignalFilled,
} from "@ant-design/icons";
import { IMAGES } from "../../../image/index";
const WatchList = () => {
  return (
    <div>
      <div className={Styles.Landing__WatchList}>
        <div className={Styles.Left}>
          <p className={Styles.Title__First}>Sign up today and get</p>
          <p className={Styles.Title__Second}>your own crypto Watchlist</p>
          <p className={Styles.Title__Detail__Title}>
            Track your profits and losses. View your portfolio valuation. Do it
            all with our easy-to-use platform.
          </p>
          <button className={Styles.Create__WatchList}>
            Create my own WatchList
          </button>
          <button className={Styles.Login__Btn}>Đăng nhập</button>
        </div>
        <div className={Styles.Right}>
          <img
            src={IMAGES.LANDING_WATCHLIST}
            alt=""
            style={{ objectFit: "cover", width: 100 + "%" }}
          />
        </div>
      </div>
      <div className={Styles.Intro__App}>
        <div className={Styles.Left__Intro}>
          <div className={Styles.Title__Intro__App}>
            <p className={Styles.Title__Intro__App__First}>We're also on</p>
            <b className={Styles.Title__Intro__App__Second}>iOS and Android</b>
            <p className={Styles.Title__Intro__App__Third}>
              Sync between your desktop and the app to access your crypto assets
              on the go
            </p>
          </div>
          <img src={IMAGES.INTRO_APP} alt="" />
        </div>
        <div className={Styles.Right__Intro}>
          <div className={Styles.Col_Left}>
            <div className={Styles.Element__Col}>
              <BellFilled
                style={{ fontSize: 84, color: "#ff775f", marginBottom: 32 }}
              />
              <p className={Styles.Title__Feature}>Instant price alerts</p>
              <p className={Styles.Title__Modifier}>
                Receive timely notifications on major crypto movements
              </p>
            </div>
            <div className={Styles.Element__Col}>
              <FolderFilled
                style={{
                  fontSize: 84,
                  color: "#8aabff",
                  marginBottom: 32,
                  marginTop: 32,
                }}
              />
              <p className={Styles.Title__Feature}>Instant price alerts</p>
              <p className={Styles.Title__Modifier}>
                Receive timely notifications on major crypto movements
              </p>
            </div>
          </div>
          <div className={Styles.Col_Right}>
            <div className={Styles.Element__Col}>
              <MoneyCollectFilled
                style={{
                  fontSize: 84,
                  color: "#23dcf5",
                  marginBottom: 32,
                }}
              />
              <p className={Styles.Title__Feature}>Instant price alerts</p>
              <p className={Styles.Title__Modifier}>
                Receive timely notifications on major crypto movements
              </p>
            </div>
            <div className={Styles.Element__Col}>
              <SignalFilled
                style={{
                  fontSize: 84,
                  color: "#17df94",
                  marginBottom: 32,
                  marginTop: 32,
                }}
              />
              <p className={Styles.Title__Feature}>Instant price alerts</p>
              <p className={Styles.Title__Modifier}>
                Receive timely notifications on major crypto movements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
