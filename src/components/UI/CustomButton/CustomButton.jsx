import PropTypes from 'prop-types'; 

import "./CustomButton.css";

export default function CustomButton(props) {

    const { className, text, isDisabled, onBtnClick } = props;

    return (    
        <button className={`btn text-center ${className}`} disabled={isDisabled} onClick={onBtnClick}>
            {text}
        </button>
    );
};

CustomButton.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    isDisabled: PropTypes.bool,
    onBtnClick: PropTypes.func,
}