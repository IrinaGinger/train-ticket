import PropTypes from 'prop-types'; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DateSelectForm from "../DateSelectForm/DateSelectForm";
import StationSelectForm from "../StationSelectForm/StationSelectForm";
import CustomButton from "../../UI/CustomButton/CustomButton";

import ic_reverse from "../../../img/forms/ic_reverse.svg";

import './HeaderForm.css';

export default function HeaderForm(props) {
    const { headerFormLocation } = props;
    const navigate = useNavigate();

    // до подключения сервера
    const stations = [ 
        {id: 1, name: "Москва"}, 
        {id: 2, name: "Казань"},
        {id: 3, name: "Самара"},
        {id: 4, name: "Чебоксары"},
    ]; 

    const [fromStation, setFromStation] = useState();
    const [toStation, setToStation] = useState();

    const handleStationFromSelect = (value) => {
        setFromStation(value);
    }

    const handleStationToSelect = (value) => {
        setToStation(value);
    }

    const handleReverseClick = () => {
        const startCity = fromStation;
        const finishCity = toStation;

        setFromStation(finishCity);
        setToStation(startCity);
    }

    const handleButtonClick = (event) => {
        event.preventDefault();
        navigate(`/ticket/trains`);
    };
    
    return (
        <div className={`header-form ${headerFormLocation}`}>
            <div className="header-form__title">Направление</div>
            <div className="header-form-direction-block">
                <StationSelectForm
                    classNameDirection="departure"
                    selectedStation={fromStation}
                    stations={stations}
                    handleStationSelect={handleStationFromSelect}
                    placeholder="Откуда"
                />

                <button
                    type="button"
                    className="btn btn-transparent p-0 reverse-button"
                    onClick={handleReverseClick}
                    >
                    <img className="icon-reverse" src={ic_reverse} alt="" />
                </button>

                <StationSelectForm
                    classNameDirection="arrival"
                    selectedStation={toStation}
                    stations={stations}
                    handleStationSelect={handleStationToSelect}
                    placeholder="Куда"
                />
            </div>
            
            <div className="header-form__title">Дата</div>
            <DateSelectForm 
                classNameLocation="header-form"
                labelDeparture=""
                labelArrival=""
            />

            <div className={`header-form-${headerFormLocation}-control-block`}>
                <CustomButton
                    text="Найти билеты"
                    className={`header-form-${headerFormLocation}-control-block__btn`}
                    onBtnClick={handleButtonClick}
                    isDisabled={fromStation === "" || toStation === "" ? true : false} 
                />
            </div>
        </div>
    );
};

HeaderForm.propTypes = {
    headerFormLocation: PropTypes.string,    
}