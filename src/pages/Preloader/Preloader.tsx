import { motion, Variants } from "framer-motion";

import styles from "./Preloader.module.css";

const preloaderVariants: Variants = {
  hidden: { y: 0 },
  visible: {
    y: "-100vh",
    transition: {
      type: "spring",
      delay: 2.5,
      duration: 1,
      staggerChildren: 0.4,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" },
  },
};

const circle1Variants: Variants = {
  hidden: { width: 0, height: 0 },
  visible: {
    width: 1200,
    height: 1200,
    transition: { type: "spring" },
  },
};

const circle2Variants: Variants = {
    hidden: { width: 0, height: 0 },
    visible: {
      width: 300,
      height: 300,
      transition: { type: "spring" },
    },
  };
  const circle3Variants: Variants = {
    hidden: { width: 0, height: 0 },
    visible: {
      width: 400,
      height: 400,
      transition: { type: "spring" },
    },
  };
const Preloader = () => {
  return (
    <motion.div
      variants={preloaderVariants}
      initial="hidden"
      animate="visible"
      className={styles.preloader}
    >
      <motion.div
        variants={circle1Variants}
        className={styles.circle1}
      ></motion.div>
      <motion.div
        variants={circle2Variants}
        className={styles.circle2}
      ></motion.div>
            <motion.div
        variants={circle3Variants}
        className={styles.circle3}
      ></motion.div>
      <motion.p variants={titleVariants} className={styles.title}>
        Website
      </motion.p>
      <motion.p variants={titleVariants} className={styles.title}>
        Application
      </motion.p>
      <motion.p variants={titleVariants} className={styles.title}>
        Developer
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
