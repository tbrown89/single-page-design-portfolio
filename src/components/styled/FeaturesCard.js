import styled from "styled-components";
import { data } from "../../data/homepage";

// FEATURES CARDS BASE STYLES
export const FeaturesCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 0.5rem; // 8px

    img {
        align-self: flex-end;
    }

    h2 {
        font-size: 1.5rem; // 24px
        font-weight: 700; // BOLD
        color: ${data.color.wht};
        margin-bottom: 0;
    }
`

// CARD #1 - GRAPHIC DESIGN
export const GraphicDesign = styled(FeaturesCard)`
    gap: 5.875rem; // 94px
    background-color: ${data.color.acc1};
    grid-column: 1 / 3;

    // GRID LAYOUT ON MEDIUM & LARGE SIZE DEVICES
    @media screen and (min-width: ${data.breakpoint.md}) {
        grid-row: 1 / 3;
    }
`

// CARD #2 - UI/UX
export const UiUx = styled(FeaturesCard)`
    gap: 2.5rem; // 40px
    background-color: ${data.color.acc2};

    // GRID LAYOUT ON MEDIUM & LARGE SIZE DEVICES
    @media screen and (min-width: ${data.breakpoint.md}) {
        grid-column: 3 / 4;
    }
`

// CARD #3 - APPS
export const Apps = styled(FeaturesCard)`
    gap: 2.5rem;
    background-color: ${data.color.acc3};

    // GRID LAYOUT ON MEDIUM & LARGE SIZE DEVICES
    @media screen and (min-width: ${data.breakpoint.md}) {
        grid-column: 4 / 5;
    }
`

// CARD #4 - ILLUSTRATIONS
export const Illustrations = styled(FeaturesCard)`
    gap: 1rem;
    background-color: ${data.color.acc4};
    grid-column: 1 / 3;

    // GRID LAYOUT ON MEDIUM & LARGE SIZE DEVICES
    @media screen and (min-width: ${data.breakpoint.md}) {
        grid-column: 3 / 5;
        grid-row: 2 / 3;
    }
`

// CARD #5 - PHOTOGRAPHY
export const Photography = styled(FeaturesCard)`
    gap: 2.5rem;
    background-color: ${data.color.acc5};
    grid-column: 1 / 3;

    // GRID LAYOUT ON LARGE SIZE DEVICES
    @media screen and (min-width: ${data.breakpoint.lg}) {
        grid-column: 5 / 7;
        grid-row: 1 / 2;
    }
`

// CARD #6 - MOTION GRAPHICS
export const MotionGraphics = styled(FeaturesCard)`
    gap: 2.5rem;
    background-color: ${data.color.acc6};
    grid-column: 1 / 3;

    // GRID LAYOUT ON MEDIUM SIZE DEVICES
    @media screen and (min-width: ${data.breakpoint.md}) {
        grid-column: 3 / 5;
        grid-row: 3 / 4;
    }

    // GAP CHANGED TO FIT IN GRID CONTAINER AT LARGE SCREEN SIZE
    // GRID LAYOUT ON // GRID LAYOUT ON MEDIUM & LARGE SIZE DEVICESLARGE SIZE DEVICES
    @media screen and (min-width: ${data.breakpoint.lg}) {
        gap: 1rem;
        grid-column: 5 / 7;
        grid-row: 2 / 3;
    }
`