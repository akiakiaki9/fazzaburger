import React from 'react'

export default function Page() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    return (
        <div>
            {isIOS ? (
                // Для iOS - прямая ссылка
                <div className="text-center p-8">
                    <h2 className="text-2xl mb-4">Меню</h2>
                    <p className="mb-4">Для просмотра меню на iOS устройстве:</p>
                    <a
                        href="/menu.pdf"
                        download="menu.pdf"
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-blue-600"
                    >
                        Скачать меню PDF
                    </a>
                </div>
            ) : (
                // Для других устройств - iframe
                <iframe
                    src="/menu.pdf"
                    width="100%"
                    height="800px"
                    className="border rounded-lg"
                />
            )}
        </div>
    )
}