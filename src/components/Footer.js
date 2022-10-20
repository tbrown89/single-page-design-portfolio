import { data } from "../data/homepage";
import { FooterStyled } from "./styled/FooterStyled";
import Logo from "./Logo";
import { Button1 } from "./styled/ButtonStyled";

const Footer = () => {
    return (
        <FooterStyled>
            <Logo />
            <Button1>
                {data.headerFooter.button.text}
            </Button1>
        </FooterStyled>
    )
}

export default Footer