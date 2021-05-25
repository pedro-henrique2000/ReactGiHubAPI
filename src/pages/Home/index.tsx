import FormUser from "../../components/FormUser";
import { HomeContainer, HomeText, HomeParagraph } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <HomeText>
        Search for information and stats from Github users quickly and easily.
      </HomeText>
      <HomeParagraph>Type the username bellow.</HomeParagraph>
      <FormUser />
    </HomeContainer>
  );
};

export default Home;
