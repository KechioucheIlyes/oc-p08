'use client'
import React, { useRef, useEffect, useState } from 'react';
import styles from './description.module.css';
import Image from 'next/image';
import cross from "../../assets/cross.svg"
const Description = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [test, setTest] = useState([])





    return (
        <>
        <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className={styles.parallax}>
                            <use href="#gentle-wave" x="48" y="0" fill="rgba(246,246,246,0.9)" />
                            <use href="#gentle-wave" x="48" y="3" fill="rgba(246,246,246,0.5)" />
                            <use href="#gentle-wave" x="48" y="5" fill="rgba(246,246,246,0.3)" />
                            <use href="#gentle-wave" x="48" y="7" fill="#000" />
                        </g>
                    </svg>
        <section id='description' className={`${styles.descriptionContainer}  ${isVisible ? styles.visible : ''} ${styles.scrollEffect}`} >

            <div className={`${styles.customCursor}`} />
            <div className={styles.informationContainer}>
                <div className={styles.borderSquare}>
                    <div id="square" className={` ${styles.square}`}>

                        <Image className={styles.crossAnimation} src={cross} height={250} width={250} alt='cross' priority />

                    </div>
                </div>
                <div className={styles.textInfo}>
                    <p>Je suis un développeur web passionné par le front-end et le back-end. Autodidacte en alternance, je crée des expériences en ligne captivantes. Compétences : HTML, CSS, JavaScript pour des interfaces intuitives, et back-end (Python, Ruby, PHP) pour des fonctionnalités robustes et sécurisées.

                        Portfolio axé sur l'innovation, l'adaptabilité et le souci du détail. Projets ambitieux bienvenus ! Contactez-moi pour discuter de vos idées !

                        <br></br><span className={styles.tag}>Créons ensemble le web de demain.</span> {test ? test : null}</p>
                </div>

            </div>
            
        <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className={styles.parallax}>
                            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                            <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use href="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
        </section>
        </>
        
    );
}

export default Description;
