"use client"

import Lottie from "lottie-react";
import animationData from "./animationData.json";

const OpenFolder = (props) => {
    return (
        <Lottie
            animationData={animationData}
            {...props}
        />
    )
};

export default OpenFolder;
