import styled from "styled-components";
import { data } from "../../data/homepage";

const ButtonBase = styled.button`

    // SMALL SIZE DEVICES
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem; // 14px
    font-weight: 700; // BOLD
    height: 2.75rem; // 44px
    padding: 0 1.75rem; // 28px
    border-radius: 1.75rem; // 28px
    border: none;
    outline: none;

    &:hover {
        cursor: pointer;
    }

    // MEDIUM & LARGE SIZE DEVICES
    @media screen and (min-width: ${data.breakpoint.md}) {
        font-size: 1rem; // 16px
        height: 3.5rem; // 56px
        padding: 0 2.8125rem; // 45px
    }
`

// BUTTON 1
export const Button1 = styled(ButtonBase)`
    color: ${data.color.wht};
    background-color: ${data.color.dark};

    &:hover {
        background-color: ${data.color.acc1};
    }
`

// BUTTON 2
export const Button2 = styled(ButtonBase)`
    color: ${data.color.wht};
    background-color: ${data.color.acc4};

    &:hover {
        background-color: ${data.color.acc2};
    }
`

// BUTTON ARROW
export const ButtonArrow = styled(ButtonBase)`
    width: 4rem; // 64px
    height: 4rem; // 64px
    padding: 0;
    border-radius: 50%;
    background-color: ${data.color.dark};

    &:hover {
        background-color: ${data.color.acc1};
    }
`