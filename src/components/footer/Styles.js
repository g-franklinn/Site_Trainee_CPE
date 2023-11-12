import styled from "styled-components";
import '../../font.css';

export const Footer = styled.div`
    height: 8rem;
    background-color: #000;
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index:1;

    & p {
    color: #fff;
    font-size: 16px;
    font-family: 'Sansation Light';
    text-align: center;
    }

    & .SocialMedia {
        justify-content: center;
        margin-inline:30%;
        gap:3%;
        display: flex;
        flex-direction:line;
        margin-top:15px;
        margin-bottom:10px;
    }

    & .icon {
        height:40px;
        width:40px;
        user-select: none;
        filter:contrast(0);
        &:hover {
            filter:contrast(1);
        }
    }
`