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
            <div className={styles.svgContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,229.3C672,224,768,160,864,122.7C960,85,1056,75,1152,101.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fillOpacity="1" d="M0,224L60,192C120,160,240,96,360,80C480,64,600,96,720,122.7C840,149,960,171,1080,160C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>  
            </div>
            
        </section>
        
    );
}

export default Description;
