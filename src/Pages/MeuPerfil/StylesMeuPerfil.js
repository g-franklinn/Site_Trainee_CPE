import styled from "styled-components";

export const PageContent = styled.div`
    height: 800px;
    background-color: #222;
    display:flex;
    flex-direction: column;
    overflow-x: hidden;

    @media (max-width: 768px) {
            height: 1100px;
        }
    

    & .container {
        position: relative;
        height: 100%;
        left: 15%;

    }

    & .containerEditar {
        display: flex;
        flex-wrap: wrap;
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
        }

    }

    & .infoUsuarios {
        margin: 10%;
    }

    & h1 {
        position: absolute;
        top: 90px;
        left: 0;
        font-size: 40px;
        color: #ff9b50;
        font-family: 'Sansation Light';

        @media (max-width: 768px) {
            top: 10rem;
        }
    }

    & h2 {
        font-size: 26px;
        color: #ff9b50;
        font-family: 'Sansation Light';
        font-weight:100;

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
        margin: auto;
        height: 50px;
        width: 130px;
    }


`