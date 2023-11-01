import styled from "styled-components";
import '../../font.css';

export const Header = styled.div`

    width: 100%;
    height: 11.75rem;
    background: #000;

    & h1 {
        color: #FF9B50;
        text-align: center;
        font-family: 'Sansation Light';
        font-size: 88px;
        font-weight: 200;
        padding-top: 2rem;
        padding-bottom: 1.5rem;
        user-select: none;

        @media (max-width: 768px) {
            font-size: 65px;
        }
    }

    & .header-menu {
        text-align: center;
        font-family: 'Sansation Light';
        height: 30px;
        background: #EEE;

        @media (max-width: 768px) {
            margin-top: 21px;
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