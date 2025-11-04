'use client'
import React, { useEffect, useState } from 'react';
import '../styles/carousel.css';

interface GalleryImage {
    id: number;
    src: string;
    alt: string;
}

export default function Gallery() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const burgerImages = [
        '/images/gallery/1.jpg',
        '/images/gallery/2.jpg',
        '/images/gallery/3.jpg',
        '/images/gallery/4.jpg',
        '/images/gallery/5.jpg',
        '/images/gallery/6.jpg',
        '/images/gallery/7.jpg',
        '/images/gallery/8.jpg',
        '/images/gallery/9.jpg',
        '/images/gallery/10.jpg',
        '/images/gallery/11.jpg',
        '/images/gallery/12.jpg',
        '/images/gallery/13.jpg',
        '/images/gallery/14.jpg',
        '/images/gallery/15.jpg',
        '/images/gallery/16.jpg',
    ];

    const images: GalleryImage[] = burgerImages.map((src, index) => ({
        id: index + 1,
        src: src,
        alt: `Бургер ${index + 1}`
    }));

    // Показываем только первые 8 фото в grid
    const displayedImages = images.slice(0, 8);
    // В модалке все 16 фото
    const allImages = images;

    // Блокировка скролла при открытии модального окна
    useEffect(() => {
        if (selectedImageIndex !== null) {
            // Сохраняем текущую позицию скролла
            const scrollY = window.scrollY;
            
            // Блокируем скролл
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
            
            // Возвращаем скролл при размонтировании
            return () => {
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                window.scrollTo(0, scrollY);
            };
        }
    }, [selectedImageIndex]);

    const openModal = (index: number) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const nextImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prevIndex) =>
                prevIndex === allImages.length - 1 ? 0 : prevIndex! + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prevIndex) =>
                prevIndex === 0 ? allImages.length - 1 : prevIndex! - 1
            );
        }
    };

    // Обработка нажатия клавиши Escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && selectedImageIndex !== null) {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleEscape);
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [selectedImageIndex]);

    return (
        <div className="gallery-container" id="gallery">
            {/* Grid с 8 фотографиями */}
            <div className="gallery-grid">
                {displayedImages.map((image, index) => (
                    <div
                        key={image.id}
                        className="gallery-item"
                        onClick={() => openModal(index)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            width={300}
                            height={400}
                            className="gallery-image"
                            loading={index < 3 ? "eager" : "lazy"}
                        />
                    </div>
                ))}
            </div>

            {/* Модальное окно со всеми фото */}
            {selectedImageIndex !== null && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        {/* Кнопка закрытия */}
                        <button className="modal-close" onClick={closeModal}>
                            ×
                        </button>

                        {/* Основное изображение */}
                        <div className="modal-image-container">
                            <img
                                src={allImages[selectedImageIndex].src}
                                alt={allImages[selectedImageIndex].alt}
                                width={960}
                                height={1280}
                                className="modal-image"
                            />
                        </div>

                        {/* Навигация */}
                        <button
                            className="modal-nav modal-prev"
                            onClick={prevImage}
                            aria-label="Предыдущее фото"
                        >
                            ‹
                        </button>

                        <button
                            className="modal-nav modal-next"
                            onClick={nextImage}
                            aria-label="Следующее фото"
                        >
                            ›
                        </button>

                        {/* Счетчик */}
                        <div className="modal-counter">
                            {selectedImageIndex + 1} / {allImages.length}
                        </div>

                        {/* Миниатюры всех 16 фото */}
                        <div className="modal-thumbnails">
                            {allImages.map((image, index) => (
                                <div
                                    key={image.id}
                                    className={`thumbnail ${index === selectedImageIndex ? 'thumbnail-active' : ''}`}
                                    onClick={() => setSelectedImageIndex(index)}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        width={80}
                                        height={100}
                                        className="thumbnail-image"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}