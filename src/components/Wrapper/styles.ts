import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray__100};

  padding: 0 2rem;
  position: absolute; 
  top: 12.5rem; //Deixar o cabeçalho a vista
  bottom: 0;
  left: 0;
  right: 0;
`;


export const MainWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 0 5rem 0;

  @media (max-width: 1359px) {
    max-width: 80rem;
  }

  @media (max-width: 859px) {
    max-width: 50rem;
    justify-content: center;
  }
`