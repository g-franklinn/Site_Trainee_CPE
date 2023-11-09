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
        margin-left:20%;
    }
`

export const PageContent = styled.div`
    height: 1400px;
    background-color: #222;
    display:flex;
    flex-direction: column;
    
    & .menuInterno {

        width: 80%;
        height: 2500px;
        margin-top: 4rem;
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
    }

    & .tambor {
            width:150px; 
            margin:80px 0 0 3%;
            position:absolute;
            rotate:30deg;

            @media (max-width: 768) {
                width: 20%;
            }
        }
    
    & .violino {
        width:100px; 
        margin: 100px 50px 0 86%;
        position:absolute;
        rotate:30deg;

        @media (max-width: 768) {
                width: 10%;
            }   
    }   

    & .teclado {
        width:200px; 
        margin: 600px auto 0 82%;
        position:absolute;
        rotate:-10deg;

        @media (max-width: 768) {
                width: 20%;
            }   
    }
    
    & .saxofone {
            width:100px;
            margin:900px 0 0 2%;
            position:absolute;
            rotate:50deg;

            @media (max-width: 768px) {
                width: 15%;
            }
        }
    
`