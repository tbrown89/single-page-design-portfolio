import styled from "styled-components";
import { data } from "../../data/homepage";

export const IntroStyled = styled.section`
    
    // SMALL SIZE DEVICES
    text-align: center;
    margin-bottom: 2rem;

    // MEDIUM SIZE DEVICES
    @media screen and (min-width: ${data.breakpoint.md}) {
        margin-bottom: 4rem;
    }

    // LARGE SIZE DEVICES
    @media screen and (min-width: ${data.breakpoint.lg}) {
        margin-bottom: 5rem;
    }

    // INTRO PARAGRAPH
    p {
        
        // SMALL SIZE DEVICES
        width: 80%;
        max-width: 545px;
        margin: 0 auto;

        // MEDIUM SIZE DEVICES
        @media screen and (min-width: ${data.breakpoint.md}) {
            max-width: 600px;
        }

        // LARGE SIZE DEVICES
        @media screen and (min-width: ${data.breakpoint.lg}) {
            max-width: 730px;
        }
    }
`