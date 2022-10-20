import styled from "styled-components";
import { data } from "../../data/homepage";

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0 2rem 0;

    @media screen and (min-width: ${data.breakpoint.md}) {
        padding: 3.5rem 0;
    }

    img {
        width: 3rem; // 48px

        @media screen and (min-width: ${data.breakpoint.md}) {
            width: 4rem; // 64px
        }
    }
`