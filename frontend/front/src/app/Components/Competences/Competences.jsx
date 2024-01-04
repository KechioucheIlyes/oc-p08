'use client'
import React, { useEffect, useState } from 'react'
import styles from "./competences.module.css"
import Image from 'next/image'
import ReactPic from "../..//assets/react.png"
import jsPic from "../..//assets/js-2.png"
import html from "../..//assets/html-2.png"
import css from "../..//assets/css.png"
import typescript from "../..//assets/typescript.svg"
import nodejs from "../../assets/nodejs.png"
import mysql from "../../assets/mysql.png"
import python from "../../assets/Python.svg"
import mangodb from "../../assets/mongodb.png"
import phpic from "../../assets/php.png"
import Progress from 'react-circle-progress-bar'

const Competences = () => {
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
        observer.observe(document.querySelector('#competences'));

        return () => observer.disconnect();
    }, []);
    return (
        <section id='competences' className={`${styles.competencesContainer} ${isVisible ? styles.visible : ''} ${styles.scrollEffect}`}>
            <div className={styles.svgContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,229.3C672,224,768,160,864,122.7C960,85,1056,75,1152,101.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <div className={styles.competencesContains}>
                <h1>Competences</h1>
                <div className={styles.stacks}>
                    <div className={styles.frontContainer}>
                        <div className={styles.frontTitle}>
                            <h2>Front-End :</h2>
                        </div>
                        <div className={`${styles.frontend}`}>
                            <div className={styles['image-container']}>
                                <div className={styles['slide-animation']}>
                                    <div className={styles['image-item']}>
                                        <Image src={ReactPic} height={100} width={100} alt='ReactPic' priority />
                                        <div className={styles['slide-animation']}>
                                        <Progress className={styles['progress']} progress={85} reduction={0.50} background='#fff' transitionDuration={1}  />
                                        </div>
                                    </div>
                                    <div className={styles['image-item']}>
                                        <Image src={jsPic} height={100} width={100} alt='jsPic' priority />
                                        <div className={styles['slide-animation']}>
                                        <Progress className={styles['progress']} reduction={0.50} progress={90} background='#fff' transitionDuration={1} gradient={[{color : "#f7e01c"}]}/>
                                        </div>
                                    </div>
                                    <div className={styles['image-item']}>
                                        <Image src={typescript} height={100} width={100} alt='typescript' priority />
                                        <div className={styles['slide-animation']}>
                                        <Progress className={styles['progress']} reduction={0.50} progress={75} background='#fff' transitionDuration={1} gradient={[{color : "#007acc"}]} />
                                        </div>
                                    </div>
                                    <div className={styles['image-item']}>
                                        <Image src={html} height={100} width={100} alt='html' priority />
                                        <div className={styles['slide-animation']}>
                                        <Progress className={styles['progress']}  reduction={0.50} progress={95} background='#fff' transitionDuration={1} gradient={[{color : "#f26529"}]} />
                                        </div>
                                    </div>
                                    <div className={styles['image-item']}>
                                        <Image src={css} height={100} width={100} priority alt='css' />
                                        <div className={styles['slide-animation']}>
                                        <Progress className={styles['progress']} reduction={0.50} progress={95} background='#fff' transitionDuration={1} gradient={[{color : "#009de8"}]} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.backendContainer}>
                        <div className={styles.backendTitle}>
                            <h2>Back-End :</h2>
                        </div>
                        <div className={styles.backend}>
                            <div className={styles['image-container']}>
                                <div className={styles['slide-animation']}>
                                    <div className={styles['image-item']}>
                                        <Image src={nodejs} height={100} width={100} priority alt='nodejs' />
                                        <div className={styles['slide-animation']}>
                                        <Progress className={styles['progress']} reduction={0.50} progress={85} background='#fff' transitionDuration={1} gradient={[{color : "#8cc041"}]} />
                                        </div>
                                    </div>
                                    <div className={styles['image-item']}>
                                        <Image src={mangodb} height={100} width={100} priority alt='mangodb' />
                                        <div className={styles['slide-animation']}>
                                        <Progress className={styles['progress']} reduction={0.50} progress={85} background='#fff' transitionDuration={1} gradient={[{color : "#01ec64"}]} />
                                        </div>
                                    </div>
                                    <div className={styles['image-item']}>
                                        <Image src={python} height={100} width={100} priority alt='python' />
                                        <div className={styles['slide-animation']}>
                                        <Progress className={styles['progress']} reduction={0.50} progress={80} background='#fff' transitionDuration={1} gradient={[{stop: 0.8, color: '#397eb8'}, {stop: 1, color:  '#ffc331'} ]} />
                                        </div>
                                    </div>
                                    <div className={styles['image-item']}>
                                        <Image src={mysql} height={100} width={100} priority alt='mysql' />
                                        <div className={styles['slide-animation']}>
                                        <Progress className={styles['progress']} reduction={0.50} progress={80} background='#fff' transitionDuration={1}   gradient={[{color : "#01698e"}]}/>
                                        </div>
                                    </div>
                                    <div className={styles['image-item']}>
                                        <Image src={phpic} height={100} width={100} priority alt='phpic' />
                                        <div className={styles['slide-animation']}>
                                        <Progress className={styles['progress']} progress={65}  reduction={0.50} background='#fff' transitionDuration={1} gradient={[{color : "#7076ab"}]} />
                                        </div>
                                    </div>
                                </div>






                            </div>

                        </div>

                    </div>
                </div>

                <div className={styles.svgBottom}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffffff" fillOpacity="1" d="M0,224L60,192C120,160,240,96,360,80C480,64,600,96,720,122.7C840,149,960,171,1080,160C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                </div>

            </div>

        </section>


    )
}

export default Competences