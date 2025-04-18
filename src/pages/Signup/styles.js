import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100dvh;

  img {
    width: 48.75rem;
    height: 100dvh;
    object-fit: cover;
    object-position: center;
    border-top-left-radius: 2.5rem;
    border-bottom-left-radius: 2.5rem;
  }

`

export const SigninContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 2.5rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: left;
  }

  p {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
  }

  `
