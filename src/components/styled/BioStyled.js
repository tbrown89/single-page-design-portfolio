import styled from "styled-components";
import { data } from "../../data/homepage";

export const BioStyled = styled.div`

    //  LAYOUT ON SMALL SIZE DEVICES
    text-align: center;
    max-width: 450px;
    margin: 0 auto 6.25rem; // 100px

    // LAYOUT ON MEDIUM SIZE DEVICES
    @media screen and (min-width: ${data.breakpoint.md}) {
        display: flex;
        align-items: center;
        text-align: left;
        max-width: 100%;
        margin-bottom: 7.5rem; // 120px

        &>* {
            flex-basis: 100%;
        }
    }

    // LAYOUT ON LARGE SIZE DEVICES
    @media screen and (min-width: ${data.breakpoint.lg}) {
        margin-bottom: 5.5rem; // 88px
    }

    img {
        width: 300px;
        margin: 0 auto 2.5rem;

        @media screen and (min-width: ${data.breakpoint.md}) {
            position: relative;
            right: 24%;
            min-width: 364px;
            margin-bottom: 0;
        }

        @media screen and (min-width: ${data.breakpoint.lg}) {
            left: 0;
            width: 445px;
            margin: 0;
        }
    }

    p {
        // LAYOUT ON SMALL & MEDIUM SIZE DEVICES
        margin-bottom: 1.5rem; // 24px

        // LAYOUT ON LARGE SIZE DEVICES
        @media screen and (min-width: ${data.breakpoint.lg}) {
            margin-bottom: 2rem;
        }
    }
`