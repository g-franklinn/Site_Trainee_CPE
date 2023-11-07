import styled from "styled-components";
import '../../font.css';

export const PageContent = styled.div`
    height: 1250px;
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
        height: 80%;
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

`