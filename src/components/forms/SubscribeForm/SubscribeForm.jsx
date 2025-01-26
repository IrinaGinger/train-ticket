import CustomButton from "../../UI/CustomButton/CustomButton";

import './SubscribeForm.css';

export default function SubscribeForm() {
    const handleBtnClick = (event) => {
        event.preventDefault();        
  };

  const handleInputChange = (event) => {
        event.preventDefault();
  };

    return (
        <div className="subscribe-form">
            <input
                type="text"
                className="form-control footer-subscribe__input"
                placeholder="e-mail"
                onChange={handleInputChange}
            />

            <CustomButton
                text="Отправить"
                className={"footer-subscribe__btn"}
                onBtnClick={handleBtnClick}
            />  
      </div>
    );
};
