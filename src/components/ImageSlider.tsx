'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const images = [
    '/S__6135810.jpg',
    '/sanan__4448270.jpg',
    'https://picsum.photos/id/1018/1200/500',
]

export default function ImageSlider() {
    const [index, setIndex] = useState(0)

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-xl">

            {/* Slides */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {images.map((src, i) => (
                    <div key={i} className="w-full flex-shrink-0 relative h-[400px]">
                        <Image
                            src={src}
                            alt={`Slide ${i}`}
                            fill
                            className="object-cover"
                            priority={i === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Prev Button */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 px-4 py-2 rounded-full shadow hover:bg-white"
            >
                ◀
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 px-4 py-2 rounded-full shadow hover:bg-white"
            >
                ▶
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 w-2 rounded-full ${index === i ? 'bg-white' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
