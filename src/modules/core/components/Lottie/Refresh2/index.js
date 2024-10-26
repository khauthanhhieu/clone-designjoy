"use client"

import Lottie from "lottie-react";
import animationData from "./animationData.json";

const Refresh2 = (props) => {
    return (
        <Lottie
            animationData={animationData}
            {...props}
        />
    )
};

export default Refresh2;
