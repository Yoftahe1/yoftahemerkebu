import styles from "./Landing.module.css";
import person from "../../assets/person.png";
import { Link } from "react-scroll";
import { Typography } from "antd";

const { Title, Text } = Typography;

const Landing = () => {
  return (
    <div className={styles.landing} id="Home">
      <div className={styles.container}>
        <div className={styles.description}>
          <Text strong className={styles.subtitle}>
            Get The Best Solution For Your Problem
          </Text>
          <Title className={styles.title}>
            Design Website & Application
            <br /> To Attract Customers To Your
            <br />
            <span>Brand, Product.</span>
          </Title>
          <Text strong>
            A visionary at turning your imagination into extraordinary reality.
          </Text>
          <div className={styles.buttons}>
            <Link
              className={styles.button}
              to="Contact-Me"
              smooth
              duration={1000}
              offset={-60}
            >
              Contact Me
            </Link>

          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.circle}>
            <div className={styles.circle1}>
              <div className={styles.circle2}></div>
            </div>
          </div>
          <div className={styles.img}>
            <div className={styles.intro}>👋 it's Yoftahe</div>
            <img src={person} alt="person" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
