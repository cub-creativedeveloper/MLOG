"use client"
import Header from "@/components/Header";
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import menuItems from './menulist';
import Link from "next/link";
import Menu from "./Menu";


export const Navbar = () => {

    const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false);
    const menuRef = useRef(null);
    const mobMenuToggle = useRef(null);

    const toggleMobileMenu = () => {
        setMobileMenuIsActive(prev => !prev)
        console.log(mobileMenuIsActive)
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && mobMenuToggle.current && !mobMenuToggle.current.contains(event.target)) {
            // Click occurred outside the menu, so close the menu
            setMobileMenuIsActive(false);
            console.log("mobileMenuIsActive")
        }
    };
    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener('click', handleClickOutside);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className="overflow-hidden relative">
            <Header />
            <Menu menuRef={menuRef} mobileMenuIsActive={mobileMenuIsActive}
                toggleMobileMenu={toggleMobileMenu} mobMenuToggle={mobMenuToggle} />

        </nav>
    )
}