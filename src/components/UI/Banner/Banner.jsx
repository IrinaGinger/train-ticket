import PropTypes from 'prop-types'; 
import { useLocation } from "react-router-dom";

import "./Banner.css";

export default function Banner({ src, bannerClassName, slogan }) {
    const location = useLocation();
    const { text, boldText } = slogan;

    return (
        <>
            <div className={`banner ${bannerClassName}`}>
                {location.pathname === "/" ? (
                    <h1 className={`${bannerClassName}__title`}>
                        {text}
                        <strong className="strong-text">{boldText}</strong>
                    </h1>
                ) : null}
                <img src={src} className="banner__img" alt="banner" />
            </div>
            {location.pathname === "/" ? (
                <div className={`${bannerClassName}__line`}></div>
            ) : null}
        </>
    );
};

Banner.propTypes = {
    src: PropTypes.string,
    bannerClassName: PropTypes.string,
    slogan: PropTypes.object,
}