import { useParams } from "react-router";

interface ParamTypes {
  username: string;
}

const User = () => {
  const { username } = useParams<ParamTypes>();

  return <h1>{username}</h1>;
};

export default User;
