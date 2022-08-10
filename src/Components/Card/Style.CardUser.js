import styled from "styled-components";

export const Submit = styled.button`
  width: 8rem;
  border-radius: 12px;
  border: none;
  background-color: ${({ theme }) => theme.purpleOP};
  color: #e8f1f2;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.15rem;
  cursor: pointer;
  display: flex;
  align-self: center;
  justify-content: center;
  &:hover {
    color: #7d7d7d;
    background-color: #ffffff;
    transition: 0.5s ease;
  }
`;

export const Span = styled.span`
  font-size: 0.6rem;
  color: ${({ theme }) => theme.purpleOP};
  margin-left: 0.8rem;
  transition: all 0.5s ease;
  cursor: pointer;
`;

export const ServicesUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
`;

export const ProfileSectionBG = styled.div`
  background-color: ${({ theme }) => theme.grayOp};
  margin-top: 2rem;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.5s ease;
  max-width: 50vw;
  min-height: 50vh;
  width: 100%;
  border-radius: 12px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (max-width: 800px) {
      overflow-y: scroll;
      flex-wrap: nowrap;
      max-height: 25rem;
      padding-right: 1.2rem;
      margin-left: 1.2rem;
      overflow-x: hidden;
    }

    @media screen and (min-height: 680px) and (max-height: 700px) {
      max-height: 25rem;
      overflow-x: hidden;
    }

    @media screen and (max-width: 300px) {
      overflow-x: hidden;
      padding: 0;
      margin: auto;
    }

    aside {
      display: flex;
      flex-direction: column;
      align-self: center;
      width: 100%;
      max-width: 100%;

      @media screen and (min-width: 801px) {
        overflow-y: scroll;
        flex-wrap: nowrap;
        max-height: 25rem;
        padding-right: 1.2rem;
        margin-left: 1.2rem;
        overflow-x: hidden;
      }
      @media screen and (min-height: 680px) and (max-height: 700px) {
        overflow-y: scroll;
        flex-wrap: nowrap;
        max-height: 15rem;
        padding-right: 1.2rem;
        margin-left: 1.2rem;
        overflow-x: hidden;
      }
    }

    p {
      color: white;
      text-align: center;
      font-size: 0.8rem;
    }
    a {
      text-decoration: none;
      color: white;
      text-align: center;
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 900px) {
    width: 28rem;
  }

  @media only screen and (max-width: 550px) {
    min-width: 80%;
    label {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.65rem;
    }
  }

  @media only screen and (min-width: 551px) and (max-width: 700px) {
    min-width: 60%;
    label {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.65rem;
    }
  }
`;

export const FormBottom = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  align-self: center;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 2rem;
`;

export const InputGroup = styled.div`
  > label {
    color: ${({ theme }) => theme.gray};
    font-size: 0.9rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    span {
      color: ${({ theme }) => theme.purpleOP};
      font-size: 0.7rem;
      cursor: pointer;
      pointer-events: ${(props) => props.editDataOp};
    }
  }
  > input {
    pointer-events: ${(props) => props.editData};
    display: flex;
    justify-content: center;
    flex-direction: row;
    background: ${({ theme }) => theme.user_input};
    color: ${({ theme }) => theme.gray};
    color-scheme: ${({ theme }) => theme.calendar};
    transition: 0.5s ease;
    margin: 1rem 0;
    width: 100%;
    border: none;
    border-radius: 12px;
    padding: 0.7rem;
    font-size: 0.8em;
    text-align: center;
    :focus-visible {
      outline: none;
    }
    :invalid[focused="true"] ~ span {
      display: block;
    }
    ::placeholder {
      color: ${({ theme }) => theme.placeholderOP};
    }
    @media screen and (min-width: 550px) and (max-width: 800px) {
      padding: 0.4rem 0.5rem;
      margin: 0.6rem 0;
    }
    @media only screen and (max-width: 550px) {
      padding: 0.4rem 0.5rem;
      margin: 0.6rem 0;
    }
  }
  > span {
    font-size: 0.8rem;
    background-color: ${({ theme }) => theme.purpleVariant};
    transition: 0.5s ease;
    border-radius: 12px;
    padding: 0.5rem;
    color: white;
    margin-bottom: 0.5rem;
    text-align: justify;
    display: none;

    @media screen and (max-width: 550px) {
      font-size: 0.65rem;
    }
    @media screen and (max-height: 800px) {
      font-size: 0.65rem;
    }
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.gray};
  font-size: 0.9rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
