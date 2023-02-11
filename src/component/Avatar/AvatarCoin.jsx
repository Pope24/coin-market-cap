import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

const AvatarCoin = ({ ...props }) => {
  const { icon } = props;
  return (
    <div>
      <Space direction="vertical" size={16}>
        <Space wrap size={16}>
          <Avatar src={icon} size="small" icon={<UserOutlined />} />
        </Space>
      </Space>
    </div>
  );
};

export default AvatarCoin;
