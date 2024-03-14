import styled from "styled-components"

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

    @media (max-width: 510px) {
        left: 1rem;
    }
`

export const PDFButton = styled(CreateButton)`
    left: unset;
    right: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    svg{
        font-size: 1.5rem;
    }

    @media (max-width: 510px) {
        right: 1rem;
    }

`