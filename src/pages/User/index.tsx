import { useHistory, useParams } from "react-router";
import UserCard from "../../components/UserCard";
import { UserContainer, UserInfoContainer } from "./styles";
import UserRepos from "../../components/UserRepos/index";
import { useEffect, useState } from "react";
import { useGithubApi } from "../../services/api";

interface ParamTypes {
  username: string;
}

interface UserProps {
  login: string;
  html_url: string;
  avatar_url: string;
  followers: number;
  public_repos: number;
  name: string;
  following: number;
  company: string;
  created_at: string;
}

const User = () => {
  const { username } = useParams<ParamTypes>();
  const [user, setUser] = useState<UserProps>({
    login: "",
    html_url: "",
    avatar_url: "",
    followers: 0,
    public_repos: 0,
    name: "",
    following: 0,
    company: "",
    created_at: "",
  });
  const history = useHistory();
  const api = useGithubApi();

  useEffect(() => {
    const getUser = async () => {
      try {
        const {
          login,
          html_url,
          avatar_url,
          followers,
          public_repos,
          name,
          following,
          company,
          created_at,
        } = await api.searchUser(username);

        setUser({
          login,
          html_url,
          avatar_url,
          followers,
          public_repos,
          name,
          following,
          company,
          created_at,
        });
      } catch (err) {
        window.alert(
          `${err.response.data.message} with name ${username}, returning to home.`
        );
        history.push("/");
      }
    };

    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContainer>
      <UserInfoContainer>
        <UserCard
          login={user?.login}
          avatar_url={user?.avatar_url}
          html_url={user?.html_url}
          name={user?.name}
          public_repos={user?.public_repos}
          followers={user?.followers}
          following={user?.following}
          company={user?.company}
          created_at={user?.created_at}
        />
        <UserRepos username={username} />
      </UserInfoContainer>
    </UserContainer>
  );
};

export default User;
