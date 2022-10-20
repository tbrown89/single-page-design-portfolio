import styled from "styled-components";
import { data } from "../../data/homepage";

export const Container = styled.div`
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto;

    // MEDIUM & LARGE SIZE DEVICES
    @media screen and (min-width: ${data.breakpoint.md}) {
        max-width: 74.375rem; // 1190px
        padding: 0 2.5rem; // 40px
    }
`