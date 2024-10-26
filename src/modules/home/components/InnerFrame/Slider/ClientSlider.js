"use client";

import { useRef } from "react";

const ClientSlider = ({ data }) => {
    const ref = useRef();

    const handleScroll = () => {
        if (ref.current) {
            const { offsetTop } = ref.current;
            console.log(offsetTop);
        }
    }

    return (
        <div className="slider" onScroll={handleScroll} ref={ref}>

        </div>
    );
};

export default ClientSlider;
