import { createGlobalStyle } from "styled-components";
import { data } from "../../data/homepage";

export const GlobalStyles = createGlobalStyle`

    // GLOBAL RESET
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    // GLOBAL STYLES
    html {
        font-size: 100%;
    }
    
    body {
        // SMALL SIZE DEVICES
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 1rem; // 16px
        font-weight: 500; // MED
        line-height: 1.625;
        color: ${data.color.text};
        background-color: ${data.color.wht};

        // MEDIUM & LARGE SIZE DEVICES
        @media screen and (min-width: ${data.breakpoint.md}) {
            font-size: 1.125rem; // 18px
            line-height: 1.56;
        }
    }

    h1,
    h2,
    h3 {
        line-height: 1.25;
        color: ${data.color.dark};
    }

    h1 {
        // SMALL SIZE DEVICES
        font-size: 2.25rem; // 36px
        margin-bottom: 1rem; // 16px

        // MEDIUM SIZE DEVICES
        @media screen and (min-width: ${data.breakpoint.md}) {
            font-size: 2.75rem; // 44px
            margin-bottom: 1.625rem; // 26px
        }

        // LARGE SIZE DEVICES
        @media screen and (min-width: ${data.breakpoint.lg}) {
            font-size: 3.5rem; // 56px
            margin-bottom: 1.5rem; // 24px
        }
    }

    h2 {
        // SMALL SIZE DEVICES
        font-size: 1.625rem; // 26px
        margin-bottom: 1.5rem; // 24px

        // MEDIUM SIZE DEVICES
        @media screen and (min-width: ${data.breakpoint.md}) {
            font-size: 2rem; // 32px
        }

        // LARGE SIZE DEVICES
        @media screen and (min-width: ${data.breakpoint.lg}) {
            font-size: 2.5rem; // 40px
            margin-bottom: 2.125rem; // 34px
        }
    }

    img {
        display: block;
        max-width: 100%;
    }
`