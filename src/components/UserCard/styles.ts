import styled from "styled-components";

export const UserCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 1rem;
  min-width: 500px;
  max-width: 700px;
  max-height: 400px;

  @media (max-width: 600px) {
    min-width: 300px;
  }
`;

export const Name = styled.h1`
  font-weight: 600;
`;

export const ProfileImage = styled.img`
  border: 5px solid ${(props) => props.theme.colors.headerBackground};
  border-radius: 50%;
  width: 160px;
  height: 160px;
  margin: 1rem 0;
  max-width: 350px;
`;

export const Generic = styled.p`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  > p:last-child {
    margin-left: 10px;
  }
`;
