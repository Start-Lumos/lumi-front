import styled from "styled-components";

export const Decribe = styled.section`
  label {
    color: ${({ theme }) => theme.gray};
    font-size: 0.9rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  textarea {
    border: none;
    border-radius: 12px;
    width: 100%;
    height: 7rem;
    background: ${({ theme }) => theme.user_input};
    color: ${({ theme }) => theme.gray};
    padding: 0.8rem;
    :focus-visible {
      outline: none;
    }
    text-indent: 1.5rem;
  }

  div {
    color: ${({ theme }) => theme.gray};
    font-size: 0.9rem;
    text-align: center;
  }
`;
