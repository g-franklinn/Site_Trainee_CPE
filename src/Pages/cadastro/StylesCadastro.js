import styled from "styled-components";
import '../../font.css';

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
  border-radius:5px;
  margin-top: 50px;
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
    height:40px;
    width:80px;
    margin-inline:auto;
    font-size: 1rem;
    font-family:'Sansation Light';
    font-weight:bold;
    background-color: #ff9b50;
    color: black;
    border-radius:5px;

    &:hover{
            background-color: black;
            color:#ff9b50;
            font-weight: 100;
            border:solid;
            border-color:#ff9b50;
            border-width:2px;                        
        }
`;

export const PageContent = styled.div`
    height: 60rem;
    background-color: #222;
    display:flex;
    flex-direction: column;
    
    & .container {
        margin-top: 3rem;  
        height: 100%;
        z-index:3;
        @media (max-width: 768px) {
            margin-top: 1rem;
            height: 90%;
        }
    }

    & .menuInterno {

        width: 60%;
        height: 70%;
        margin-inline: auto;

        background-color: black;
        border:solid;
        border-radius: 5px;
        border-color: #ff9b50;
        border-width:2px;

        @media (max-width: 768px) {
            height: 70%;
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
            font-size:25px;
        } 
    }

    & img {
        user-select: none;
        overflow-x: hidden;
    }

    & .nota1 {
        width:100px; 
        margin: 30% auto auto 3%;
        position:absolute;
        rotate:-40deg;    

        @media (max-width: 768px) {
            margin-top: 90%;
            width: 15%;
        } 
    }

    & .sanfona {
        width:150px; 
        margin: 500px auto auto 85%;
        position:absolute;
        rotate:40deg;    

        @media (max-width: 768px) {
            width: 15%;
        } 
    }

    & .headfone {
        width:100px; 
        margin: 5% auto auto 3%;
        position:absolute;
        rotate:-40deg;    

        @media (max-width: 768px) {
            width: 15%;
        } 
    }

    & .teclado {
        width:200px; 
        margin: 30% auto 0 8%;
        position:absolute;
        rotate:-10deg;

        @media (max-width: 768) {
                width: 20%;
            }   
    }

    & .saxofone {
            width:100px;
            margin:15% 0 0 90%;
            position:absolute;
            rotate:50deg;

            @media (max-width: 768px) {
                width: 10%;
            }
        }
`