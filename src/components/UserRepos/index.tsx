import { UserReposContainer } from "./styles";

interface Props {
  username: string;
}
const UserRepos = ({ username }: Props) => {
  return (
    <UserReposContainer>
      <h1>{username} Repos</h1>
    </UserReposContainer>
  );
};

export default UserRepos;
