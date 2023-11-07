import React from "react";
import HeroSlider, {Slide} from 'hero-slider';
import { StyleCarrossel } from "./Styles";

const imagem1 = "https://i.imgur.com/RqE65US.jpeg";
const imagem2 = "https://i.imgur.com/Rlcq1lB.jpeg";
const imagem3 = "https://i.imgur.com/eGura2z.jpeg";

function Carrossel() {
    return (
        <StyleCarrossel>
            <HeroSlider
                height="60vh"
                slidingDuration={250}
                slidingDelay={100}
                shouldAutoplay={true}
                shouldDisplayButtons={true}
                autoplayDuration={5000}
                slidingAnimation="left_to_right"
                orientation="horizontal"
                initialSlide={1}
                onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
                onChange={nextSlide => console.log("onChange", nextSlide)}
                onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.33)"
                }}
            >
                <Slide
                    background={{
                        backgroundImageSrc: imagem1,
                        backgroundAttachment: "fixed"
                    }}
                />
                <Slide
                    background={{
                        backgroundImageSrc: imagem2,
                        backgroundAttachment: "fixed"
                    }}
                />
                <Slide
                    background={{
                        backgroundImage: imagem3,
                        backgroundAttachment: "fixed"
                    }}
                />
            </HeroSlider>
        </StyleCarrossel>
    )
}

export default Carrossel;