import { Refresh2, OpenFolder, ThumbsUp } from "@/modules/core/components/Lottie";
import { LinkButton } from "@/modules/home/components/Elements";
import LeftImage from "@/modules/home/assets/images/Group-77.svg";
import RightImage from "@/modules/home/assets/images/Group-76.svg";

const HowItWorks = () => {
    return (
        <div className="how-it-works">
            <div className="content">
                <div className="header">
                    <h2>We didn’t reinvent the wheel. Just design.</h2>
                    <p>Design as you know it is out the door. Design as you want it just arrived.</p>
                </div>
                <div className="benifits">
                    <div>
                        <div className="benifit__icon subscrobe">
                            <Refresh2 className="w-[60px]" />
                        </div>
                        <span>Subscribe to a plan & request as many designs as you'd like.</span>
                    </div>
                    <div>
                        <div className="benifit__icon folder">
                            <OpenFolder className="w-[100px]" />
                        </div>
                        <span>Receive your design within two business days on average.</span>
                    </div>
                    <div>
                        <div className="benifit__icon thum">
                            <ThumbsUp className="top-[-17px] relative" />
                        </div>
                        <span>We'll revise the designs until you're 100% satisfied.</span>
                    </div>
                </div>
                <LinkButton asBlock>
                    See plans
                </LinkButton>
            </div>
            <img className="image-left" src={LeftImage.src} />
            <img className="image-right" src={RightImage.src} />
        </div>
    )
};

export default HowItWorks;