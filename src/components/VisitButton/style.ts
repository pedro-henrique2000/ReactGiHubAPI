import styled from "styled-components";

export const Container = styled.a`
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: ${(props) => props.theme.colors.buttonColor};
  border-radius: 10px;
  color: ${(props) => props.theme.colors.text};
`;
