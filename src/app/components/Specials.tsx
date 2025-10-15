'use client'
import Link from 'next/link'
import React from 'react'
import { RxThickArrowRight } from 'react-icons/rx'

export default function Specials() {
    return (
        <div className='specials'>
            <div className="specials-blok">
                <div className="specials-blok__container-1">
                    <div className="specials-blok__container-1__specials-1">
                        <h1>SUPER DELICIOUS</h1>
                        <p>French fries</p>
                        <p className='specials-blok__container-2__specials-p'>The Fries Phenomenon</p>
                        <Link href='/contacts' className='specials-blok__container-1__specials-1__container'>
                            ЗАКАЗАТЬ
                            <RxThickArrowRight className='specials-blok__icon' />
                        </Link>
                    </div>
                    <div className="specials-blok__container-1__specials-2">
                        <img src="/images/specials/1.png" alt="Fazza Burger" />
                    </div>
                </div>
                <div className="specials-blok__container-2">
                    <div className="specials-blok__container-2__specials-1">
                        <h1>Beef Burger</h1>
                        <p>NEW PHENOMENON BURGER TASTE</p>
                        <p className='specials-blok__container-2__specials-p'>55.000 SO'M</p>
                        <Link href='/contacts' className='specials-blok__container-1__specials-1__container'>
                            ЗАКАЗАТЬ
                            <RxThickArrowRight className='specials-blok__icon' />
                        </Link>
                    </div>
                    <div className="specials-blok__container-2__specials-2">
                        <img src="/images/specials/2.png" alt="Fazza Burger" />
                    </div>
                </div>
            </div>
        </div>
    )
};