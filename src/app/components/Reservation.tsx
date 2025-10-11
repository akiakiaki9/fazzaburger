"use client"
import React from 'react'
import { FiPhone } from "react-icons/fi";

export default function Reservation() {
    return (
        <div className='reservation'>
            <div className="reservation-blok">
                <h1>Do you have any dinner plan today? Reserve your table</h1>
                <p>Make online reservations, read restaurant reviews from dinners, and earn points towards free meals. OpenTable is a real time online reservation.</p>
                <div className="reservation-blok__container">
                    <div className='reservation-blok__container-div'>
                        <FiPhone className='reservation-blok__container-icon' />
                    </div>
                    <div>
                        <p className='reservation-blok__container__p-1'>Quick order 24/7</p>
                        <p className='reservation-blok__container__p-2'>+998 91-441-71-81</p>
                    </div>
                </div>
                <a href="tel:+998 91-441-71-81">Позвонить</a>
            </div>
        </div>
    )
};