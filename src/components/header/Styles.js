import styled from "styled-components";
import '../../font.css';

export const Header = styled.div`

    & .header-title {
        display:flex;
        height:150px;
        background:black;
        width:100%;
        overflow: hidden;


        @media (max-width: 628px) {
            height:180px;
        }
    }

    & .guitar-icon {
        width:22rem;
        margin-left:-15px;
        user-select: none;



        
        @media (max-width: 628px) {
            margin-bottom:-45px;
        }
    }
  
    & h1 {
        width:max-content;
        color: #FF9B50;
        align-items: end;
        font-family: 'Sansation Light';
        font-size: 85px;
        font-weight: 200;
        margin:auto;
        user-select: none;

        @media (min-width: 1920px) {
            margin-left:20%;
        }

        @media (max-width: 868px) {
            font-size: 60px;
            margin-left:0px;
        }
    }

    & .header-menu {
        width: 100%;
        text-align: center;
        font-family: 'Sansation Light';
        height: 30px;
        background: #EEE;
        padding-inline:10%;
        z-index: 1;


        @media (max-width: 768px) {
            display:flex;
            flex-direction:column;
            height:150px;  
        }
    }

    & a {
        text-decoration: none;
        font-size: 20px;
        color: black;
        top:5px;
        margin-inline: 2%;
        padding-inline:2%;
        position:relative;
        user-select: none;

        
        &:hover{
            background-color: #CDCDCD;
            font-weight: 600;
            text-decoration-line:underline;
            top:5px;
                        
        }

        @media (max-width: 768px) {
            margin: 0 28px 5px 30px;
            width:fit-content;
            display: inline-flex;
            padding-bottom:2px;
            margin-inline:auto;
        }
    }

    @media (max-width: 768px) {
        flex-direction:column;
        position:relative;
    }
`