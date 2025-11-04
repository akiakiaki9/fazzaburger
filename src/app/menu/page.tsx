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

    if (isLoading) {
        return <div className="p-8 text-center">Загрузка...</div>
    }

    return (
        <div className="p-4">
            {isIOS ? (
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Наше меню</h1>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                        <p className="text-yellow-800 mb-4">
                            📱 Для просмотра меню на iPhone/iPad:
                        </p>
                        <a
                            href="/menu.pdf"
                            download="menu.pdf"
                            className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
                        >
                            ⬇️ Скачать меню PDF
                        </a>
                    </div>
                    <p className="text-gray-600">
                        После скачивания откройте файл в приложении Файлы или PDF-ридере
                    </p>
                </div>
            ) : (
                <div>
                    <iframe
                        src="/menu.pdf"
                        width="100%"
                        height="800px"
                        className="border rounded-lg"
                        title="Меню ресторана"
                    />
                </div>
            )}
        </div>
    )
}