import styled from "styled-components";

export const UserCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 1rem;
`;
