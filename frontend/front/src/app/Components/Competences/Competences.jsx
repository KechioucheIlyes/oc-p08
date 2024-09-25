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
    const [isVisible, setIsVisible] = useState(true);

    return (
        <section id='competences' className={`${styles.competencesContainer} ${isVisible ? styles.visible : ''} ${styles.scrollEffect}`}>
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
            </div>

        </section>


    )
}

export default Competences