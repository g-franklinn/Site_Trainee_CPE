import styled from "styled-components";
import '../../font.css';

export const Footer = styled.div`
    height: 7rem;
    background-color: #000;
    display: flex;
    justify-content: center;
    flex-direction: column;

    & p {
    color: #fff;
    font-size: 16px;
    font-family: 'Sansation Light';
    text-align: center;
    }

    & .SocialMedia {
        justify-content: center;
        gap:2%;
        display: flex;
        flex-direction:line;
    }
`