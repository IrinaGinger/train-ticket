import HeaderForm from "../../components/forms/HeaderForm/HeaderForm";
import About from "../../components/main/homepage/About";
import HowItWorks from "../../components/main/homepage/HowItWorks";
import FeedBack from "../../components/main/homepage/FeedBack";

import Banner from "../../components/UI/Banner/Banner";
import bannerHomeHeader from "../../img/banner/banner-home-header.png";

import { sloganHomePage } from "../../data/constData"; 

import "./Home.css";

export default function Home() {
    return (
        <>        
            <Banner bannerClassName="banner-homepage" src={bannerHomeHeader} slogan={sloganHomePage} />
            <HeaderForm headerFormLocation="homepage" />
            <main className="main-container container-fluid">
                <About />
                <HowItWorks />
                <FeedBack />
            </main>
        </>
    );
};
