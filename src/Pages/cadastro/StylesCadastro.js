import styled from "styled-components";
import '../../font.css';

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  gap: 1rem;
  border-radius:5px;
  margin-top: 50px;
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
    height: 900px;
    background-color: #222;
    display:flex;
    flex-direction: column;
    
    & .container {
        margin-top: 3rem;  
        height: 100%;
        z-index:3;
        justify-content:left;

        @media (max-width: 768px) {
            margin-top: 1rem;
            height: 90%;
        }
    }

    & .menuInterno {

        width: 60%;
        height: 75%;
        margin-inline: auto;
        

        background-color: black;
        border:solid;
        border-radius: 5px;
        border-color: #ff9b50;
        border-width:2px;

        @media (max-width: 768px) {
            height: 82%;
        }
    }

    & h1 {
        margin-top: 40px;
        margin-left: 20%;
        margin-bottom:10px;
        font-size: 40px;
        color: #ff9b50;
        font-family: 'Sansation Light';

        @media (max-width: 768px) {
            margin-top: 20px;
        }
    }

    & .departamento {
        font-size: 30px;
        color: #ff9b50;
        font-family: 'Sansation Light';
        margin-left:-48%;
        @media (max-width: 768px) {
            font-size: 20px;
            margin-left:-20%;
        } 
    }

    & h2 {
        font-size: 30px;
        color: #ff9b50;
        font-family: 'Sansation Light';
        margin-left:-60%;
        @media (max-width: 768px) {
            font-size: 20px;
            margin-left:-45%;
        } 
    }

    & .nota1 {
        width:100px; 
        margin: 30% auto 0 8%;
        position:absolute;
        rotate:-40deg;    

        @media (max-width: 768px) {
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