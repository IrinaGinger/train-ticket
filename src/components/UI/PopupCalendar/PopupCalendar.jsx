import PropTypes from 'prop-types'; 
import { useState } from "react";
import Calendar from 'react-calendar';

import CustomIcon from "../CustomIcon/CustomIcon";

import ic_calendar from "../../../img/forms/ic_calendar.svg";
import iс_triangle_left from "../../../img/icons/iс_triangle_left.png";
import iс_triangle_right from "../../../img/icons/iс_triangle_right.png";

import 'react-calendar/dist/Calendar.css';
import './PopupCalendar.css'

export default function PopupCalendar(props) {
    const { 
        classNameLocation,
        classNameDirection,
        label,
        handleChangeDate,
        // selectedDate,
        activeStartDate,
     } = props;
    
    const [isOpen, setIsOpen] = useState(false);
    const [date, setDate] = useState(activeStartDate);
    const [inputDate, setInputDate] = useState();

    function toggleCalendar() {
        setIsOpen(!isOpen);
    }

    function convertDate(date) {
        setDate(date);
        setInputDate(date.toLocaleDateString());
        handleChangeDate(date.toLocaleDateString());
        toggleCalendar();
    }

    function handleInputDateChange(e) {
        const dateString = e.target.value;
        const [day, month, year] = dateString.split('.').map(Number);
        const newDate = new Date(year, month - 1, day);

        if (newDate.getTime() > 0) {
            setDate(newDate);
            setInputDate(newDate.toLocaleDateString());
        }
    }

    function setNavigationLabel({date}) {
        return date.toLocaleString('default', { month: 'long' });
    }

    return (
        <div className={`popup-calendar ${classNameLocation} ${classNameDirection}`}>
            <div className={`date-form ${classNameLocation}`}>
                {label && <p className="date-form__label">{label}</p>}

                <div className={`date-form__input-container ${classNameLocation}`}>
                    <input
                        className="date-form__input"
                        type="text"
                        placeholder="ДД.ММ.ГГГГ"
                        value={inputDate}
                        onChange={handleInputDateChange}
                    />                

                    <div onClick={toggleCalendar}>
                        <CustomIcon wrapperClassName="calendar" imgSrc={ic_calendar} imgAlt="" imgClassName={`calendar-icon ${classNameLocation}`} />
                    </div>
                </div>    
            </div>

            {isOpen && 
            <Calendar 
                className={`calendar ${classNameLocation}`} 
                value={date} 
                onChange={convertDate} 
                navigationLabel={setNavigationLabel} 
                prevLabel={<img src={iс_triangle_left} alt={""} />}
                nextLabel={<img src={iс_triangle_right} alt={""} />} 
            />}
        </div>
    );
};

PopupCalendar.propTypes = {
    classNameLocation: PropTypes.string,
    classNameDirection: PropTypes.string,
    label: PropTypes.string,
    handleChangeDate: PropTypes.func,
    // selectedDate: PropTypes.date || undefined,
    activeStartDate: PropTypes.object,
}
