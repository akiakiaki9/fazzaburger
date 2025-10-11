'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { MdDeliveryDining } from "react-icons/md";

export default function Navbar() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/'
        return pathname.startsWith(path)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // Закрываем меню при изменении маршрута
    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    // Блокируем скролл при открытом меню
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    return (
        <>
            <div className='navbar'>
                <div className="navbar-blok">
                    <div className="navbar-blok__section-1">
                        <Link href='/' className={isActive('/') ? 'active' : ''}>Главная</Link>
                        <Link href='/menu' className={isActive('/menu') ? 'active' : ''}>Меню</Link>
                        <Link href='/about-us' className={isActive('/about-us') ? 'active' : ''}>О нас</Link>
                        <Link href='/gallery' className={isActive('/gallery') ? 'active' : ''}>Галерея</Link>
                        <Link href='/contacts' className={isActive('/contacts') ? 'active' : ''}>Контакты</Link>
                    </div>
                    
                    <div className="navbar-blok__section-2">
                        <Link href='/'><img src="/images/logo.PNG" alt="Fazza Burger" /></Link>
                    </div>
                    
                    <div className="navbar-blok__section-3">
                        <div>
                            <MdDeliveryDining className='navbar-blok__section-3__icon' />
                            <p>ЗАКАЗАТЬ</p>
                        </div>
                    </div>

                    {/* Бургер-кнопка */}
                    <button 
                        className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Меню"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Мобильное меню */}
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu__content">
                    <nav className="mobile-nav">
                        <Link href='/' className={isActive('/') ? 'active' : ''}>Главная</Link>
                        <Link href='/menu' className={isActive('/menu') ? 'active' : ''}>Меню</Link>
                        <Link href='/about-us' className={isActive('/about-us') ? 'active' : ''}>О нас</Link>
                        <Link href='/gallery' className={isActive('/gallery') ? 'active' : ''}>Галерея</Link>
                        <Link href='/contacts' className={isActive('/contacts') ? 'active' : ''}>Контакты</Link>
                    </nav>
                    
                    <div className="mobile-order">
                        <div className="mobile-order__btn">
                            <MdDeliveryDining className='mobile-order__icon' />
                            <span>ЗАКАЗАТЬ</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blur overlay */}
            <div 
                className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            />
        </>
    )
}