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
                autoplay
                backgroundSize="100% 100%"
                slidingDuration={20}
                slidingDelay={100}
                shouldAutoplay={true}
                shouldDisplayButtons={true}
                autoplayDuration={100}
                slidingAnimation="left_to_right"
                initialSlide={1}
                onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
                onChange={nextSlide => console.log("onChange", nextSlide)}
                onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.33)",
                    border: "3px solid",
                    borderColor: "#ff9b50"
                }}
            >
                <Slide
                    background={{
                        backgroundImageSrc: imagem1,
                        backgroundAttachment: "fixed",
                        backgroundSize: '100% 100%',
                        backgroundImageSizes: "cover",
                    }}
                />
                <Slide
                    background={{
                        backgroundImageSrc: imagem2,
                        backgroundAttachment: "fixed",
                        backgroundSize: '100% 100%',
                        backgroundImageSizes: "cover" 
                    }}
                />
                <Slide
                    background={{
                        backgroundImageSrc: imagem3,
                        backgroundAttachment: "fixed",
                        backgroundSize: '100% 100%',
                        backgroundImageSizes: "cover" 
                    }}
                />
            </HeroSlider>
        </StyleCarrossel>
    )
}

export default Carrossel;