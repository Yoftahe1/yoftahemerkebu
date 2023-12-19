import { useState } from "react";

import { SiGithub } from "react-icons/si";
import { ScaleLoader } from "react-spinners";
import { AiOutlineEye } from "react-icons/ai";
import { IoMdRefresh } from "react-icons/io";
import { Select, Space, Typography } from "antd";
import { useAnimation, motion } from "framer-motion";

import useProjects from "../../hooks/useProjects";

import styles from "./Projects.module.css";

const { Text, Title } = Typography;

const buttons = ["All", "React Js", "Next Js", "React Native", "Flutter"];

const Projects = () => {
  const controls = useAnimation();
  const [selected, setSelected] = useState("All");
  const { isLoading, projects, getProjects } = useProjects();

  const handleFilter = async (filter: string) => {
    // Trigger fade-out animation
    await controls.start({ y: 50, opacity: 0, transition: { duration: 0.5 } });

    // Set the selected filter for the next animation
    setSelected(filter);

    // Trigger fade-in animation for the selected component
    controls.start({ y: 0, opacity: 1, transition: { duration: 0.5 } });
  };

  let filteredProjects = projects;
  if (selected !== "All") {
    filteredProjects = projects.filter(
      (project) => project.madeWith === selected
    );
  }

  const Loader = (
    <div className={styles.loading}>
      <ScaleLoader color="#701bf8" height={50} width={10} />
    </div>
  );

  const refresher = (
    <div className={styles.refresh} onClick={getProjects}>
      <IoMdRefresh size={40} />
    </div>
  );

  return (
    <div className={styles.projects} id="Projects">
      <Title level={3} className={styles.title}>
        Projects
      </Title>
      <Title className={styles.subtitle}>My Creative Project Section</Title>
      <div className={styles.filterButtons}>
        {buttons.map((button, index) => {
          return (
            <button
              key={index}
              onClick={() => handleFilter(button)}
              className={
                selected === button
                  ? `${styles.filterButton} ${styles.activeButton}`
                  : styles.filterButton
              }
            >
              {button}
            </button>
          );
        })}
      </div>
      <div className={styles.selectContainer}>
        <Select
          defaultValue="All"
          className={styles.select}
          onChange={(value: string) => handleFilter(value)}
          options={[
            { value: "All", label: "All" },
            { value: "React Js", label: "React Js" },
            { value: "Next Js", label: "Next Js" },
            { value: "React Native", label: "React Native" },
            { value: "Flutter", label: "Flutter" },
          ]}
        />
      </div>
      {isLoading ? (
        Loader
      ) : projects.length === 0 ? (
        refresher
      ) : (
        <motion.div animate={controls} className={styles.container}>
          {filteredProjects.map((project, index) => {
            return <Project key={index} {...project} />;
          })}
        </motion.div>
      )}
    </div>
  );
};

export default Projects;

interface projectProps {
  image: string;
  title: string;
  madeWith: string;
  git: string;
  link: string;
}

const Project: React.FC<projectProps> = ({
  image,
  title,
  madeWith,
  git,
  link,
}) => {
  const [overlay, setOverlay] = useState(false);
  return (
    <Space
      direction="vertical"
      className={styles.project}
      onMouseEnter={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
    >
      <div className={styles.imageContainer}>
        <img src={image} className={styles.image} />
        {overlay && (
          <div className={styles.overlay}>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={styles.button}
              >
                <AiOutlineEye />
              </a>
            )}
            <a
              href={git}
              target="_blank"
              rel="noreferrer"
              className={styles.button}
            >
              <SiGithub />
            </a>
            <Text strong className={styles.madeWith}>
              {madeWith}
            </Text>
          </div>
        )}
      </div>
      <Title level={4} className={styles.projectName}>
        {title}
      </Title>
    </Space>
  );
};
