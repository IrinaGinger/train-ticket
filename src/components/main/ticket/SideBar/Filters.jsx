import DateSelectForm from "../../../forms/DateSelectForm/DateSelectForm";
import SideBarSwitchBlock from "../../../forms/SideBarForm/SideBarSwitchBlock";
import SideBarPriceBlock from "../../../forms/SideBarForm/SideBarPriceBlock";
import SideBarCommonBlock from "../../../forms/SideBarForm/SideBarCommonBlock"; 

import "./SideBar.css";

export default function Filters() {

    return (
        <div className="filters-container">
            <DateSelectForm 
                classNameLocation="sidebar"
                labelDeparture="Дата поездки"
                labelArrival="Дата возвращения"
            />
            <SideBarSwitchBlock />
            <SideBarPriceBlock />
            <SideBarCommonBlock type="departure" />
            <SideBarCommonBlock type="arrival" />
        </div>
    );
};