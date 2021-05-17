import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  background-color: ${(props) => props.theme.colors.headerBackground};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  padding: 1.5rem 2.5rem;
  justify-content: space-between;

  > a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const LogoText = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;
  font-size: 1.25rem;
  margin-left: 0.7rem;
`;
