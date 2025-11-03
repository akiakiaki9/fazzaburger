'use client'
import React from 'react'
import { MdOutlineDeliveryDining } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";

export default function Section1() {
    return (
        <div className='section1'>
            <div className="section1-blok">
                <div className="section1-blok__section">
                    <img src="/images/delivery.png" alt="" />
                </div>
                <div className="section1-blok__section section1-blok__section-2">
                    <h1>Ваша доставка <span>Fazza Burger</span>, В ПУТИ !</h1>
                    <p className='section1-blok__section-p'>
                        У нас вы найдёте огромный выбор бургеров — от проверенной классики до уникальных авторских рецептов с неожиданными сочетаниями ингредиентов.
                    </p>
                    <div className='section1-blok__section__container'>
                        <div className="section1-blok__section__container-part">
                            <MdOutlineDeliveryDining className='section1__icon' />
                            <p className='section1-blok__section__container-p'>Доставка за 30 минут</p>
                        </div>
                        <div className="section1-blok__section__container-part">
                            <IoFastFoodOutline className='section1__icon' />
                            <p className='section1-blok__section__container-p'>Доставлен с заботой</p>
                        </div>
                        <div className="section1-blok__section__container-part">
                            <IoMdCheckboxOutline className='section1__icon' />
                            <p className='section1-blok__section__container-p'>Доставка до двери</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};