import FlexImage1 from "@/modules/home/assets/images/flex-1.png";
import FlexImage2 from "@/modules/home/assets/images/flex-2.png";
import FlexImage3 from "@/modules/home/assets/images/flex-3.png";
import FlexImage4 from "@/modules/home/assets/images/flex-4.png";
import FlexImage5 from "@/modules/home/assets/images/flex-5.png";
import FlexImage6 from "@/modules/home/assets/images/flex-6.png";

const WorkFlex = () => {
    return (
        <div className="services__workFlex">
            <img src={FlexImage1.src} />
            <img src={FlexImage2.src} />
            <img src={FlexImage3.src} />
            <img src={FlexImage4.src} />
            <img src={FlexImage5.src} />
            <img src={FlexImage6.src} />
        </div>
    )
}

export default WorkFlex;
