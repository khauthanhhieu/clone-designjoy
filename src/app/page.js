import TopNav from "@/modules/home/components/TopNav";
import InnerFrame, { Hero } from "@/modules/home/components/InnerFrame";

const Home = () => {
    return (
        <>
            <TopNav />
            <InnerFrame>
                <Hero />
            </InnerFrame>
        </>
    )
}

export default Home;
