import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 80%;
  height: 50rem;
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.grayOp};
  color: ${({ theme }) => theme.gray};
  transition: all 0.5s ease;
  margin-bottom: 5%;

  @media screen and (min-width: 1500px){
    width: 60rem;
  }
`;

export const Sobre = styled.div`
  width: 100%;
  height: 25%;
  border: 1px solid red;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2%;
  flex-direction: row;
`;

export const ProfilePicture = styled.img`
  width: 10rem;
  height: 10rem;
  background: #564aff;
  border-radius: 100%;
`;

export const Data = styled.aside`
  width: 70%;
  height: 90%;
  border: 1px solid blue;
  display: flex;
  align-items: center;
  flex-direction: row;
  h2 {
    color: ${({ theme }) => theme.gray};
    font-weight: 500;
    font-size: 1.2rem;
    transition: all 0.5s ease;
    height: 15%;
    margin-bottom: 0.2rem;
  }
  aside {
    width: 50%;
    p{
        font-size: 0.9rem;
    }
  }
  span {
    color: ${({ theme }) => theme.purpleOP};
    transition: all 0.5s ease;
    font-weight: 450;
    font-size: 0.9rem;
    margin-top: 0.2rem;
  }
`;

export const Description = styled.div`
  display: flex;
  border: 1px solid black;
  width: 90%;
  height: 15%;
  margin-bottom: 2%;
  p {
    font-size: 0.8rem;
    text-align: justify;
    text-indent: 2rem;
  }
`;

export const Pictures = styled.div`
  border-radius: 12px;
  height: 50%;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
  background: #564aff;
  transition: all 0.5s ease;
`;
