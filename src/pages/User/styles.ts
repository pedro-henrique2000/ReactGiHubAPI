import styled from "styled-components";

export const UserContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;
  flex: 1;
`;

export const UserInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  width: 100%;
  justify-items: center;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;
