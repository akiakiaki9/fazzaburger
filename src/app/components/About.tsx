'use client'
import React, { useState, useRef, useEffect } from 'react'
import '../styles/about.css'

export default function About() {
    const [isVideoOpen, setIsVideoOpen] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (isVideoOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isVideoOpen])

    const handlePlayClick = () => {
        setIsVideoOpen(true)
    }

    const handleCloseVideo = () => {
        setIsVideoOpen(false)
        if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
        }
    }

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleCloseVideo()
        }
    }

    return (
        <div className='about' id='about-us'>
            <div className="about-blok">
                <div className="about-blok__container">
                    <div className="about-blok__container__section">
                        <div className="video-section">
                            <div className="play-button-wrapper" onClick={handlePlayClick}>
                                <div className="rotating-text-container">
                                    <div className="circular-text">
                                        <svg viewBox="0 0 100 100" width="100" height="100">
                                            <defs>
                                                <path id="circle"
                                                    d="M 50, 50
                                               m -37, 0
                                               a 37,37 0 1,1 74,0
                                               a 37,37 0 1,1 -74,0"/>
                                            </defs>
                                            <text font-size="8" fill="#fff">
                                                <textPath xlinkHref="#circle">
                                                    VIDEO FAZZA BURGER • VIDEO FAZZA BURGER •
                                                </textPath>
                                            </text>
                                        </svg>
                                    </div>
                                </div>

                                <div className="play-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div className="play-text">play</div>
                            </div>
                        </div>
                        <h1 className="main-title">MAKE THE THING ANYTHING IS POSSIBLE</h1>
                    </div>
                </div>
            </div>

            {isVideoOpen && (
                <div className="video-modal-backdrop" onClick={handleBackdropClick}>
                    <div className="video-modal">
                        <button className="close-button" onClick={handleCloseVideo}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>

                        <video
                            ref={videoRef}
                            className="video-player"
                            controls
                            autoPlay
                        >
                            <source src="/videos/fazza.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    )
};