import styled from "styled-components"

export const Container = styled.div`
    width: 20rem;
    height: 26rem;
    

    border-radius: 8px; /* Borda arredondada */
    background-color: ${({ theme }) => theme.colors.gray__100};
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: .2s;

    &:hover{
        box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2);
    }
`

export const CardHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    
    border-radius: 8px 8px 0 0;
    font-weight: bold;
    font-size: 1.8rem;
    font-family: ${({ theme }) => theme.fonts.text};

    color: ${({ theme }) => theme.colors.gray__400};
    background-color: ${({ theme }) => theme.colors.purple__500};
    margin-bottom: 1rem;
`

export const CardBody = styled.div`
    display: grid;
    grid-template-rows: 0.5fr 1.5fr 0.5fr 1fr;

    height: 18rem;
`

export const CardTitle = styled.h3`
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.gray__400};
    text-align: center;
`

export const CardDescription = styled.li`
    align-self: flex-start;
    margin: 1rem 0 0.6rem 1rem;

    font-size: 1.3rem;
    font-family: ${({ theme }) => theme.fonts.text};
`
export const CardLocation = styled.div`
    display: flex;
    align-self: flex-start;
    align-items: center;
    margin: 0.6rem 0 0 1rem;
    gap: 0.5rem;

    p{
        font-size: 1.3rem;
        font-family: ${({ theme }) => theme.fonts.text};
        font-weight: 500;
    }

    svg{
        color: ${({ theme }) => theme.colors.purple__700};
        font-size: 2rem;
    }
`

export const CardParticipants = styled.p`
    align-self: flex-start;
    margin: 1rem 0 0.6rem 1rem;

    font-size: 1.3rem;
    font-family: ${({ theme }) => theme.fonts.text};

    span{
        font-weight: 500;
    }
`

export const CardFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    button{
        svg{
            font-size:2rem;
            color: ${({ theme }) => theme.colors.purple__700};
            transform: .4s;

            &:hover{
                color: ${({ theme }) => theme.colors.purple__500};
            }
        }
    }
    

`

