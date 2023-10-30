import styled from "styled-components";


export const Header = styled.div`
    width: 100%;
    height: 11.25rem;
    background: #000;


    & h1 {
        color: #FF9B50;
        text-align: center;
        font-family: Sansation Light;
        font-size: 88px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        padding-top: 20px;
    }

    & .header-menu {
        margin-top: -35px;
        text-align: center;
        height: 100px;
        background: #EEE;
    }

    & a {
        text-decoration: none;
        font-size: 20px;
        position: relative;
        top: 5px;
        margin: 30px;
    }
`

export const PageContent = styled.div`
    height: 1200px;
    background-color: #222;
`

export const Footer = styled.div`
    height: 120px;
    background-color: #000000;

    & p {
    color: #fff;
    font-size: 16px;
    text-align: center;
    padding-top: 70px;
    }

`
