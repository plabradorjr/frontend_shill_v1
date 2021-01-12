import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        /* font-family: 'Montserrat', sans-serif; */
        width: 100%;
        background-color: #1d0464;
        background-image: linear-gradient(to right top, #161D2E 10%, #15202B 90%);

    }
    h2{
        font-size: 30px;
        font-family: 'Roboto', sans-serif;
        color: #bdc3c7;
    }
    h3{
        font-size: 1rem;
        color: #bdc3c7;
        padding: 1.5rem 0rem;
    }
    h4{
        color: #bdc3c7;
    }
    p{
        font-size: 0.9rem;
        line-height: 50%;
        color: #bdc3c7;
    }
    a{
        text-decoration: none;
        color: #bdc3c7;
    }
    small{
        color: #bdc3c7;

    }
    img{
        display: block;
        border-radius: 1rem;
    }
    input{
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyles;