import Image from "next/image";
import WebflowImage from "@/modules/home/assets/images/Webflow.svg";
import DividerImage from "@/modules/home/assets/images/divider.svg"
import { LinkButton } from "@/modules/home/components/Elements";
import LeftImage from "@/modules/home/assets/images/Group-78.svg";
import RightImage from "@/modules/home/assets/images/Group-61.svg";

const Quote = () => {
    return (
        <div className="quote">
            <div className="content">
                <div className="header">
                    <p className="mb-8 text-sm">They said it best</p>
                    <h3>“Designjoy shows that they know the art of subtlety.”</h3>
                </div>
                <Image
                    src={WebflowImage.src}
                    alt="Webflow"
                    width={196}
                    height={33}
                    className="mx-auto mt-11"
                />
                <Image
                    src={DividerImage.src}
                    alt="divider"
                    width={15}
                    height={150}
                    className="mx-auto my-14"
                />
                <div className="better">
                    <h2>It's “you'll never go back” better</h2>
                    <p className="better__sub">
                        Designjoy replaces unreliable freelancers and expensive agencies for one flat monthly fee,
                        with designs delivered so fast that it will blow your mind.
                    </p>
                    <LinkButton asBlock>See plans</LinkButton>
                </div>
                <div className="detail">

                </div>
            </div>
            <img className="image-left" src={LeftImage.src} />
            <img className="image-right" src={RightImage.src} />
        </div>
    )
};

export default Quote;
