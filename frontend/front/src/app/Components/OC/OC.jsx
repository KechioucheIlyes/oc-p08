'use client'
import React from 'react'
import styles from "./oc.module.css"
import { Github, Gitlab } from 'lucide-react'
import Image from 'next/image'
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javascript from "../../assets/javascript-logo.png"
import react from "../../assets/react.png"
import nodejs from "../../assets/nodejs.png"
import Express from "../../assets/Express.png"
import mangodb from "../../assets/mongodb.png"
import Git from "../../assets/git.png"
const OC = () => {
    return (
        <section className={styles.sectionOc}>

            <div className={styles.title}>
                <h1>Developpeur Web</h1>
            </div>
            <div className={styles.description}>
                <h2>Maitrise du développement web et création des sites web de A à Z !</h2>
            </div>
            <div className={styles.content}>
                <ul>
                    <li>Construire un site web responsive et dynamique</li>
                    <li>Créer des API et des bases de données</li>
                    <li>Optimiser les performances et réaliser la maintenance de sites web déjà existants</li>
                    <li>Gérer un projet web de A à Z</li>
                </ul>
                <h3>Languages et technologies utilisées : </h3>
                <div className={styles.ulLogo}>
                    <Image src={html} alt='html' height={70} width={70} priority />
                    <Image src={css} alt='css' height={70} width={70} priority />
                    <Image src={javascript} alt='javascript' height={70} width={70} priority />
                    <Image src={react} alt='react' height={70} width={70} priority />
                    <Github className={styles.gitlogo} height={70} width={70} />
                    <Image src={Git} alt='Git' height={70} width={70} priority />
                    <Image src={nodejs} alt='nodejs' height={70} width={70} priority />
                    <Image src={Express} alt='express' height={70} width={70} priority />
                    <Image src={mangodb} alt='mangodb' height={70} width={70} priority />

                </div>

            </div>



        </section>
    )
}

export default OC