import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.gray__400};
`

export const TaskGeneratorForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 1rem 2rem 1rem 2rem;
    gap: 1rem;
    transition: .2s;


    border-radius: 8px; /* Borda arredondada */
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.1);

    &:hover{
        box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2);
    }
`

export const TaskLabel = styled.label`
    align-self: flex-start;

    color: ${({ theme }) => theme.colors.gray__100};
    font-size: 1.6rem;
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.text};
`

export const Input = styled.input`
    padding-left: 1rem;
    width: 39.875rem;
    height: 3.375rem;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.gray__500};
    color: ${({ theme }) => theme.colors.gray__200};
    border: none;
    
    &:focus{
        color: ${({ theme }) => theme.colors.gray__100};
        border: 2px solid ${({ theme }) => theme.colors.purple__700}; 
    }

`

export const AddTask = styled.button`
    margin-top: 1rem;
    width: 8rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.blue__500};
    color: ${({ theme }) => theme.colors.gray__100};
    font-weight: bold;
    font-size: 1rem;

    &:hover{
        cursor: pointer;
    background-color: ${({ theme }) => theme.colors.blue};

    }
 `

export const ErrorMessage = styled.span`
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.danger};

    align-self: flex-start;
`