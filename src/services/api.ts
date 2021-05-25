import axios from "axios";

const httpClient = axios.create();

export function useGithubApi() {
  async function searchUser(user: string) {
    const response = await httpClient.get(
      `https://api.github.com/users/${user}`
    );

    return response.data;
  }

  async function searchRepos(user: string) {
    const response = await httpClient.get(
      `https://api.github.com/users/${user}/repos`
    );

    return response.data;
  }

  return {
    searchUser,
    searchRepos,
  };
}
