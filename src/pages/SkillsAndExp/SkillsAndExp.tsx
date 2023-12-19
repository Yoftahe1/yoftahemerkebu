import { Typography } from "antd";

import Exp from "../../components/Exp/Exp";
import Skills from "../../components/Skills/Skills";

import styles from "./SkillsAndExp.module.css";

const { Title } = Typography;

const SkillsAndExp = () => {
  return (
    <div className={styles.skillsAndExp} id="Skills">
      <Title level={3} className={styles.title}>
        skills
      </Title>
      <Title className={styles.subtitle}>Skills & Experiences</Title>
      <div className={styles.container}>
        <div className={styles.skills}>
          <Skills />
        </div>
        <div className={styles.exp}>
          <Exp/>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndExp;

