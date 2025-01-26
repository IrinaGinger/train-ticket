import { Link } from "react-router-dom";

import Logo from "../../components/UI/Logo/Logo";
import CustomIcon from "../../components/UI/CustomIcon/CustomIcon";
import IconLink from "../../components/UI/IconLink/IconLink";
import SubscribeForm from "../../components/forms/SubscribeForm/SubscribeForm";

import ic_up_arrow_angle from "../../img/footer/ic_up_arrow_angle.svg";

import { FooterContacts } from "../../data/constData"; 
import { Social } from "../../data/constData";

import "./Footer.css";

export default function Footer() {

    return (
        <footer className="container-fluid footer" id="footer">
            <div className="row">
                <div className="col-6 text-center p-0">
                    <section className="footer-contacts text-light">
                        <div className="footer-contacts__title text-left">
                            Свяжитесь с нами
                        </div>
                        <ul className="footer-contacts__list">
                            {FooterContacts.map(item => (
                                <li key={item.id} className="footer-contacts__list-item">
                                    <Link to="/">
                                        <div className="footer-contacts__wrap">
                                            <CustomIcon 
                                                wrapperClassName="footer-contacts" 
                                                imgSrc={item.img} 
                                                imgAlt={item.alt} 
                                                imgClassName={"contact-icon"} 
                                            />
                                        
                                            <p className="text-left footer-contacts__paragraph">
                                                {item.content}
                                            </p>
                                        </div>
                                    </Link>
                                </li>                                                    
                            ))}
                        </ul>
                    </section>
                </div>

                <div className="col-6">
                    <section className="footer-subscribe text-light">
                        <div className="footer-subscribe__title text-left">Подписка</div>
                        <p className="footer-subscribe__text text-left">
                            Будьте в курсе событий
                        </p>
                        <SubscribeForm />
                        
                        <div className="footer-subscribe-social text-light">
                            <div className="footer-social__title text-left">
                                Подписывайтесь на нас
                            </div>

                            <div className="footer-social__icons-group">
                                {Social.map(item => (
                                    <IconLink 
                                        key={item.id}
                                        linkClassName="icon_link" 
                                        href={item.href}
                                        imgSrc={item.img}
                                        imgAlt={item.alt}
                                        imgClassName="footer-social__icon" 
                                    />                                    
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="row">
                <div className="col col-lg p-0">
                    <div className="footer-border"></div>
                    <div className="footer-copyright">
                        <Logo logoId="" />
                        <IconLink 
                            linkClassName="footer-copyright__up-link" 
                            href="#startLogo"
                            imgSrc={ic_up_arrow_angle} 
                            imgClassName="" 
                        />        
                        <span className="footer-copyright__text">2018 Web</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
