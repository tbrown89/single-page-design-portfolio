import styled from "styled-components";
import { data } from "../../data/homepage";

export const ConsultationStyled = styled.section`
    text-align: center;
    padding: 3rem 1.5rem;
    border-radius: 10px;
    background-color: ${data.color.dark};

    @media screen and (min-width: ${data.breakpoint.lg}) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: left;
        height: 320px;
    }

    h2,
    p {
        color: ${data.color.wht};
        margin: 0 auto 1.5rem;

        @media screen and (min-width: ${data.breakpoint.md}) {
            margin: 0 auto 1.625rem;
        }
    }

    p {
        max-width: 540px;
    }
`