"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SlideItem from "@/components/home/SlideItem";
import slidesdata from "@/components/home/slidesdata";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesdata.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slidesdata.length) % slidesdata.length);
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);

        return () => clearInterval(intervalId); // Cleanup the interval when the component unmounts

    }, [currentSlide]);

    return (
        <div className="p-2 relative">
            <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <SlideItem index={currentSlide} />
            </motion.div>

            <button
                onClick={prevSlide}
                className="prevcarobtn"
            >
                <i className="fas fa-arrow-left"></i>
            </button>
            <button
                onClick={nextSlide}
                className="nexcarobtn"
            >
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    );
};

export default Carousel;
