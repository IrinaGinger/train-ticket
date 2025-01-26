import PropTypes from 'prop-types'; 

import "./CustomIcon.css";

export default function CustomIcon(props) {
    const { wrapperClassName, imgSrc, imgAlt, imgClassName } = props;
    return (    
        <div className={`${wrapperClassName}__icon-wrap`}>
            <img src={imgSrc} alt={imgAlt} className={imgClassName} />
        </div>        
    );
};

CustomIcon.propTypes = {
    wrapperClassName: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    imgClassName: PropTypes.string,
}