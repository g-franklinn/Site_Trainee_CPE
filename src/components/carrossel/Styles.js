import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const StyleCarrossel = styled.div`
    width: 800px;
    margin: auto;
    padding-bottom: 20rem;
    margin-bottom: -5rem;
    z-index: 1;
    
    @media (max-width: 1000px) and (min-width: 768px) {
        width: 600px;
    }

    @media (max-width: 768px) {
        width: 400px;
    }


`