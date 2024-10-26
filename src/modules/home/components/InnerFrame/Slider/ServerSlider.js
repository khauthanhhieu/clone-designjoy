import { cloneElement } from "react";

const ServerSlider = async ({ children }) => {
    const data = await fetch(`${process.env.URL}/api/slider-item`)
        .then(data => data.json());

    return (
        <div className="slider">
            {cloneElement(children, { data })}
        </div>
    );
};

export default ServerSlider;