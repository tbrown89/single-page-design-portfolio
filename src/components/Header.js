import { data } from "../data/homepage";
import { HeaderStyled } from "./styled/HeaderStyled";
import Logo from "./Logo";
import { Button1 } from "./styled/ButtonStyled";

const Header = () => {
    return (
        <HeaderStyled>
            <Logo />
            <Button1>
                {data.headerFooter.button.text}
            </Button1>
        </HeaderStyled>
    )
}

export default Header