import PropTypes from 'prop-types'; 
import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo(props) {
    const { logoId } = props;
    return (
        <Link to="/" className="logo" id={logoId}>
            Лого
        </Link>
    );
};

Logo.propTypes = {
    logoId: PropTypes.string,
}
