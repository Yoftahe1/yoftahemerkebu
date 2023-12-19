import { useEffect } from "react";

import { Typography } from "antd";
import { useInView } from "react-intersection-observer";
import { motion, Variants, useAnimation } from "framer-motion";

import skillsArray from "../../constants/skillsArray";

import styles from "./Skills.module.css";

const { Text } = Typography;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, ease: "easeInOut" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
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
      className={styles.skills}
    >
      {skillsArray.map((skillData, index) => (
        <Skill key={index} {...skillData} />
      ))}
    </motion.div>
  );
};

export default Skills;

interface skillDataProp {
  image: string;
  title: string;
}

const Skill: React.FC<skillDataProp> = ({ image, title }) => {
  return (
    <motion.div variants={itemVariants} className={styles.skill}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} />
      </div>
      <Text strong>{title}</Text>
    </motion.div>
  );
};
