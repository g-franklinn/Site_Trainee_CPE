import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import '../../font.css';

//Remove as configurações padrão do navegador
export const GlobalStyle = createGlobalStyle`
    * {
        border: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

export const Avisos = styled.div`

    background-color: #222;
    padding-top:80px;

    & h1 {
        
        color:#ff9b50;
        font-family:'Sansation Light';
        font-weight:100;
        margin-left:20%;
    }


`

export const PageContent = styled.div`
    height: 1000px;
    background-color: #222;
    display:flex;
    flex-direction: column;
    

    & .menuInterno {

        width: 80%;
        height: 50%;
        margin-top: 25rem;
        margin-inline: auto;

        background-color: black;
        border:solid;
        border-width:3px;
        border-radius: 5px;
        border-color: #ff9b50;

        & h1 {
            color: #ff9b50;
            margin-left:6%;
            margin-top:35px;
            font-family:'Sansation Light';
            font-weight:100;
        }

    
    }

    & .tambor {
            width:200px; 
            margin:80px 0 0 50px;
            position:absolute;
            rotate:30deg;
        }
        
        & .violino {
            width:160px; 
            margin: 100px 50px 0 80%;
            position:absolute;
            rotate:30deg;
        }


`