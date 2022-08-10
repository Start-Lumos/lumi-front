import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProfileBG = styled.div`
  margin-top: 2rem;
  width: 15rem;
  height: 15rem;
  background: ${({ theme }) => theme.grayOp};
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  box-shadow: ${({ theme }) => theme.shadow};
`;