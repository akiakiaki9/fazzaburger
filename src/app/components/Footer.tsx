'use client'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-blok">
                <div className="footer-blok__section-1">
                    <div>
                        <Link href='/'><img src="/images/logo.PNG" alt="Fazza Burger" /></Link>
                    </div>
                    <p>ул. Окмасжид, 24, Бухара</p>
                    <a href='tel:++998 91-441-71-81'>+998 91-441-71-81</a>
                </div>
                <div className="footer-blok__section-2">
                    <b>НАПРАВЛЕНИЕ</b>
                    <Link href='/'>Главная</Link>
                    <Link href='/menu'>Меню</Link>
                    <Link href='/about-us'>О нас</Link>
                    <Link href='/gallery'>Галерея</Link>
                    <Link href='/contacts'>Контакты</Link>
                </div>
                <div className="footer-blok__section-3">
                    <b>ЧАСЫ РАБОТЫ</b>
                    <p>Ежедневно</p>
                    <p>10:00 - 3:00</p>
                    <div className="footer-blok__section-3__container">
                        <a href="https://www.instagram.com/fazzaburger/" target='_blank'>
                            <img src='/images/instagram_icon.png' alt='Fazza Burger Instagram' className='footer-blok__section-3__icon' />
                        </a>
                        <img className='footer-blok__section-3__container-img' src="/images/logo.PNG" alt="Fazza Burger" />
                    </div>
                </div>
            </div>
            <div className="footer-footer">
                <p className='footer-footer__p-1'>Авторские права <span className='footer-footer__p-1__span-1'>© 2025</span> <span className='footer-footer__p-1__span-2'>Fazza Burger</span>. Все права защищены</p>
                <p className='footer-footer__p-2'>Разработано в <a href="https://akbarsoft.uz">Akbar Soft</a></p>
            </div>
        </div>
    )
};