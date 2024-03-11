import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray__100};
  padding: 2rem 2rem;
  min-height: 84vh;
`;


export const MainWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 5rem;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 0 0 0;

  @media (max-width: 1359px) {
    max-width: 80rem;
  }

  @media (max-width: 859px) {
    max-width: 50rem;
    justify-content: center;
  }
`