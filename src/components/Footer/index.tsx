import { Anchor, FooterContainer } from "./styles";
const Footer = () => {
  return (
    <FooterContainer>
      <p>
        <span>
          Created by:{" "}
          <Anchor href="https://github.com/phb2000">Pedro Henrique</Anchor>
        </span>
      </p>
      <p>
        <Anchor href="https://docs.github.com/en/rest">
          Github API documentation
        </Anchor>
      </p>
    </FooterContainer>
  );
};

export default Footer;
