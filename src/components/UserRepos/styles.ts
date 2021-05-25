import styled from "styled-components";

export const UserReposContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`;

export const RepoInfo = styled.div`
  width: 90%;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RepoStats = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RepoTitle = styled.h2`
  font-weight: 800;
  font-size: 20px;
`;

export const Stats = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
`;
