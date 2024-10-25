import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/modules/home/assets/images/logo.svg";
import "./style.scss";

const TopNav = () => {
    return (
        <div className="top-nav">
            <Link href="/">
                <Image
                    src={Logo}
                    width={140}
                    height={23}
                    alt="logo"
                />
            </Link>
        </div>
    )
};

export default TopNav;
