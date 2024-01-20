import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        
    }

    :root {
        --primary-color: #611C18;
        --secondary-color: #D2BEBF;
        --terciary-color: #733C39;
    }

    body {
        /* background-color: var(--primary-color); */
        /* font-family: 'Roboto', sans-serif; */
        font-family: 'Playfair Display', serif;
        overflow-x: hidden;

    }
`;