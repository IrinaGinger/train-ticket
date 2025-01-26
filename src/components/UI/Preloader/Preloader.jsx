import CustomIcon from "../CustomIcon/CustomIcon";

import ic_preloaderTrain from "../../../img/preloader/ic_preloader_train.svg"; 
import ic_preloaderLine from "../../../img/preloader/ic_preloader_line.svg";

import "./Preloader.css";

export default function Preloader() {
    
    return (
        <div className="loader_block">
            <span className="loader-text text-center">Идет поиск</span>

            <div className="animation-container">
                <CustomIcon wrapperClassName="animation-train" imgSrc={ic_preloaderTrain} imgAlt="" imgClassName="loader__icon" />
                <CustomIcon wrapperClassName="animation-line" imgSrc={ic_preloaderLine} imgAlt="" imgClassName="loader__icon" />  
            </div>
        </div>
    );
};
