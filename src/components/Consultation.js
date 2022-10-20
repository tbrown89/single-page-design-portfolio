import { ConsultationStyled } from "./styled/ConsultationStyled";
import { data } from "../data/homepage";
import { Button2 } from "./styled/ButtonStyled";

const Consultation = () => {
    return (
        <ConsultationStyled>
            <div>
                <h2>{data.consultation.title}</h2>
                <p>{data.consultation.body}</p>
            </div>
            <div>
                <Button2>
                    {data.consultation.button.text}
                </Button2>
            </div>
        </ConsultationStyled>
    )
}

export default Consultation