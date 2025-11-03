'use client'
import React from 'react'
import { FaRegBuilding, FaRegClock } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

export default function Contacts() {
    return (
        <div>
            <div className="contacts" id='contacts'>
                <div className="contacts-header">
                    <div className="contacts-header__header">
                        <h1>Свяжитесь с нами!</h1>
                        <p>Хотите накормить вашу команду лучшими бургерами? Давайте обсудим! Напишите, позвоните или оставьте заявку — и мы вернемся с аппетитным предложением.</p>
                    </div>
                    <div className="contacts-header__container">
                        <div className="contacts-header__container-section">
                            <FaRegBuilding className='contacts-header__icon' />
                            <b>Адрес</b>
                            <p className='contacts-header__container-p-1'>ул. Окмасжид, 24, Бухара</p>
                            <p className='contacts-header__container-p-2'>Навигация</p>
                        </div>
                        <div className="contacts-header__container-section">
                            <FiPhoneCall className='contacts-header__icon' />
                            <b>Свяжитесь с нами</b>
                            <p className='contacts-header__container-p-1'>+998 91-441-71-81</p>
                            <a href='tel:+998 91-441-71-81' className='contacts-header__container-p-2'>Позвонить</a>
                        </div>
                        <div className="contacts-header__container-section">
                            <FaRegClock className='contacts-header__icon' />
                            <b>Время работы</b>
                            <p className='contacts-header__container-p-1'>Ежедневно: 10:00 - 3:00</p>
                            <p className='contacts-header__container-p-2'>Без отдыха</p>
                        </div>
                    </div>
                </div>
                <div className="contacts-map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=64.445453%2C39.781427&z=13&pt=64.445453%2C39.781427~v1pm2ql1l1"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        title="Fazza Burger Yandex Maps"
                    />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
};