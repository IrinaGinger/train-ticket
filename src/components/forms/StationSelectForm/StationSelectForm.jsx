import PropTypes from 'prop-types'; 
import { useState } from "react";

import CustomIcon from "../../UI/CustomIcon/CustomIcon";

import ic_location from "../../../img/forms/ic_location.svg";

import './StationSelectForm.css';

export default function StationSelectForm(props) {
    const {
        classNameDirection,
        stations, 
        handleStationSelect, 
        selectedStation, 
        placeholder
    } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [inputStation, setInputStation] = useState(selectedStation?.name || "");

    function toggleList() {
        setIsOpen(!isOpen);
    }

    function onStationClick(value) {
		handleStationSelect(value);
		setInputStation(value.toUpperCase());
		setIsOpen(false);
	}

    function handleInputStationChange(e) {
		setInputStation(e.target.value);
        handleStationSelect(e.target.value);
        toggleList();		
	}

    const stationsList = stations.map(({ id, name }) => {
        return (
            <div key={id} className="station-list__item" onClick={() => onStationClick(name)}>
                {name.toUpperCase()}
            </div>
        )
    });

    return (
        <div className={`station-select ${classNameDirection}`}>
            <div className="station-form">
                <div className={"station-form__input-container"}>
                    <input
                        className="station-form__input"
                        type="text"
                        placeholder={placeholder}
                        value={inputStation}
                        onChange={handleInputStationChange}
                    />                

                    <div onClick={toggleList}>
                        <CustomIcon wrapperClassName="location" imgSrc={ic_location} imgAlt="" imgClassName={"location-icon"} />
                    </div>
                </div>    
            </div>

            {isOpen && 
                <div className="station-list">
                    {stationsList}
                </div>
            }
        </div>
    );
};

StationSelectForm.propTypes = {
    classNameDirection: PropTypes.string,
    stations: PropTypes.array,
    handleStationSelect: PropTypes.func,
    selectedStation: PropTypes.string,
    placeholder: PropTypes.string, 
}