import FormUser from "../../components/FormUser";
import { HomeContainer, HomeText, HomeParagraph } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <HomeText>
        Encontre informações de um usuário do GitHub de forma rápida e fácil!
      </HomeText>
      <HomeParagraph>Digite o nome do usuário abaixo.</HomeParagraph>
      <FormUser />
    </HomeContainer>
  );
};

export default Home;
