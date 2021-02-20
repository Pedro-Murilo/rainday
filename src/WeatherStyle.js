import styled from 'styled-components';

export const WeatherContainer = styled.div`
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    }

  .container {
    width: 100rem;
    height: 80rem;
    border-radius: 0.8rem;
    background: rgba(73, 82, 84, 0.5);
    opacity: 0.9;
    position: absolute;
    top: 6.5rem;
    text-align: center;
  }

  .input-container {
    padding-top: 15rem;
    padding-bottom: 5rem;
  }

  input {
    border: none;
    border-radius: 0.6rem;
    width: 35rem;
    height: 4.5rem;
    outline: none;
    margin-left: 1.4rem;
    font-size: 1.6rem;
    padding-left: 1rem;
  }

  h2 {
    color: #1a1a1a;
    font-size: 10.6rem;
  }

  h4 {
    color: #1a1a1a;
    font-size: 5.6rem;
  }

  p {
    color: #1f1f1f;
    font-size: 5.6rem;
  }
`;
