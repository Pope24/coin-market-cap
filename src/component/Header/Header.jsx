import React from "react";
import { Avatar, Space, Input } from "antd";
import { Link } from "react-router-dom";
import {
  StarOutlined,
  PieChartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Styles from "./Header.module.css";
import { IMAGES } from "../../image";

const Header = () => {
  return (
    <div className={Styles.Header__Container}>
      <div className={Styles.Left}>
        <div className="logo-container">
          <Link to="/">
            <Avatar src={IMAGES.LOGO} className={Styles.Avatar} />
          </Link>
        </div>
        <div className={`${Styles.Menu__Features} ${Styles.Right}`}>
          <div>
            <Link to="/" className={Styles.Features__Header}>
              Các loại tiền điện tử
            </Link>
          </div>
          <div>
            <Link className={Styles.Features__Header} to="/exchange">
              Trao đổi
            </Link>
          </div>
          <div>
            <Link className={Styles.Features__Header} to="/community">
              Cộng đồng
            </Link>
          </div>
          <div>
            <Link className={Styles.Features__Header} to="/">
              Sản phẩm
            </Link>
          </div>
          <div>
            <Link className={Styles.Features__Header} to="/">
              Học hỏi
            </Link>
          </div>
        </div>
      </div>
      <div className={`${Styles.Search__List} ${Styles.Right}`}>
        <div className={`${Styles.WatchList} ${Styles.Sub__Search__List}`}>
          <Link to="/watch-list" className={Styles.Features__Header}>
            <StarOutlined />
            Danh sách theo dõi
          </Link>
        </div>
        <div className={`${Styles.Category} ${Styles.Sub__Search__List}`}>
          <Link to="/portfolio-tracker" className={Styles.Features__Header}>
            <PieChartOutlined />
            Danh mục
          </Link>
        </div>
        <div className={`${Styles.Search} ${Styles.Sub__Search__List}`}>
          <Space direction="vertical">
            <Input addonAfter={<SearchOutlined />} />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Header;
