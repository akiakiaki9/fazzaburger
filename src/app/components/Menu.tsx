'use client'
import Link from 'next/link'
import React from 'react'

export default function Menu() {
    return (
        <div className='menu'>
            <h1>POPULAR DISHES</h1>
            <div className="menu-blok">
                <div className="menu-blok__header">
                    <button>FAST FOOD</button>
                    <button>PIZZA</button>
                    <button>SALATS</button>
                    <button>DRINKS</button>
                </div>
                <div className="menu-blok__container">
                    <div className="menu-blok__container-section">
                        <img src="" alt="" />
                        <h2>Name</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, libero.</p>
                        <h2>Price</h2>
                    </div>
                </div>
            </div>
            <Link href='/menu'>VIEW ALL</Link>
        </div>
    )
};