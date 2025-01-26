import PropTypes from 'prop-types';

import './SwitchInput.css'

export default function SwitchInput(props) {
    const {
        id,
        icon,
        label,
        handleSwitchInput,
        value,
    } = props;

    function onInputChange(e) {
        handleSwitchInput(e.target.id, e.target.checked);
    };
    
    return (
        <label className="sidebar-switch__label-container">
            <img className="switch-icon" src={icon} alt="" />
            <input 
                type='checkbox' 
                className="sidebar-switch__checkbox" 
                onChange={onInputChange} 
                id={id} 
                checked={value} 
            />
            <span className="sidebar-switch__label">{label}</span>
            <span className="sidebar-switch__control"></span>
        </label>
    )
};

SwitchInput.propTypes = {
    id: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
    handleSwitchInput: PropTypes.func,
    value: PropTypes.object,
}
