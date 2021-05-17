import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 100px;
  background-color: ${(props) => props.theme.colors.headerBackground};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  padding: 1.5rem 2.5rem;
  justify-content: center;
  flex-direction: column;
`;

export const Anchor = styled.a`
  color: #22333b;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-bottom: 1px solid white;
    color: white;
  }
`;
