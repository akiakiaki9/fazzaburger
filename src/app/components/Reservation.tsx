"use client"
import React from 'react'
import { FiPhone } from "react-icons/fi";

export default function Reservation() {
    return (
        <div className='reservation'>
            <div className="reservation-blok">
                <h1>У вас есть планы на ужин сегодня? Забронируйте столик</h1>
                <p>
                    Бронируйте столики онлайн, читайте отзывы о ресторане и приходите наслаждаться фирменной едой.
                    Позвоните и забронируйте столик.
                </p>
                <div className="reservation-blok__container">
                    <div className='reservation-blok__container-div'>
                        <FiPhone className='reservation-blok__container-icon' />
                    </div>
                    <div>
                        <p className='reservation-blok__container__p-1'>Быстрый заказ 7 дней</p>
                        <p className='reservation-blok__container__p-2'>+998 91-441-71-81</p>
                    </div>
                </div>
                <a href="tel:+998 91-441-71-81">Позвонить</a>
            </div>
        </div>
    )
};