import styled from "styled-components";
import { data } from "../../data/homepage";

export const CarouselStyled = styled.div`

    // LAYOUT ON SMALL SIZE DEVICES
    margin-bottom: 6.25rem; // 100px

    // LAYOUT ON MEDIUM SIZE DEVICES
    @media screen and (min-width: ${data.breakpoint.md}) {
        max-width: 1440px;
        margin: 0 auto 7.5rem; // 120px
    }

    // LAYOUT ON LARGE SIZE DEVICES
    @media screen and (min-width: ${data.breakpoint.lg}) {
        margin-bottom: 5.5rem; // 88px
    }

    h2 {
        font-size: 1.5rem; // 24px
        text-align: center;
        margin-bottom: 2rem;

        // LAYOUT ON MEDIUM & LARGE SIZE DEVICES
        @media screen and (min-width: ${data.breakpoint.md}) {
            font-size: 2rem;
            margin-bottom: 3.5rem; // 56px
        }
    }

    .slick-slide {
        padding: 0 .5rem;

        @media screen and (min-width: ${data.breakpoint.md}) {
            padding: 0 1rem;
        }
    }

    img {
        border-radius: 10px;
    }
`

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;

    @media screen and (min-width: ${data.breakpoint.md}) {
        margin-top: 3.5rem;
    }
`