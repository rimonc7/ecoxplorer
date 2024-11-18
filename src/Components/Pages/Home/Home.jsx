import AdventureCards from "./AdventureCards";
import Banner from "./Banner";
import Blogs from "./Blogs";

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
        </div>
    );
};

export default Home;