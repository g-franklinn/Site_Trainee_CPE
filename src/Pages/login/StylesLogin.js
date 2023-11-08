import styled from "styled-components";
import '../../font.css';

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  gap: 1rem;
  border-radius:5px;
`;

export const StyledInput = styled.input` //Area de texto
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 1rem;
  width: 70%;
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
    height: 600px;
    background-color: #222;
    display:flex;
    flex-direction: column;
    
    & .container {
        margin-top: 3rem;  
        height: 100%;
        z-index:3;

        @media (max-width: 768px) {
            margin-top: 1rem;
            height: 80%;
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
            height: 75%;
        }
    }

    & h1 {
        margin-top: 40px;
        margin-left: 20%;
        margin-bottom:10px;
        font-size: 40px;
        color: #ff9b50;
        font-family: 'Sansation Light';
        font-weight:100;

        @media (max-width: 768px) {
            margin-top: 20px;
        }
    }

    & h2 {
        font-size: 30px;
        color: #ff9b50;
        font-family: 'Sansation Light';
        font-weight:100;
        margin-left:-50%;
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
        width:120px; 
        margin: 40px auto auto 1%;
        position:absolute;
        rotate:-5deg;    

        @media (max-width: 768px) {
            width: 15%;
        } 
    }
    
    & .nota4 {
        width:70px; 
        margin: 370px auto auto 82%;
        position:absolute;
        rotate:-5deg;  

        @media (max-width: 768px) {
            width: 12%;
        }
    }
    
    & .arpa {
        width:70px; 
        margin: 400px auto auto 10%;
        position:absolute;
        rotate:-5deg;
        z-index:0;

        @media (max-width: 768px) {
            width: 15%;
        }
    }
`