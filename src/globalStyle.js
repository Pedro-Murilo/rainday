import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: #f29e55;
    }

    video {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
    }
`