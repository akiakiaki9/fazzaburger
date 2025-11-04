'use client'
import React, { useState, useEffect } from 'react'

export default function Page() {
    const [isIOS, setIsIOS] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Проверяем только на клиенте
        const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
        setIsIOS(iOS)
        setIsLoading(false)
    }, [])

    const handleOpenPdf = (e: React.MouseEvent) => {
        if (isIOS) {
            e.preventDefault()
            // Для iOS открываем в том же окне с предупреждением
            if (confirm('Меню откроется в этой вкладке. После просмотра нажмите "Назад" чтобы вернуться на сайт. Продолжить?')) {
                window.open('/menu.pdf', '_self')
            }
        } else {
            // Для других устройств открываем в новой вкладке
            window.open('/menu.pdf', '_blank', 'noopener,noreferrer')
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">Загрузка меню...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Заголовок */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Наше меню</h1>
                    <p className="text-lg text-gray-600">Выберите способ просмотра</p>
                </div>

                {/* Карточки с вариантами */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Вариант 1: Просмотр в новой вкладке */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                        <div className="text-center">
                            <div className="text-3xl mb-4">👀</div>
                            <h3 className="text-xl font-semibold mb-3">Быстрый просмотр</h3>
                            <p className="text-gray-600 mb-4">
                                {isIOS 
                                    ? 'Откроет меню в этой вкладке' 
                                    : 'Откроет меню в новой вкладке'
                                }
                            </p>
                            <button
                                onClick={handleOpenPdf}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                            >
                                {isIOS ? '📱 Открыть для просмотра' : '🔗 Открыть в новой вкладке'}
                            </button>
                        </div>
                    </div>

                    {/* Вариант 2: Скачивание */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                        <div className="text-center">
                            <div className="text-3xl mb-4">📥</div>
                            <h3 className="text-xl font-semibold mb-3">Скачать меню</h3>
                            <p className="text-gray-600 mb-4">
                                Сохранить файл на устройство для офлайн-доступа
                            </p>
                            <a
                                href="/menu.pdf"
                                download="menu_restaurant.pdf"
                                className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                            >
                                ⬇️ Скачать PDF
                            </a>
                        </div>
                    </div>
                </div>

                {/* Предпросмотр PDF (только для не-iOS устройств) */}
                {!isIOS && (
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Предпросмотр меню</h2>
                        <iframe
                            src="/menu.pdf"
                            width="100%"
                            height="600"
                            className="border rounded-lg"
                            title="Предпросмотр меню"
                        />
                        <p className="text-center text-gray-500 mt-4 text-sm">
                            Если меню не отображается, воспользуйтесь кнопками выше
                        </p>
                    </div>
                )}

                {/* Инструкция для iOS */}
                {isIOS && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mt-6">
                        <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                            📱 Инструкция для iPhone/iPad:
                        </h3>
                        <ul className="text-yellow-700 space-y-2 text-sm">
                            <li>• Для быстрого просмотра нажмите "Открыть для просмотра"</li>
                            <li>• Чтобы сохранить меню, нажмите "Скачать PDF"</li>
                            <li>• После скачивания откройте файл в приложении "Файлы"</li>
                            <li>• Чтобы вернуться на сайт, используйте кнопку "Назад" в браузере</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}