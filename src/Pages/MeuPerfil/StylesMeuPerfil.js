import styled from "styled-components";

export const PageContent = styled.div`
    height: 40rem;
    background-color: #222;
    display:flex;
    flex-direction: column;

    & .container {
        margin-top:3rem;
        margin-inline:auto;
        height: 100%;
        width:100%;
    }

    & .menuInterno {

        width: 60%;
        height: 65%;
        padding-top:2rem;
        margin-inline: auto;   

        background-color: black;
        border:solid;
        border-radius: 5px;
        border-color: #ff9b50;
        border-width:3px;

        @media (max-width: 768px) {
            height: 55%;
        }
    }

    & h1 {
        margin: 2rem auto 10px 20%;
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
        margin-left:5%;

        @media (max-width: 768px) {
            font-size: 22px;
        }
    }

    & p {
        font-size: 30px;
        color: white;
        font-family: 'Sansation Light';
        font-weight:100;
        margin-left:10%;

        @media (max-width: 768px) {
            font-size: 20px;
            padding:1px;
        }
    }

    & button {
        margin: auto;
        margin-left:75%;
        height: 40px;
        width: 120px;
        @media(max-width:768px) {
            margin-top:1rem;
            margin-left:30%;
        }
    }


`