import styled from "styled-components";
import { data } from "../../data/homepage";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
    max-width: 545px;
    margin: 0 auto 6.25rem; // 100px

    @media screen and (min-width: ${data.breakpoint.md}) {
    // LAYOUT MEDIUM SIZE DEVICES
    grid-template-columns: repeat(4, 1fr);
    max-width: 100%;
}

    @media screen and (min-width: ${data.breakpoint.lg}) {
    // LAYOUT LARGE SIZE DEVICES
    grid-template-columns: repeat(6, 1fr);
}
`