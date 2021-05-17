import styled from "styled-components";

export const FormContainer = styled.div`
  width: 90%;
`;

export const Form = styled.form`
  width: 50%;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
  margin: 1rem 0;
  min-width: 300px;
  height: 60px;
`;

export const Input = styled.input`
  width: 70%;
  border: none;
  background-color: inherit;
  outline: none;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.text};
`;

export const Button = styled.button`
  width: 30%;
  height: 90%;
  padding: 0.8rem;
  background-color: ${(props) => props.theme.colors.buttonColor};
  border: none;
  color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  transition: all 0.3s ease;
  max-width: 100px;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.buttonColor};
    border: 1px solid ${(props) => props.theme.colors.buttonColor};
  }
`;
