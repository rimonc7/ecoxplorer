import AdventureCards from "./AdventureCards";
import Banner from "./Banner";
import Blogs from "./Blogs";
import CountdownSection from "./Countdown";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: 'ease-in-out',
            once: false,
        });
    }, []);

    return (
        <div className="my-10">
            <section data-aos="fade-down">
                <Banner></Banner>
            </section>
            <section data-aos="fade-up">
                <AdventureCards></AdventureCards>
            </section>
            <section data-aos="fade-up">
                <Blogs></Blogs>
            </section>
            <section data-aos="flip-left">
                <CountdownSection></CountdownSection>
            </section>
        </div>
    );
};


export default Home;