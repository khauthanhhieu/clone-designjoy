import Image from "next/image";
import WebflowImage from "@/modules/home/assets/images/Webflow.svg";
import DividerImage from "@/modules/home/assets/images/divider.svg"
import { LinkButton } from "@/modules/home/components/Elements";
import LeftImage from "@/modules/home/assets/images/Group-78.svg";
import RightImage from "@/modules/home/assets/images/Group-61.svg";
import KevinImage from "@/modules/home/assets/images/Group 8-p-500.png";

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
                <div className="grid lg:grid-cols-2 gap-14 mt-20">
                    <div className="bg-white rounded-xl p-12">
                        <p className="sm:max-w-[430px]">“Design is everything, and these guys have nailed it.”</p>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-sm m-0">
                                    <span className="block">Kevin O'Leary</span>
                                    <span className="block">Shark Tank</span>
                                </p>
                            </div>
                            <div className="w-1/2">
                                <img src={KevinImage.src} alt="Kevin O'Leary" className="max-w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div>
                            <h5 className="font-medium">Totally async</h5>
                            <p className="text-base">Don't like meetings? We don't either; so much so that we've outlawed them completely.</p>
                        </div>
                        <div>
                            <h5 className="font-medium">Manage with Trello</h5>
                            <p className="text-base">Manage your design board using Trello. View active, queued and completed tasks with ease.</p>
                        </div>
                        <div>
                            <h5 className="font-medium">Invite your team</h5>
                            <p className="text-base">Invite your entire team, so anyone can submit requests and track their progress.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className="image-left" src={LeftImage.src} />
            <img className="image-right" src={RightImage.src} />
        </div>
    )
};

export default Quote;
