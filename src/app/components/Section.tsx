'use client'
import React from 'react'
import { RxThickArrowRight } from "react-icons/rx";

export default function Section() {
    return (
        <div className='section'>
            <div className="section-blok">
                <div className="section-blok__container-1">
                    <div className="section-blok__container-1__section-1">
                        <h1>МНОГО COMBO</h1>
                        <p>ПОЗВОНИТЕ:</p>
                        <a href="tel:+998 91-441-71-81" className="section-blok__container-1__section-1-a">+998 91-441-71-81</a>
                        <a href='#contacts' className='section-blok__container-1__section-1__container'>
                            ЗАКАЗАТЬ
                            <RxThickArrowRight className='section-blok__icon' />
                        </a>
                    </div>
                    <div className="section-blok__container-1__section-2">
                        <img src="/images/combo/1.png" alt="Fazza Burger Combo" />
                    </div>
                </div>
                <div className="section-blok__container-2">
                    <div className="section-blok__container-2__section">
                        <h1>PEPPERONI PIZZA</h1>
                        <p>НОВЫЙ ВКУС ПЕППЕРОНИ</p>
                        <p className='section-blok__container-2__section-p'>80.000 SOM</p>
                        <a href='#contacts' className='section-blok__container-1__section-1__container'>
                            ЗАКАЗАТЬ
                            <RxThickArrowRight className='section-blok__icon' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};