'use client'
import React, { useState, useEffect } from 'react'

const carouselData = [
    {
        id: 1,
        title: "Бургеры Премиум-класса",
        heading: "Лучшие Бургеры",
        description: "Секретные рецепты нашей семьи стали легендой - и смесь для бургеров Stack не исключение",
        image: "/images/carousel/1.png"
    },
    {
        id: 2,
        title: "Свежие Ингредиенты",
        heading: "Качество и Вкус",
        description: "Готовим из самых свежих ингредиентов для незабываемого бургерного опыта",
        image: "/images/carousel/2.png"
    },
    {
        id: 3,
        title: "Специальные Предложения",
        heading: "Выгодные Предложения",
        description: "Откройте для себя наши ежедневные спецпредложения и ограниченные по времени акции",
        image: "/images/carousel/3.png"
    }
]

export default function Header() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselData.length)
        }, 5000) // Смена каждые 5 секунд

        return () => clearInterval(interval)
    }, [])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    return (
        <div className='header'>
            <div className="header-blok">
                <div className="header-carousel">
                    <div className="carousel-container">
                        {carouselData.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                            >
                                <div className="header-blok__container">
                                    <div className="header-blok__section-1">
                                        <h3>{slide.title}</h3>
                                        <h1>{slide.heading}</h1>
                                        <p>{slide.description}</p>
                                    </div>
                                    <div className="header-blok__section-2">
                                        <img src={slide.image} alt={slide.heading} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="carousel-indicators">
                        {carouselData.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};