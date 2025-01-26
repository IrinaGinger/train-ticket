import { useState } from "react"; 

import SwitchInput from '../../UI/SwitchInput/SwitchInput';

import { sideBarSwitchData } from "../../../data/constData";

import './SideBarForm.css';

export default function SideBarSwitchBlock() {
    const switchNumber = 6;
    const data = [];
    for (let i = 1; i <= switchNumber; i++) {
        data.push({ id: i, value: null })
    };

    const [switchers, setSwitchers] = useState(data);

    const handleSwitch = (id, newValue) => {
        setSwitchers((prevSwitchers) => {
            const index = prevSwitchers.findIndex(el => el.id === id);
            prevSwitchers.splice(index, 1, { id: id, value: newValue });
            return(prevSwitchers);
        });
    }

    const switchContent = sideBarSwitchData.map(({ id, img, label }) => {
        return (
            <SwitchInput 
                key={id}
                id={id}
                icon={img}
                label={label}
                handleSwitchInput={handleSwitch}
                value={switchers[id-1].value}
            />
        )       
    });
    
    return (
        <div className="sidebar-switch-block">
            {switchContent}
        </div>
    );
};