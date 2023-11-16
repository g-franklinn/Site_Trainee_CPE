import styled from "styled-components";
import '../../font.css';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius:5px;
  padding-top: 2.5rem;
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
    height: 45rem;
    background-color: #222;
    display:flex;
    flex-direction: column;
    
    
    & .container {
        margin-top: 6rem;  
        height: 100%;
        z-index:3;
        
        @media (max-width: 768px) {
            margin-top: 0rem;
            height: 80%;
        }
    }

    & .menuInterno {

        width: 60%;
        height: 55%;
        margin-inline: auto;
        overflow-y: hidden;

        background-color: black;
        border:solid;
        border-radius: 5px;
        border-color: #ff9b50;
        border-width:2px;

    }

    & h1 {
        margin-left: 20%;
        margin-bottom:10px;
        margin-top:2rem;
        font-size: 40px;
        color: #ff9b50;
        font-family: 'Sansation Light';
    }

    & label {
        font-size: 30px;
        color: #ff9b50;
        font-family: 'Sansation Light';
        margin-left:-60%;

        @media (max-width: 768px) {
            font-size: 20px;
            margin-left: -40%;
        }
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