import { useEffect } from "react";

import { Timeline, Typography } from "antd";
import { useInView } from "react-intersection-observer";
import { motion, Variants, useAnimation } from "framer-motion";

import expArray from "../../constants/expArray";

import styles from "./Exp.module.css";

const { Title, Text } = Typography;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4, ease: "easeInOut" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Exp = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <Timeline
        items={expArray.map((exp) => {
          return {
            children: (
              <motion.div variants={itemVariants}>
                <Title level={5}>{exp.company}</Title>
                <Text type="secondary">{exp.date}</Text>
                <div className={styles.desc}>
                  <Text>{exp.description}</Text>
                </div>
              </motion.div>
            ),
          };
        })}
      />
    </motion.div>
  );
};

export default Exp;
