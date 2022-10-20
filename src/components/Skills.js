import {
    GraphicDesign,
    UiUx,
    Apps,
    Illustrations,
    Photography,
    MotionGraphics
} from "./styled/FeaturesCard";
import { data } from "../data/homepage";
import { Grid } from "./styled/Grid";

const Skills = () => {
    return (
        <section>
            <Grid>
                <GraphicDesign>
                    <img src={data.skills.graphicDesign.img}
                        alt={data.skills.graphicDesign.title}
                    />
                    <h2>{data.skills.graphicDesign.title}</h2>
                </GraphicDesign>
                <UiUx>
                    <img src={data.skills.uiUx.img}
                        alt={data.skills.uiUx.title}
                    />
                    <h2>{data.skills.uiUx.title}</h2>
                </UiUx>
                <Apps>
                    <img src={data.skills.apps.img}
                        alt={data.skills.apps.title}
                    />
                    <h2>{data.skills.apps.title}</h2>
                </Apps>
                <Illustrations>
                    <img src={data.skills.illustrations.img}
                        alt={data.skills.illustrations.title}
                    />
                    <h2>{data.skills.illustrations.title}</h2>
                </Illustrations>
                <Photography>
                    <img src={data.skills.photography.img}
                        alt={data.skills.photography.title}
                    />
                    <h2>{data.skills.photography.title}</h2>
                </Photography>
                <MotionGraphics>
                    <img src={data.skills.motionGraphics.img}
                        alt={data.skills.motionGraphics.title}
                    />
                    <h2>{data.skills.motionGraphics.title}</h2>
                </MotionGraphics>
            </Grid>
        </section>
    )
}

export default Skills