import TopNav from "@/modules/home/components/TopNav";
import InnerFrame, { Hero, Slider, HowItWorks, Quote, Benefits } from "@/modules/home/components/InnerFrame";

const Home = () => {
    return (
        <>
            <TopNav />
            <InnerFrame>
                <Hero />
                <Slider />
                <HowItWorks />
                <Quote />
                <Benefits />
            </InnerFrame>
        </>
    )
}

export default Home;
