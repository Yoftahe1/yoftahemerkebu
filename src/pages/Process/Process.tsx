import { Typography } from "antd";

import processArray from "../../constants/processArray";

import styles from "./Process.module.css";

const { Title, Text } = Typography;

const Process = () => {
  return (
    <div className={styles.process} id="Process">
      <Title level={3} className={styles.title}>
        Process
      </Title>
      <Title className={styles.subtitle}>My Working Process</Title>
      <div className={styles.container}>
        {processArray.map((process, index) => (
          <div key={index} className={styles.processCard}>
            <div className={styles.border}>
              <div className={styles.icon}>{process.icon}</div>
            </div>
            <Text strong>{process.title}</Text>
            <Text type="secondary" className={styles.desc}>
              {process.desc}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
