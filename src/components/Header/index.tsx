import { Container, LogoText } from "./styles";
import Switch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title, colors } = useContext(ThemeContext);

  return (
    <Container>
      <Link to="/">
        <GoMarkGithub color={colors.text} size={44} />
        <LogoText>Github Search</LogoText>
      </Link>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor="#72B01D"
        offColor="#F3EFF5"
      />
    </Container>
  );
};

export default Header;
