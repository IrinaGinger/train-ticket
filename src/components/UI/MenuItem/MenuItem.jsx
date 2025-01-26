import PropTypes from 'prop-types'; 
import { HashLink } from "react-router-hash-link";

import "./MenuItem.css";

// пункт меню
export default function MenuItem(props) {
    let { title, link } = props;

    return (
        <li className="nav-item">
            <HashLink className='nav-link header-nav-link' to={link} >
                {title}
            </HashLink>
        </li>
    );
};

MenuItem.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
}