import CustomButton from "../../UI/CustomButton/CustomButton";

import { HowItWorksData } from "../../../data/constData"; 

import "./homepage.css";

export default function HowItWorks () {
    const handleButtonClick = (event) => {
        event.preventDefault();
        // document.querySelector(".modal").classList.toggle("modal-active");
    };

    return (        
        <section className="how-it-works m-0" id="howitworks">
            <div className="row no-gutters">
                <div className="col col-md-6 p-0">
                    <h2 className="homepage-title how-it-works__title">Как это работает</h2>
                </div>
                <div className="col col-md-6 p-0">
                    <CustomButton
                        text="Узнать больше"
                        className="how-it-works__btn"
                        onBtnClick={handleButtonClick}
                    />
                </div>
            </div>

            <div className="card-deck how-it-works__puncts">
                {HowItWorksData.map(item => (
                    <div key={item.id} className="card how-it-works__item text-center m-0">
                        <div className="card-top how-it-works__img">
                            <img
                                src={item.img}
                                className="how-it-works__icon"
                                alt={item.text}
                            />
                        </div>
                        <div className="card-body p-0">
                            <div className="card-title how-it-works__item-text">
                                {item.text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>        
    );
};