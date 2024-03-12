import styled from "styled-components";

export const Container = styled.header`
    background-color: ${({ theme }) => theme.colors.gray__700};
    height: 12.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const CreateButton = styled.button`
    position: absolute;
    top: 8rem;
    left: 8rem;
    width: 10rem;
    height: 4rem;

    background-color: ${({ theme }) => theme.colors.blue__500};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.gray__100};
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.text};
    transition: .2s;
    


    &:hover{
        background-color: ${({ theme }) => theme.colors.blue__700};
    }
`

export const PDFButton = styled(CreateButton)`
    right: 8rem;
    left: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    svg{
        font-size: 1.5rem;
    }

`
