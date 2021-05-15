import { UserCardContainer } from "./styles";

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

const UserCard = ({
  login,
  avatar_url,
  html_url,
  name,
  bio,
  public_repos,
  followers,
  following,
}: UserProps) => {
  return (
    <UserCardContainer>
      <h1>{name}</h1>
      <a href={html_url}>Go</a>
    </UserCardContainer>
  );
};

export default UserCard;
