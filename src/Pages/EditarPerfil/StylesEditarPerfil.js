import styled from "styled-components";
import '../../font.css';

//Botoes, input e formulario

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
    height: 1000px;
    background-color: #222;
    display:flex;
    flex-direction: column;
    overflow-x: hidden;
    

    & .container {
        position: relative;
        height: 100%;
        left: 15%;

    }

    & .containerUsuarios {
        margin: auto;
        margin-left: 20%;
    }


    & .menuInterno {

        width: 70%;
        height: 70%;
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

    & .infoUsuarios {
        margin: 0 auto;
        margin-top: 7%;
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
        font-size: 26px;
        color: #ff9b50;
        font-family: 'Sansation Light';
        font-weight:100;
        padding: 10px;

        @media (max-width: 768px) {
            font-size: 22px;
        }
    }

    & p {
        font-size: 30px;
        color: white;
        font-family: 'Sansation Light';
        font-weight:600;

        @media (max-width: 768px) {
            font-size: 20px;
        }
    }

    & button {
        margin-top: 20px;
        height: 50px;
        width: 180px;
    }


`