import { createGlobalStyle } from "styled-components"
const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html{
        font-size: 62.5%;
    }
    body{
        font-family: --app-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    html, body, #__next {
        height: 100%;
    }
`
export default GlobalStyles
