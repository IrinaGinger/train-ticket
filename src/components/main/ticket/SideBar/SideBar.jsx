import PropTypes from 'prop-types'; 

import Filters from "./Filters";
import Details from "./Filters";

import "./SideBar.css";

export default function SideBar(props) {
    const type = props.type;

    return (        
        <aside className="sidebar-wrap container p-0">
            <div className="sidebar" id="sidebar">
                {(type === 'trains' || type === 'seats') ? <Filters /> : <Details />}
            </div>
        </aside>       
    );
};

SideBar.propTypes = {
    type: PropTypes.string,
}