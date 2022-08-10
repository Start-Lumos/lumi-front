import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LeftColumn = styled.aside`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RightColumn = styled.aside`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const Submit = styled.button`
  margin-bottom: 2rem;
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
  
export const ProfileInput = styled.input`
  border: none;
  border-radius: 12px;
  font-size: 0.8em;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.user_input};
  color: ${({ theme }) => theme.gray};
  transition: all 0.5s ease;
  &:focus-visible {
    outline: none;
  }
  text-align: center;
  pointer-events: ${(props) => (props.editData)};
`;

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.5s ease;
`;

export const Span = styled.span`
  font-size: 0.6rem;
  color: ${({ theme }) => theme.purpleOP};
  margin-left: 0.8rem;
  transition: all 0.5s ease;
  cursor: pointer;
`;

export const LabelToggle = styled.label`
  background-color: ${({ theme }) => theme.user_input};
  color: ${({ theme }) => theme.gray};
  transition: all 0.5s ease;
  border-radius: 12px;
  padding: 0.3rem;
  text-align: center;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ServicesUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
`

export const DadosUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(props) => (props.dadosSize)};
`

export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  flex-direction: column;
`

export const ProfileSectionBG = styled.div`
  width: 80rem;
  height: ${(props) => (props.sizeP)};
  margin-top: 2rem;
  margin-bottom: 4rem;
  background: ${({ theme }) => theme.grayOp};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.5s ease;
  box-shadow: ${({ theme }) => theme.shadow};
  @media (max-width: 1600px) and (min-width: 1161px) {
    width: 60rem;
    height: ${(props) => (props.sizeS)};
  }
  @media (max-width: 1160px) and (min-width: 951px) {
    width: 50rem;
    height: ${(props) => (props.sizeS)};
  }
  @media (max-width: 950px) and (min-width: 751px) {
    width: 40rem;
    height: ${(props) => (props.sizeS)};
  }
  @media (max-width: 750px) and (min-width: 551px) {
    width: 30rem;
    height: ${(props) => (props.sizeS)};
  }
  @media (max-width: 550px) {
    width: 20rem;
    height: ${(props) => (props.sizeM)};
  }
`;

export const FormBottom = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 25%;
  margin-top: 1rem;
`