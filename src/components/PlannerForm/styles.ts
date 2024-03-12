import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    justify-content: center;
`

export const TaskGeneratorForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 1rem 2rem 1rem 2rem;
    gap: 1rem;
    transition: .2s;
    background-color: ${({ theme }) => theme.colors.gray__200};


    border-radius: 8px; /* Borda arredondada */
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.1);

    &:hover{
        box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2);
    }
`

export const TaskLabel = styled.label`
    align-self: flex-start;
    display: flex;
    align-items: center;
    

    color: ${({ theme }) => theme.colors.gray__400};
    font-size: 1.8rem;
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.text};

    input{
        margin-left: 2rem;
        height: 4rem;
        line-height: 1rem;
    }

    span{
        font-size: 1.4rem;
        margin-left: .5rem;
    }
`

export const Input = styled.input`
    padding-left: 1rem;
    width: 39.875rem;
    height: 3.375rem;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.gray__100};
    color: ${({ theme }) => theme.colors.gray__500};
    font-weight: 500;
    border: none;

    &::placeholder{
        color: ${({ theme }) => theme.colors.gray__300};
        font-weight: 400;
    }

    &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    &:focus{
        color: ${({ theme }) => theme.colors.gray__500};
        border: 2px solid ${({ theme }) => theme.colors.blue__500}; 
    }

`

export const AddTask = styled.button`
    margin-top: 1rem;
    width: 8rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.blue__500};
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.gray__100};
    font-weight: bold;
    font-size: 1rem;

    &:hover{
        cursor: pointer;
    background-color: ${({ theme }) => theme.colors.blue__700};

    }
 `

export const ErrorMessage = styled.span`
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.danger};

    align-self: flex-start;
`