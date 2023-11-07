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
        width:20rem;
        margin-left:-15px;
        margin-bottom:-45px;
        user-select: none;
        
        
        
        @media (max-width: 628px) {
            margin-bottom:-45px;
        }
    }
  
    & h1 {
        width:max-content;
        color: #FF9B50;
        text-align:center;
        font-family: 'Sansation Light';
        font-size: 85px;
        font-weight: 200;
        margin:auto;
        user-select: none;


        @media (max-width: 868px) {
            font-size: 65px;
        }
    }

    & .header-menu {
        text-align: center;
        font-family: 'Sansation Light';
        height: 30px;
        background: #EEE;
        padding-inline:10%;



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