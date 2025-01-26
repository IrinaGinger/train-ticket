import MenuItem from "../MenuItem/MenuItem";

import { menuItemsData } from "../../../data/constData";

import "./Menu.css"; 

export default function Menu() {
    const menuList = menuItemsData.map(({ id, title, link }) => {
        return <MenuItem key={id} title={title} link={link} />
    });

    return (
        <nav className="navbar navbar-expand-sm pl-0 navbar-dark bg-dark navbar-header-wrapper">
            <div className="collapse navbar-collapse navbar-header">
                <ul className="navbar-nav mr-auto nav-list">
                    {menuList}
                </ul>
            </div>
        </nav>
    );
};
