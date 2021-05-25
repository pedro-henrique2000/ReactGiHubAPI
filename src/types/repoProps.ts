export interface ReposProps {
  name: string;
  created_at: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
}

export interface Props {
  repos: ReposProps[];
}
