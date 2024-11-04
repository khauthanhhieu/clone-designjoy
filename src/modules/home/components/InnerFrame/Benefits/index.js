import Image from "next/image";
import DividerImage from "@/modules/home/assets/images/divider.svg";
import DynamicDashboardIcon from "@/modules/core/components/Lottie/DynamicDashboardIcon";
import { ArrowTop, Fingerprint, FlashIcon, MoneyFly, TickIcon } from "@/modules/core/components/Lottie";

const Benefits = () => {
    return (
        <div className="benefits">
            <div className="content">
                <div className="header">
                    <Image
                        src={DividerImage.src}
                        alt="divider"
                        width={15}
                        height={150}
                        className="mx-auto my-14 mt-6"
                    />
                    <h2>Membership benefits</h2>
                    <p className="header__sub">Perks so good you'll never need to go anywhere else for your design. Seriously.</p>
                </div>
                <div className="benefits__grid">
                    <div>
                        <div className="benefits__grid__icon dashj">
                            <DynamicDashboardIcon />
                        </div>
                        <h5>Design board</h5>
                        <p className="text-base">Easily manage your design queue with a Trello board.</p>
                    </div>
                    <div>
                        <div className="benefits__grid__icon flash">
                            <FlashIcon className="w-[70px]" />
                        </div>
                        <h5>Lightning fast delivery</h5>
                        <p className="text-base">Get your design one at a time in just a few days on average.</p>
                    </div>
                    <div>
                        <div className="benefits__grid__icon money">
                            <MoneyFly />
                        </div>
                        <h5>Fixed monthly rate</h5>
                        <p className="text-base">No surprises here! Pay the same fixed price each month.</p>
                    </div>
                    <div>
                        <div className="benefits__grid__icon tick">
                            <TickIcon />
                        </div>
                        <h5>Top-notch quality</h5>
                        <p className="text-base">Insane design quality at your fingertips whenever you need it.</p>
                    </div>
                    <div>
                        <div className="benefits__grid__icon arrow">
                            <ArrowTop />
                        </div>
                        <h5>Flexible and scalable</h5>
                        <p className="text-base">Scale up or down as needed, and pause or cancel at anytime.</p>
                    </div>
                    <div>
                        <div className="benefits__grid__icon finger">
                            <Fingerprint className="w-[60px]" />
                        </div>
                        <h5>Unique and all yours</h5>
                        <p className="text-base">Each of your designs is made especially for you and is 100% yours.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Benefits;
