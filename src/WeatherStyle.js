import styled from "styled-components";

export const WeatherContainer = styled.div`
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;


export const Container = styled.div`
    width: 100rem;
    height: 65rem;
    border-radius: 0.8rem;
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 6.5rem;
    text-align: center;
    box-shadow: 0.3rem 0.3rem 1rem 0.3rem rgba(0, 0, 0, 0.5);

    h2 {
      font-size: 5.6rem;
    }

    h4 {
      font-size: 3.6rem;
      margin-top: 3rem;
    }

    p {
      font-size: 3.2rem;
      font-weight: 700;
    }

    .temp {
      margin-top: 5rem;
    }
`

export const InputContainer = styled.div`
      padding-top: 15rem;
      padding-bottom: 5rem;

      input {
        width: 35rem;
        height: 4rem;
        border-radius: 2rem;
        padding: 1.6rem;
        outline: none;
        border: none;
        transition: 200ms;
        background: #d1d1d1;

        &:hover {
          background: #e8a566;
        }

        &:focus {
          background: #e8a566;
        }
      }
`