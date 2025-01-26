import PropTypes from 'prop-types'; 
import { useState } from "react";

import PopupCalendar from "../../UI/PopupCalendar/PopupCalendar";

import './DateSelectForm.css';

export default function DateSelectForm(props) {
    const {classNameLocation, labelDeparture, labelArrival} = props;

    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();

    const handleChangeDateFrom = (date) => {
        setFromDate(date);
    }

    const handleChangeDateTo = (date) => {
        setToDate(date);
    }
    
    return (
        <div className={`${classNameLocation}-date-block`}>
            <PopupCalendar
                classNameLocation={classNameLocation}
                classNameDirection="departure"
                label={labelDeparture}
                handleChangeDate={handleChangeDateFrom}
                // selectedDate={fromDate}
                activeStartDate={new Date()}
            />

            <PopupCalendar 
                classNameLocation={classNameLocation}
                classNameDirection="arrival"
                label={labelArrival}
                handleChangeDate={handleChangeDateTo}
                // selectedDate={toDate}
                activeStartDate={fromDate || new Date()}
            />           
        </div>
    );
};

DateSelectForm.propTypes = {
    classNameLocation: PropTypes.string,
    labelDeparture: PropTypes.string, 
    labelArrival: PropTypes.string,
}