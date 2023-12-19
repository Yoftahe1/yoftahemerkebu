import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
const useProjects = () => {
  const [projects, setProjects] = useState<
    {
      image: string;
      title: string;
      madeWith: string;
      git: string;
      link: string;
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

   async function getProjects() {
    setIsLoading(true);
    const querySnapshot = await getDocs(collection(db, "projects"));
    let newProjects: any = [];
    querySnapshot.forEach((doc) => {
      newProjects.push(doc.data());
    });
    setIsLoading(false);
    setProjects(newProjects);
  }

  useEffect(() => {
    getProjects();
  }, []);
  
  return { isLoading, projects ,getProjects};
};

export default useProjects;

