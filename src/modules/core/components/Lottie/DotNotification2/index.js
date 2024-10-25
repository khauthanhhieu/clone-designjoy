"use client"

import Lottie from "lottie-react";
import animationData from "./animationData.json";

const DotNotification2 = (props) => {
    return (
        <Lottie
            animationData={animationData}
            style={{ height: "30px", width: "30px" }}
            {...props}
        />
    )
};

export default DotNotification2;
