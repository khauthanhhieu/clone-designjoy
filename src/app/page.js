import TopNav from "@/modules/home/components/TopNav";
import InnerFrame, { Hero, Slider, HowItWorks, Quote } from "@/modules/home/components/InnerFrame";

const Home = () => {
    return (
        <>
            <TopNav />
            <InnerFrame>
                <Hero />
                <Slider />
                <HowItWorks />
                <Quote />
            </InnerFrame>
        </>
    )
}

export default Home;
