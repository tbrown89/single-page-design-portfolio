import { IntroStyled } from "./styled/IntroStyled";
import { data } from "../data/homepage";

const Intro = () => {
    return (
        <IntroStyled>
            <h1>{data.intro.title}</h1>
            <p>{data.intro.desc}</p>
        </IntroStyled>
    )
}

export default Intro
