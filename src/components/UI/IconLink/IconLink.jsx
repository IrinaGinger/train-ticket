import PropTypes from 'prop-types'; 

import "./IconLink.css";

export default function IconLink(props) {
    const { linkClassName, href, children } = props;
    return (    
        <a className={`${linkClassName} text-center`} href={href}>
            {children}
        </a>  
    );
};

IconLink.propTypes = {
    linkClassName: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.element,
    // ImgComp: PropTypes.element,
    // imgAlt: PropTypes.string,
    // imgClassName: PropTypes.string,
}