"use client"

import Lottie from "lottie-react";
import animationData from "./animationData.json";

const Fingerprint = (props) => {
    return (
        <Lottie
            animationData={animationData}
            {...props}
        />
    )
};

export default Fingerprint;
