import { useState, useEffect } from "react";
import { ApiRepository, Repository } from "../types/types";

const useRepositories = (userName: string) => {
  const [repositories, setRepositories] = useState<Repository[] | null>(null);

  const fetchRepositories = async (userName: string) => {
    try {
      const apiUrl = `https://api.github.com/users/${userName}/repos`;
      const response = await fetch(apiUrl);
      const apiRepositories: ApiRepository[] = await response.json();
      const formattedRepositories: Repository[] = apiRepositories.map(
        (apiRepo: ApiRepository) => ({
          id: apiRepo.id,
          name: apiRepo.name,
          isPrivate: apiRepo.private,
          language: apiRepo.language,
          size: apiRepo.size,
          htmlUrl: apiRepo.html_url,
          updated: apiRepo.updated_at,
        })
      );
      setRepositories(formattedRepositories);
    } catch (error) {
      console.error("Failed to fetch repositories", error);
    }
  };

  const getInDays = (time: string) => {
    const newDate = new Date(time);
    const currentDate = new Date();
    const totalTime = currentDate.getTime() - newDate.getTime();
    const totalDays = Math.floor(totalTime / (1000 * 60 * 60 * 24));
    return totalDays;
  };

  useEffect(() => {
    fetchRepositories(userName);
  }, [userName]);

  return { repositories, getInDays };
};

export default useRepositories;
