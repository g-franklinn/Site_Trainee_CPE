import styled from "styled-components";
import '../../font.css';


export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  gap: 1rem;
  display: flex;

`;

export const StyledInput = styled.input` //Area de texto
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 1rem;
  width: 50%;
`;

export const StyledButton = styled.button` //Botao de Autenticação
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  background-color: #FF9B50;
  border-radius: 5px;
  color: black;
  width: 120px;

  .loginBtn:hover{
    background-color: blue;
  }
`;


export const PageContent = styled.div`
    height: 800px;
    background-color: #222;
    display:flex;
    flex-direction: column;
    overflow-x: hidden;
    
    & .container {
        position: relative;
        height: 100%;
        left: 15%;

    }

    & .menuInterno {

        width: 70%;
        height: 60%;
        margin-top: 10rem;
        margin-inline: auto;
        position: absolute;


        background-color: black;
        border:solid;
        border-radius: 5px;
        border-color: #ff9b50;
        border-width:3px;

        @media (max-width: 768px) {
            margin-top: 15rem;
            height: 70%;
        }

    }

    & h1 {
        position: absolute;
        top: 90px;
        left: 0;
        font-size: 40px;
        color: #ff9b50;
        font-family: 'Sansation Light';

        @media (max-width: 768px) {
            top: 11rem;
        }
    }

    & h2 {
        font-size: 30px;
        color: #ff9b50;
        font-family: 'Sansation Light';
    }


`