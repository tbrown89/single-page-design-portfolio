import { BioStyled } from "./styled/BioStyled";
import { data } from "../data/homepage";
import { Button2 } from "./styled/ButtonStyled";

const Bio = () => {
    return (
        <BioStyled>
            <div>
                <img src={data.bio.img} alt="Amy" />
            </div>
            <div>
                <h2>{data.bio.title}</h2>
                <p>{data.bio.body}</p>
                <Button2>
                    {data.bio.button.text}
                </Button2>
            </div>
        </BioStyled>
    )
}

export default Bio