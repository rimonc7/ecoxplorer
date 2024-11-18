import AdventureCards from "./AdventureCards";
import Banner from "./Banner";
import Blogs from "./Blogs";
import CountdownSection from "./Countdown";
import Countdown from "./Countdown";

const Home = () => {
    return (
        <div className="my-10">
            <Banner></Banner>
            <section>
                <AdventureCards></AdventureCards>
            </section>
            <section>
                <Blogs></Blogs>
            </section>
            <section>
                <CountdownSection></CountdownSection>
            </section>
        </div>
    );
};

export default Home;