"use client"

import Lottie from "lottie-react";
import animationData from "./animationData.json";

const Smile = (props) => {
    return <Lottie animationData={animationData} {...props} />
};

export default Smile;
