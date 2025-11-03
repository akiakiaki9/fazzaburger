'use client'
import React from 'react'
import { RxThickArrowRight } from 'react-icons/rx'

export default function Specials() {
    return (
        <div className='specials'>
            <div className="specials-blok">
                <div className="specials-blok__container-1">
                    <div className="specials-blok__container-1__specials-1">
                        <h1>ОЧЕНЬ СОЧНО!</h1>
                        <p>Картошка фри</p>
                        <p className='specials-blok__container-2__specials-p'>Феномен картофеля фри</p>
                        <a href='#contacts' className='specials-blok__container-1__specials-1__container'>
                            ЗАКАЗАТЬ
                            <RxThickArrowRight className='specials-blok__icon' />
                        </a>
                    </div>
                    <div className="specials-blok__container-1__specials-2">
                        <img src="/images/specials/1.png" alt="Fazza Burger" />
                    </div>
                </div>
                <div className="specials-blok__container-2">
                    <div className="specials-blok__container-2__specials-1">
                        <h1>Сочный Бургер</h1>
                        <p>НОВЫЙ ФЕНОМЕН ВКУСА БУРГЕРА</p>
                        <p className='specials-blok__container-2__specials-p'>55.000 SOM</p>
                        <a href='#contacts' className='specials-blok__container-1__specials-1__container'>
                            ЗАКАЗАТЬ
                            <RxThickArrowRight className='specials-blok__icon' />
                        </a>
                    </div>
                    <div className="specials-blok__container-2__specials-2">
                        <img src="/images/specials/2.png" alt="Fazza Burger" />
                    </div>
                </div>
            </div>
        </div>
    )
};