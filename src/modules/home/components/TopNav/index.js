import Image from "next/image";
import Link from "next/link";
import Logo from "@/modules/home/assets/images/logo.svg";
import { Smile } from "@/modules/core/components/Lottie";
import "./style.scss";

const TopNav = () => {
    return (
        <div className="top-nav">
            <Link href="/">
                <div className="top-nav__logo">
                    <Smile height={23} className="lottie-smile" loop="false" />
                    <Image
                        src={Logo}
                        width="auto"
                        height={23}
                        alt="logo"
                    />
                </div>
            </Link>
        </div>
    )
};

export default TopNav;
