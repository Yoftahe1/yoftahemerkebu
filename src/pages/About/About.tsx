import { useEffect } from "react";

import { Typography } from "antd";
import { motion, Variants, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import aboutArray from "../../constants/aboutArray";

import styles from "./About.module.css";

const { Title, Text } = Typography;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.about} id="About-Me">
      <Title level={3} className={styles.title}>
        About-me
      </Title>
      <Title className={styles.subtitle}>
        I Know That Good Design Means Good Business
      </Title>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className={styles.container}
      >
        {aboutArray.map((about, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={styles.aboutCard}
          >
            <img src={about.image} className={styles.image} />
            <Text strong>{about.title}</Text>
            <Text type="secondary" className={styles.desc}>
              {about.desc}
            </Text>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
