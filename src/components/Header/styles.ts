import styled from "styled-components";

export const Container = styled.header`
    background-color: ${({ theme }) => theme.colors.gray__700};
    height: 12.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const LinkToPlanner = styled.button`
    position: absolute;
    top: 8rem;
    right: 8rem;
    width: 10rem;
    height: 4rem;

    background-color: ${({ theme }) => theme.colors.blue__500};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.gray__100};
    font-weight: bold;
    font-family: ${({ theme }) => theme.colors.text};
    transition: .2s;
    


    &:hover{
        background-color: ${({ theme }) => theme.colors.blue};
    }
`
