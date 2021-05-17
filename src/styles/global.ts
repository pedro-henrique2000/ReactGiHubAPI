import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
        font-size: 14px;
        color: ${(props) => props.theme.colors.text};
        font-family: sans-serif;
        min-height: 100vh;
        display: flex;
        flex-direction: column
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 600;
    }

`;
