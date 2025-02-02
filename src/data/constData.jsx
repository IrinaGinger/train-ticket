import photo1 from "../img/feedback/photo1.jpg";
import photo2 from "../img/feedback/photo2.jpg";

import ic_monitor from "../img/howitworks/ic_monitor.svg";
import ic_house from "../img/howitworks/ic_house.svg";
import ic_globus from "../img/howitworks/ic_globus.svg";

import ic_phone from "../img/footer/ic_phone.svg";
import ic_email from "../img/footer/ic_email.svg";
import ic_skype from "../img/footer/ic_skype.svg";
import ic_geo from "../img/footer/ic_geo.svg";

// import ic_youtube from "../img/footer/ic_youtube.svg";
// import ic_linkedin from "../img/footer/ic_linkedin.svg";
// import ic_google from "../img/footer/ic_google.svg";
// import ic_facebook from "../img/footer/ic_facebook.svg";
// import ic_twitter from "../img/footer/ic_twitter.svg";

import ic_2_class from "../img/forms/ic_2_class.svg";
import ic_3_class from "../img/forms/ic_3_class.svg";
import ic_4_class from "../img/forms/ic_4_class.svg";
import ic_1_class from "../img/forms/ic_1_class.svg";
import ic_wi_fi from "../img/forms/ic_wi_fi.svg";
import ic_express from "../img/forms/ic_express.svg";

export const menuItemsData = [
    { id: "about", title: "О нас", link: "#about" },
    { id: "howitworks", title: "Как это работает", link: "#howitworks" },
    { id: "feedback", title: "Отзывы", link: "#feedback" },
    { id: "contacts", title: "Контакты", link: "#footer" },
];

export const sloganHomePage = {
    text: "Вся жизнь - ",
    boldText: "путешествие!",
}

export const feedBackData = [
    {
        id: '1',
        name: 'Екатерина Вальнова ',
        avatar: photo1,
        text: "Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж / д билет, даже если вы заказываете онлайн билет впервые.",
    },

    {
        id: '2',
        name: 'Евгений Стрыкало',
        avatar: photo2,
        text: "СМС-сопровождение до посадки, Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.",
    },
];

export const HowItWorksData = [
    {
        id: '1',
        img: ic_monitor,
        text: "Удобный заказ на сайте",
    },
    {
        id: '2',
        img: ic_house,
        text: "Нет необходимости ехать в офис",
    },
    {
        id: '3',
        img: ic_globus,
        text: "Огромный выбор направлений",
    },
]

export const FooterContacts = [
    {
        id: '1',
        img: ic_phone,
        alt: "phone",
        content: "8 (800) 000 00 00",
    },
    {
        id: '2',
        img: ic_email,
        alt: "email",
        content: "inbox@mail.ru",
    },
    {
        id: '3',
        img: ic_skype,
        alt: "skype",
        content: "tu.train.tickets",
    },
    {
        id: '4',
        img: ic_geo,
        alt: "geo",
        content: "г.Москва ул.Московская 27-35 555 555",
    },
]

// export const Social = [
//     {
//         id: '1',
//         href: "#youtube",
//         ImgComp: ic_youtube,
//         alt: "youtube",
//     },
//     {
//         id: '2',
//         href: "#linkedin",
//         ImgComp: ic_linkedin,
//         alt: "linkedin",
//     },
//     {
//         id: '3',
//         href: "#google",
//         ImgComp: ic_google,
//         alt: "google",
//     },
//     {
//         id: '4',
//         href: "#facebook",
//         ImgComp: ic_facebook,
//         alt: "facebook",
//     },
//     {
//         id: '5',
//         href: "#twitter",
//         ImgComp: ic_twitter,
//         alt: "twitter",
//     },
// ]

export const sideBarSwitchData = [
    {
        id: '1',
        img: ic_2_class,
        label: "Купе",
    },
    {
        id: '2',
        img: ic_3_class,
        label: "Плацкарт",
    },
    {
        id: '3',
        img: ic_4_class,
        label: "Сидячий",
    },
    {
        id: '4',
        img: ic_1_class,
        label: "Люкс",
    },
    {
        id: '5',
        img: ic_wi_fi,
        label: "Wi-Fi",
    },
    {
        id: '6',
        img: ic_express,
        label: "Экспресс",
    },
]
