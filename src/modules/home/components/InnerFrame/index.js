import BgImage from "@/modules/home/assets/images/dots.svg";
import "./style.scss";

const InnerFrame = ({ children }) => {
    return (
        <div className="site-wrapper">
            <div className="inner-frame" style={{ backgroundImage: `url(${BgImage.src})` }}>
                {children}
            </div>
        </div>
    )
};

export default InnerFrame;

export { default as Hero } from "./Hero";