import { Typography } from "antd";

import styles from "./Footer.module.css";

const { Text } = Typography;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <Text strong type="secondary">
        @ ALL-RIGHTS RESERVED TO YOFTAHE MERKEBU {year}
      </Text>
    </div>
  );
};

export default Footer;
