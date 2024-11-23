import Image from "next/image";
import { LinkButton } from "@/modules/home/components/Elements";
import DividerImage from "@/modules/home/assets/images/divider.svg";
import TagList from "./TagList";
import WorkFlex from "./WorkFlex";

const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <div className="content">
                    <div className="header">
                        <Image
                            src={DividerImage.src}
                            alt="divider"
                            width={15}
                            height={150}
                            className="mx-auto my-14 mt-6"
                        />
                        <h2>Apps, websites, logos & more</h2>
                    </div>
                    <TagList />
                    <WorkFlex />
                    <LinkButton
                        href="https://www.figma.com/proto/wbWTRa1jCey4uhInRAmH1r/Latest-Projects?page-id=0%3A1&type=design&node-id=906-2343&viewport=450%2C721%2C0.13&t=ZYPXbxSFD1m31WCi-1&scaling=min-zoom"
                        asBlock
                    >
                        See more work
                    </LinkButton>
                </div>
            </div>
        </div>
    )
};

export default Services;
