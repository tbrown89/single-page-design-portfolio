import styled from "styled-components";
import { data } from "../../data/homepage";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    margin-bottom: 1rem;

    // MEDIUM & LARGE SIZE DEVICES
    @media screen and (min-width: ${data.breakpoint.md}) {
        padding: 2.125rem 0; // 34px
        margin-bottom: 2rem; // 30px
    }

    // LOGO
    img {
        // SMALL SIZE DEVICES
        max-width: 3rem; // 48px

        // MEDIUM & LARGE SIZE DEVICES
        @media screen and (min-width: ${data.breakpoint.md}) {
            max-width: 4rem; // 64px
        }
    }
`