'use client'
import { useEffect, useState } from 'react';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import github from "../../assets/github.svg"
import styles from "./about.module.css"

import { TypeAnimation } from 'react-type-animation';





const About = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [showTitles, setShowTitles] = useState(false);
    const [cursorAnimName, setCursorAnimName] = useState(true);
    const [cursorDesc, setCursorDesc] = useState(false);
    const [cursorBtn, setCursorBtn] = useState(false);
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

   const handleUpdate = () => {
    setShowTitles(true);
    setCursorAnimName(false); 
    
   }


    return (
        <section
            id='about'
            className={`${styles.animateBorder} ${isVisible ? styles.visible : ''} ${styles.scrollEffect}`}
        >

            <div className={styles.infos}>
                <div className={styles.fullName}>
                <h1>
                <TypeAnimation
      cursor={false}
      style={{
        fontSize: '1em',
      }}
      className={CURSOR_CLASS_NAME}
      sequence={[
        'Kechiouche Ilyes',
        1000,
        handleUpdate,
        (el) => 
            {
                el.classList.remove(CURSOR_CLASS_NAME)


            },

      ]}
      repeat={false}
    />

                </h1>

                <h2>
                            {showTitles && (      
                                <TypeAnimation
                                sequence={[
                                    'Développeur Front-End',
                                    1000,
                                    'Développeur Back-End',
                                    1000,
                                    'Développeur Full-Stack',
                                    1000,
                                    (el) => 
                                        {
                                            el.classList.remove(CURSOR_CLASS_NAME)
                                            setCursorDesc(true)
                            
                                        },

                                ]}
                                speed={50}
         
                                repeat={false}
                                className={CURSOR_CLASS_NAME}
                                cursor={false}
                            />
                            
                            
                            )}
                </h2>

                </div>
                <div className={styles.description}>
                    
                <div className={styles.fullName}>

<h3>
        {cursorDesc && 
        (<TypeAnimation
                                        sequence={[
                                            "Autodidacte et passionné par le développement web, l'UI/UX et l'accessibilité depuis 5 ans.",
                                            1000,() =>{
                                                setCursorBtn(true)
                                            }

                                        ]}
                                        speed={50}
                                    
                                        repeat={false}
                                    /> )}
                            
</h3>
                </div>
                </div>

               

            </div>









        </section>

    )
}

export default About