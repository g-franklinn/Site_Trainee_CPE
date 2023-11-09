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

export const StyledButton = styled.button` //Botao de Login
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-family:'Sansation Light';
    font-weight:bold;
    background-color: #ff9b50;
    color: black;
    border-radius:5px;

    &:hover{
            background-color: black;
            color:#ff9b50;
            font-family:'Sansation Light';
            font-weight: 100;
            border:solid;
            border-color:#ff9b50;
            border-width:2px;                        
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
            font-size: 34px;
            width: 100%;

            @media (max-width: 768px) {
                font-size: 18px;
            }

        }



        & .menuUsuarios {
            margin-top: 3%;
            width: 100%;
            height: 100%;
            background-color: #222;
        }

        & .containerUsuarios {
            width: 80%;
            justify-content: center;
            display: flex;
            margin: auto;


            & button { 
                margin-top: 30px;
                width: 50%;
                height: 50px;
                margin-left: 50%;
                overflow-y: hidden;
                }

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
        margin: 10rem 50px 0 86%;
        position:absolute;
        rotate:30deg;

        @media (max-width: 768) {
            width: 10%;
        }   
    }

    & .teclado {
        width:200px; 
        margin: 50rem auto 0 85%;
        position:absolute;
        rotate:-10deg;

        @media (max-width: 768px) {
                width: 30%;
                margin-top: 100%;
            }   
    }
    
    & .saxofone {
        width:100px;
        margin:65rem 0 0 0.5rem;
        position:absolute;
        rotate:50deg;
    }
    
`