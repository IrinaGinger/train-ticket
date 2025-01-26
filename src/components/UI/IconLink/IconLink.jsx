import PropTypes from 'prop-types'; 

import "./IconLink.css";

export default function IconLink(props) {
    const { linkClassName, href, imgSrc, imgAlt, imgClassName } = props;
    return (    
        <a className={`${linkClassName} text-center`} href={href}>
            <img src={imgSrc} alt={imgAlt} className={imgClassName} />
        </a>  
    );
};

IconLink.propTypes = {
    linkClassName: PropTypes.string,
    href: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    imgClassName: PropTypes.string,
}