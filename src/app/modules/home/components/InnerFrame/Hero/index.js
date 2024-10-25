import { LinkButton } from "@/app/modules/home/components/Elements";
import TailImage from "@/app/modules/home/assets/images/tail.svg";
import BallImage from "@/app/modules/home/assets/images/ball.svg";
import { DotNotification2 } from "@/app/modules/core/components/Lottie";

const Hero = () => {
    return (
        <div className="hero">
            <div className="content">
                <h1>A design agency with a twist</h1>
                <p>Design subscriptions for everyone. Pause or cancel anytime.</p>
                <LinkButton href="#plan" asBlock>
                    See plans
                </LinkButton>
                <div className="available-component">
                    <DotNotification2 />
                    <span className="text-xs">Available now</span>
                </div>
            </div>
            <img className="image-left" src={TailImage.src} />
            <img className="image-right" src={BallImage.src} />
        </div>
    )
}

export default Hero;
