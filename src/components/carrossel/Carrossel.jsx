import React from "react";
import { useState, useEffect } from 'react';
import HeroSlider, {Slide} from 'hero-slider';
import { StyleCarrossel } from "./Styles";
import imagem1 from "../../assets/Carrossel1.jpeg";
import imagem2 from "../../assets/Carrossel2.jpeg";
import imagem3 from "../../assets/Carrossel3.jpeg";



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