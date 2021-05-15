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
  bio: string;
  name: string;
  following: number;
}

const User = () => {
  const { username } = useParams<ParamTypes>();
  const [user, setUser] = useState<UserProps>({
    login: "",
    html_url: "",
    avatar_url: "",
    followers: 0,
    public_repos: 0,
    bio: "",
    name: "",
    following: 0,
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
          bio,
          name,
          following,
        } = await api.searchUser(username);

        setUser({
          login,
          html_url,
          avatar_url,
          followers,
          public_repos,
          bio,
          name,
          following,
        });
      } catch (err) {
        window.alert(
          `${err.response.data.message} with name ${username}, retornando para a home`
        );
        history.push("/");
      }
    };

    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(user);
  return (
    <UserContainer>
      <UserInfoContainer>
        <UserCard
          login={user?.login}
          avatar_url={user?.avatar_url}
          html_url={user?.html_url}
          name={user?.name}
          bio={user?.bio}
          public_repos={user?.public_repos}
          followers={user?.followers}
          following={user?.following}
        />
        <UserRepos username={username} />
      </UserInfoContainer>
    </UserContainer>
  );
};

export default User;
