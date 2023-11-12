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
        z-index:1;
    }

    & .menuInterno {

        width: 60%;
        height: 65%;
        padding-top:2rem;
        margin-inline: auto;   
        text-align: center;

        background-color: black;
        border:solid;
        border-radius: 5px;
        border-color: #ff9b50;
        border-width:3px;

        @media (max-width: 768px) {
            width: 90%;
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
        margin-left:35%;
        text-align: left;

        @media (max-width: 768px) {
            margin-left:20%;
            font-size: 22px;
        }
    }

    & p {
        font-size: 30px;
        color: white;
        font-family: 'Sansation Light';
        font-weight:100;
        margin-left:37%;
        text-align: left;

        @media (max-width: 768px) {
            margin-left:25%;
            font-size: 20px;
            padding:1px;
        }
    }

    & button {
        margin: auto;
        margin-top: 30px;
        height: 40px;
        width: 120px;
        @media(max-width:768px) {
            margin-top:1rem;
        }
    }

    & img {
        user-select: none;
        overflow-x: hidden;
    }

    & .email{
        @media(max-width:768px) {
            font-size: 16px;
        }
    }

    & .microfone {
        width:90px; 
        margin: 50px auto auto 3%;
        position:absolute;
        rotate:-5deg;    

        @media (max-width: 768px) {
            width: 15%;
        } 
    }

    & .nota1 {
        width:100px; 
        margin: 450px auto auto 5%;
        position:absolute;
        rotate:-5deg;
        z-index:0;

        @media (max-width: 768px) {
            width: 15%;
        }
    }
    
    & .nota5 {
        width:70px; 
        margin: 100px auto auto 90%;
        position:absolute;
        rotate:-5deg;  

        @media (max-width: 768px) {
            width: 12%;
        }
    }

    
    & .teclado {
        width:150px;
        margin: 15rem auto 0 10%;
        position:absolute;
        rotate:-10deg;  
        z-index:0;
    }
    

    & .saxofone {
        width:150px; 
        margin: 350px auto auto 85%;
        position:absolute;
        rotate:40deg;    

        @media (max-width: 768px) {
            width: 15%;
        } 
    }

`