import { useLocation } from "react-router-dom";

import "./ProgressBar.css";

export default function ProgressBar() {
    const location = useLocation();
    let stage;
    
    switch (location.pathname) {
        case '/ticket/passengers': 
            stage = 2;
            break;
        case '/ticket/payment':  
            stage = 3;
            break;
        case '/ticket/check':
            stage = 4;
            break;
        default:
            stage = 1;
    }

    const stageData = [
        { step: 1, text: 'Билеты' },
        { step: 2, text: 'Пассажиры' },
        { step: 3, text: 'Оплата' },
        { step: 4, text: 'Проверка' },
    ];

    const progressComponent = stageData.map(({ step, text }) => {
        return (
            <div key={step}
                className={
                    step <= stage
                    ? `progress-bar step-${step} p-0 step_active`
                    : `progress-bar step-${step} p-0`
                }
            >
                <span className="border-top-step"></span>
                <span className="border-bottom-step"></span>
                <span className="numbering margin-numbering">{step}</span>
                <span className="progress-bar__name">{text}</span>
            </div>
        )
    });

    return (
        <div className="progress">
            {progressComponent}
        </div>
    );
};
