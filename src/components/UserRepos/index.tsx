import {
  UserReposContainer,
  RepoInfo,
  RepoStats,
  Stats,
  RepoTitle,
} from "./styles";
import { DiCode } from "react-icons/di";
import { TiStar } from "react-icons/ti";
import { MdWatchLater } from "react-icons/md";
import { formatLocalDate } from "../../utils/formatLocalDate";
import { GoRepoForked } from "react-icons/go";
import { Props } from "../../types/repoProps";
import { VisitButton } from "../VisitButton";

const UserRepos = ({ repos }: Props) => {
  return (
    <UserReposContainer>
      {repos?.map((repo, idx) => {
        return (
          <RepoInfo key={idx}>
            <RepoStats>
              <RepoTitle>{repo.name} Repos</RepoTitle>
              <Stats>
                <DiCode size={20} /> Main language:{repo.language}
              </Stats>
              <Stats>
                <TiStar size={20} />
                Stars Count: {repo.stargazers_count}
              </Stats>
              <Stats>
                <MdWatchLater size={20} />
                Created at: {formatLocalDate(repo.created_at, "dd/MM/yyyy")}
              </Stats>
              <Stats>
                <GoRepoForked size={20} /> Forks count: {repo.forks_count}
              </Stats>
            </RepoStats>
            <VisitButton url={repo.html_url} />
          </RepoInfo>
        );
      })}
    </UserReposContainer>
  );
};

export default UserRepos;
