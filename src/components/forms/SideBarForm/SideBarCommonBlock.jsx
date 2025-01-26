import PropTypes from 'prop-types'; 

import './SideBarForm.css';

export default function SideBarCommonBlock(props) {
    const { type } = props;
    let headerText;

    switch (type) {
        case 'departure': 
            headerText = 'Туда';
            break;
        case 'arrival':  
            headerText = 'Обратно';
            break;        
        default:
            headerText = '';
    }

    return (
        <div className={`sidebar-common-block ${type}`}>
            <div className="sidebar-common-block__title">
                {headerText}
            </div>        
        </div>
    );
};

SideBarCommonBlock.propTypes = {
    type: PropTypes.string,
}