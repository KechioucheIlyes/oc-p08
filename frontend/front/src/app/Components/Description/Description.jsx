'use client'
import React, { useRef, useEffect, useState } from 'react';
import styles from './description.module.css';
import Image from 'next/image';
import cross from "../../assets/cross.svg"
const Description = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [test, setTest] = useState([])

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
        observer.observe(document.querySelector('#description'));

        return () => observer.disconnect();
    }, []);



    return (
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
            
        </section>
        
    );
}

export default Description;
