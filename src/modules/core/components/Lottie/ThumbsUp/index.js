"use client"

import Lottie from "lottie-react";
import animationData from "./animationData.json";

const ThumbsUp = (props) => {
    return (
        <Lottie
            animationData={animationData}
            {...props}
        />
    )
};

export default ThumbsUp;
