import { Typography } from "antd";
import { Link } from "react-scroll";

import linkArray from "../../constants/linkArray";
import { useScroll } from "../../hooks/useScroll";

import styles from "./Header.module.css";

const { Title } = Typography;
const Header = () => {
  const scrolled=useScroll();
  return (
    <div className={scrolled?`${styles.shadow} ${styles.header}`:styles.header}>
      <Title level={4} className={styles.logo}>
        Yoftahe Merkebu
      </Title>
      <div className={styles.links}>
        {linkArray.map((element, index) => {
          return (
            <Link
              key={index}
              to={element.text}
              smooth
              duration={500}
              spy={true}
              activeClass={styles.active}
              offset={-60}
            >
              <p className={styles.text}>{element.text}</p>
              <p className={styles.icon}>{element.icon}</p>
              <div className={styles.hover}></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
