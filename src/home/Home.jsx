import React from "react";
import Navbar from "./landing/Navbar";
import Hero from "./landing/Hero";
import Features from "./landing/Features";
import Statistics from "./landing/Statistics";
import Testimonials from "./landing/Testimonials";
import Footer from "./landing/Footer";


const Home = () => {
    return(
        <div className="font-sans bg-gray-50">
            <Navbar/>
            <Hero/>
            <Features/>
            <Statistics/>
            <Testimonials/>
            <Footer/>

        </div>
    );
}

export default Home;



    
