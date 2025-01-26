
import { feedBackData } from "../../../data/constData";

import ic_quote_left from "../../../img/feedback/ic_quote_left.svg";
import ic_quote_right from "../../../img/feedback/ic_quote_right.svg";

import "./homepage.css";

export default function FeedBack () {
    return (        
        <section className="feedback" id="feedback">
            <h2 className="homepage-title feedback__title">Отзывы</h2>

            <div className="feedback__block">
                {feedBackData.map(item => (
                    <div key={item.id} className="card feedback__item">
                        <div className="feedback__img-wrap">
                            <img
                                className="card feedback__img"
                                src={item.avatar} 
                                alt="аватар"
                            />
                        </div>
                        <div className="card-body p-0 body-feedback">
                            <p className="card-title feedback__item-author">{item.name}</p>

                            <p className="feedback__item-text">
                                <img src={ic_quote_left} alt={""} className="quote-left" />
                                {item.text}                               
                                <img src={ic_quote_right} alt={""} className="quote-right" />
                            </p>
                        </div>                        
                    </div>
                ))}
            </div>



        </section>        
    );
};