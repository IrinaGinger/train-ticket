import PropTypes from 'prop-types';

import Banner from "../../components/UI/Banner/Banner";
import Preloader from "../../components/UI/Preloader/Preloader";

import ProgressBar from "../../components/main/ticket/ProgressBar/ProgressBar";
import SideBar from "../../components/main/ticket/SideBar/SideBar";

import bannerTicketHeader from "../../img/banner/banner-ticket-header.png";

import "./Ticket.css";

export default function Ticket(props) {
    const isLoaded = true;  // заглушка до подключения сервера

    const type = props.type;
    const slogan={};
    
    return (
        <>        
            <Banner bannerClassName="banner banner-tickets" src={bannerTicketHeader} slogan={slogan}/>

            <div className="selection-train-wrapper">
                {/* <HeaderForm headerFormClassName="ticket-search-form" /> */}
                {(!isLoaded) ? 
                    (<Preloader />) : (
                    <div className="selection-train-content">
                        <ProgressBar />
                        <SideBar type={type} />
                        <main className="main-container container-fluid">

                        </main>
                    </div>
                )}
            </div>
        </>
    );
};

Ticket.propTypes = {
    type: PropTypes.string,
}