import TopNav from "@/modules/home/components/TopNav";
import InnerFrame,
{
    Hero,
    Slider,
    HowItWorks,
    Quote,
    Benefits,
    Services,
} from "@/modules/home/components/InnerFrame";

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
                <Services />
            </InnerFrame>
        </>
    )
}

export default Home;
