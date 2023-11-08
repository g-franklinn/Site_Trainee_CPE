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
    padding-top: 80px;


    & h1 {
        
        color:#ff9b50;
        font-family:'Sansation Light';
        font-weight:600;
        font-size: 38px;
        margin-left:25%;
    }


`

export const PageContent = styled.div`
    height: 1400px;
    background-color: #222;
    display:flex;
    flex-direction: column;
    


    

    & .menuInterno {

        width: 80%;
        height: 50%;
        margin-top: -10rem;
        margin-bottom: 10rem;
        margin-inline: auto;
        z-index: 1;
        overflow-y: hidden;
        

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

        & .menuUsuarios {
            margin-top: 3%;
            width: 100%;
            height: 100%;
            background-color: #222;
        }

        & .containerUsuarios {
            display: flex;

            & button {
                margin-top: 30px;
                margin-left: 55%;
                margin-right: 40px;
                width: 160px;
                height: 50px;
            }
        }

    
    }

    & img {
        overflow-x: hidden;
        user-select: none;
        @media (max-width: 1100px) {
            width: 0;
            height: 0;
            opacity: 0;
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
        margin: 100px 50px 0 86%;
        position:absolute;
        rotate:30deg;
        
    }


`