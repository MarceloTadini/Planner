import styled from "styled-components";

export const Container = styled.header`
    background-color: ${({ theme }) => theme.colors.gray__700};
    height: 12.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const TaskGenerator = styled.div`
    bottom: -1.5rem;
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
`

export const Input = styled.input`
    padding-left: 1rem;
    width: 39.875rem;
    height: 3.375rem;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.gray__500};
    color: ${({ theme }) => theme.colors.gray__300};
    border: none;
    
    &:focus{
        color: ${({ theme }) => theme.colors.gray__100};
        border: 2px solid ${({ theme }) => theme.colors.purple__700}; 
    }

`

export const AddTask = styled.button`
    width: 5.625rem;
    height: 3.375rem;
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