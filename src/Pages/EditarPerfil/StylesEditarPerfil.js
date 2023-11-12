import styled from "styled-components";
import '../../font.css';

//Botoes, input e formulario

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items:left;
  gap: 1rem;
  border-radius:5px;
`;

export const StyledInput = styled.input` //Area de texto
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 1rem;
  width: 70%;
  margin-inline:auto;
  border-radius:5px;
`;

export const StyledButton = styled.button` //Botao de Autenticação
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

export const PageContent = styled.div`

    height: 900px;
    background-color: #222;
    display:flex;
    flex-direction: column;

    & .container {
        margin-top:3rem;
        height: 100%;
        z-index:1;
        @media (max-width: 768px) {
            margin-top: 1rem;
            height: 80%;
        }
    }

    & .menuInterno {

        padding-top:2rem;
        width: 60%;
        height: 75%;
        margin-inline: auto;

        background-color: black;
        border:solid;
        border-radius: 5px;
        border-color: #ff9b50;
        border-width:2px;

        @media (max-width: 768px) {
            height: 85%;
        }
    }


    & h1 {
        margin-top: 2rem;
        margin-left: 20%;
        margin-bottom:10px;
        font-size: 40px;
        color: #ff9b50;
        font-family: 'Sansation Light';
    }

    & h2 {
        font-size: 30px;
        color: #ff9b50;
        font-family: 'Sansation Light';
        margin-left:15%;

        @media (max-width: 768px) {
            font-size: 25px;
        }
    }

    & button {
        margin-top: 20px;
        margin-inline:auto;
        height: 50px;
        width: 170px;
    }

    & img {
        user-select: none;
        overflow-x: hidden;
    }
    
    & .violino {
        width:70px; 
        margin: 120px 50px 0 90%;
        position:absolute;
        rotate:30deg;
        
        @media (max-width: 768px) {
            width: 10%;
        }
    }

    & .nota1 {
        width:100px; 
        margin: 100px auto auto 3%;
        position:absolute;
        rotate:-30deg;    

        @media (max-width: 768px) {
            width: 15%;
        } 
    }

        
    & .saxofone {
        width:150px;
        margin: 35rem auto 0 5%;
        position:absolute;
        rotate:-10deg;  
        z-index:0;
    }
    
    & .teclado {
        width:150px; 
        margin: 450px auto auto 85%;
        position:absolute;
        rotate:40deg;    

        @media (max-width: 768px) {
            width: 15%;
        } 
    }

`