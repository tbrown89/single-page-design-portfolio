import { data } from "../data/homepage";
import { useRef } from "react";
import Slider from "react-slick";
import { CarouselStyled, Flex } from "./styled/CarouselStyled";
import { ButtonArrow } from "./styled/ButtonStyled";


const Carousel = () => {

    const sliderRef = useRef(null)

    const settings = {
        dots: false,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    centerMode: true
                }
            }
        ]
    };

    return (
        <CarouselStyled>
            <h2>{data.slider.title}</h2>
            <Slider {...settings} ref={sliderRef}>
                {data.slider.images.map(image => (
                    <div>
                        <img src={image} alt="" />
                    </div>
                ))}
            </Slider>
            <Flex>
                <ButtonArrow onClick={() => sliderRef.current.slickPrev()}>
                    <img
                        src={data.slider.button.left.img}
                        alt={data.slider.button.left.alt}
                    />
                </ButtonArrow>
                <ButtonArrow onClick={() => sliderRef.current.slickNext()}>
                    <img
                        src={data.slider.button.right.img}
                        alt={data.slider.button.right.alt}
                    />
                </ButtonArrow>
            </Flex>
        </CarouselStyled>
    )
}

export default Carousel