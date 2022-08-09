import styled from "styled-components";

export const FooterS = styled.footer`
    widht: 100%;
    border: 1px solid red;
    background-color: ${({ theme }) => theme.purple};
    color: ${({ theme }) => theme.fontColor};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p{
        text-align: center;
    }
`