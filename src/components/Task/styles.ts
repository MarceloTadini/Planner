import styled from "styled-components";

export const Container = styled.main`
    background-color: ${({ theme }) => theme.colors.gray__400};
    //width: 100vw;
    height: 100vh;

`

export const Tasks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 46rem;
`

export const TasksStatusContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const TaskStatus = styled.p`

    
`

