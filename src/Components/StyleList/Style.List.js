import styled from "styled-components";

export const Select = styled.select`
  border: none;
  padding: 0.5rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.user_input};
  color: ${({ theme }) => theme.gray};
  transition: 0.5s ease;
  text-align: center;
  margin-bottom: 1rem;
  :focus-visible {
    outline: none;
  }
  cursor: pointer;
  pointer-events: ${(props) => props.editData};
`;
