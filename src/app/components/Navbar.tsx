'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { MdDeliveryDining, MdPhone, MdClose } from "react-icons/md";

export default function Navbar() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isIOS, setIsIOS] = useState(false)
    const [isClient, setIsClient] = useState(false)

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/'
        return pathname.startsWith(path)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleCall = () => {
        window.location.href = 'tel:+998914417181'
    }

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    useEffect(() => {
        if (isMenuOpen || isModalOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen, isModalOpen])

    useEffect(() => {
        const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
        setIsIOS(iOS)
        setIsClient(true)
    }, [])

    const handleMenuClick = (e: React.MouseEvent) => {
        if (isIOS) {
            e.preventDefault()
            window.open('/menu.pdf', '_self')
        }
        // Для не-iOS - обычный переход по ссылке (работает по умолчанию)
    }

    return (
        <>
            <div className='navbar'>
                <div className="navbar-blok">
                    <div className="navbar-blok__section-1">
                        <Link href='/' className={isActive('/') ? 'active' : ''}>Главная</Link>
                        
                        {/* Исправленная ссылка меню для десктопа */}
                        {isClient ? (
                            <a 
                                href={isIOS ? "#" : "/menu"} 
                                onClick={handleMenuClick}
                                className="cursor-pointer"
                            >
                                Меню
                            </a>
                        ) : (
                            <Link href="/menu">Меню</Link>
                        )}
                        
                        <a href='#about-us'>О нас</a>
                        <a href='#gallery'>Галерея</a>
                        <a href='#contacts'>Контакты</a>
                    </div>

                    <div className="navbar-blok__section-2">
                        <Link href='/'><img src="/images/logo.PNG" alt="Fazza Burger" /></Link>
                    </div>

                    <div className="navbar-blok__section-3">
                        <div onClick={openModal} style={{ cursor: 'pointer' }}>
                            <MdDeliveryDining className='navbar-blok__section-3__icon' />
                            <p>ЗАКАЗАТЬ</p>
                        </div>
                    </div>

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

            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu__content">
                    <nav className="mobile-nav">
                        <Link href='/' className={isActive('/') ? 'active' : ''}>Главная</Link>
                        
                        {/* Исправленная ссылка меню для мобильной версии */}
                        {isClient ? (
                            isIOS ? (
                                <a 
                                    href="/menu.pdf" 
                                    className="cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Меню
                                </a>
                            ) : (
                                <Link href="/menu" className={isActive('/menu') ? 'active' : ''}>Меню</Link>
                            )
                        ) : (
                            <Link href="/menu" className={isActive('/menu') ? 'active' : ''}>Меню</Link>
                        )}
                        
                        <a 
                            href='#about-us'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            О нас
                        </a>
                        <a 
                            href='#gallery'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Галерея
                        </a>
                        <a 
                            href='#contacts'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Контакты
                        </a>
                    </nav>

                    <div className="mobile-order">
                        <div className="mobile-order__btn" onClick={() => {
                            openModal()
                            setIsMenuOpen(false)
                        }}>
                            <MdDeliveryDining className='mobile-order__icon' />
                            <span>ЗАКАЗАТЬ</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальное окно заказа */}
            <div className={`order-modal-overlay ${isModalOpen ? 'active' : ''}`} onClick={closeModal}>
                <div className="order-modal" onClick={(e) => e.stopPropagation()}>
                    <button className="order-modal__close" onClick={closeModal}>
                        <MdClose size={24} />
                    </button>

                    <div className="order-modal__content">
                        <h2>Заказать доставку</h2>
                        <p>Позвоните нам для быстрого заказа</p>

                        <div className="order-modal__phone">
                            <div className="order-modal__number">
                                +998 91-441-71-81
                            </div>
                            <button
                                className="order-modal__call-btn"
                                onClick={handleCall}
                            >
                                <MdPhone size={20} />
                                Позвонить
                            </button>
                        </div>

                        <div className="order-modal__info">
                            <p>⏰ Время работы: 10:00 - 3:00</p>
                            <p>🚚 Доставка: 30-45 минут</p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            />
        </>
    )
}