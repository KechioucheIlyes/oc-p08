
"use client"
import Link from 'next/link'
import styles from "../NavBar/navbar.module.css"
import { useEffect, useState } from 'react';





const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <header className={`${styles.header} ${scrolling ? styles.scrolling : ''}`}>
            
            <label className={styles.toggle} >
                <input className={styles.checkbox} />
                <span className={styles.slider} ></span>
            </label>
            <nav className={styles.navbar} >
                <ul>
                    <li><Link className='link' onClick={() => handleScrollToSection('about')} href={"#"}>À propos</Link></li>
                    <li><Link className='link' onClick={() => handleScrollToSection('services')} href={"#"}>Services</Link></li>
                    <li><Link className='link' onClick={() => handleScrollToSection('formation')} href={"#"}>Formation</Link></li>
                    <li><Link className='link' onClick={() => handleScrollToSection('github')} href={"#"}>API Github</Link></li>
                    <li><Link className='link' onClick={() => handleScrollToSection('competences')} href={"#"}>Competences</Link></li>
                    <li><Link className='link' onClick={() => handleScrollToSection('contact')} href={"#"}>Contact</Link></li>

                </ul>


            </nav>
        </header>




    )
}

export default Navbar