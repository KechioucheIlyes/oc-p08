'use client'
import { useEffect, useState } from 'react';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import github from "../../assets/github.svg"
import styles from "./about.module.css"






const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        };

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);
        observer.observe(document.querySelector('#about'));

        return () => observer.disconnect();
    }, []);
    return (
        <section
            id='about'
            className={`${styles.animateBorder} ${isVisible ? styles.visible : ''} ${styles.scrollEffect}`}
        >

            <div className={styles.infos}>
                <div className={styles.fullName}>
                    <h1>Kechiouche Ilyes</h1>
                    <h2>Développeur Full-stack.</h2>
 

                </div>
                <div className={styles.description}>
                    <h3>Autodidacte de 25 ans et passionné par le développement web, l'UI/UX et l'accessibilité depuis 5 ans</h3>
                </div>

                <div className='btns-container'>
                    <button className={styles.btnBlackAndWhite} ><Link className={styles.link} href={"#"}>Contact</Link> </button>
                    <Link className={styles.btnWhiteAndBlack} href={"https://github.com/KechioucheIlyes"} target='_blank'><Image src={github} width={20} height={20} alt='github' priority /> Github</Link>

                </div>


            </div>


            <div id="shapes" className={styles.shapes}>
                <div id="triangle" className={`${styles.shape} ${styles.triangle}`}></div>
                <div id="circle" className={`${styles.shape} ${styles.circle}`}></div>
                <div id="square" className={`${styles.shape} ${styles.square}`}></div>
            </div>






        </section>

    )
}

export default About