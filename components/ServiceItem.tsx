"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from "next/image";

const ServiceItem = ({ item, index }) => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(`serviceItem-${index}`);
            if (element) {
                const top = element.getBoundingClientRect().top;
                const isVisible = top < window.innerHeight - 100;
                if (isVisible) {
                    controls.start({ opacity: 1, x: 0 });
                }
            }
        };

        // Initial check on mount
        handleScroll();

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls, index]);

    return (
        <motion.div
            id={`serviceItem-${index}`}
            className={`md:flex gap-4 space-y-9 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={controls}
            transition={{ duration: 0.5 }}
        >
            <div className={`w-full md:w-2/3 ${index % 2 === 0 && 'md:rounded-lg md:bg-slate-400 md:p-5'}`}>
                <h1 className="djnofn">{item.title}</h1>
                <p className="aftghr">{item.description}</p>
            </div>
            <div className="w-full md:w-1/3">
                <Image src={item.icon} alt="serviceicon" className="hpmgs" width={5000} height={5000} />
            </div>
        </motion.div>
    );
};

export default ServiceItem