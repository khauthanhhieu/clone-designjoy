import Image from "next/image";
import Marquee from "react-fast-marquee";
import LogoSplit from "@/modules/home/assets/images/logo-split.svg";

const LogoMarquee = async () => {
    const data = await fetch(`${process.env.URL}/api/marquee`)
        .then(data => data.json());

    return (
        <div className="logo-marquee">
            <div className="logo-marquee__dock">
                <Marquee autoFill>
                    {data.map((logo) => (
                        <div className="h-5 flex">
                            <img
                                key={logo.id}
                                alt={logo.name}
                                src={`${process.env.URL}/images/logo-marquees/${logo.image}`}
                                className="h-full mx-5"
                            />
                            <Image src={LogoSplit.src} alt="Logo Split" width={10} height={10} />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default LogoMarquee;
