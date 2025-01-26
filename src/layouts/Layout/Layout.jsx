import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Layout.css";

// базовая разметка страницы
export default function Layout() {

    return (
        <div className="site-container">
            <Header />
            <div className="content container-fluid">
                <div className="row">
                    <div className="col">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};