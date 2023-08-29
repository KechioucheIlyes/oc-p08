import React from 'react'
import styles from "./udemy.module.css"
import Image from 'next/image'
import python from "../../assets/Python.svg"
import flutter from "../../assets/flutter.png"
import dart from "../../assets/Dart_logo.png"
import react from "../../assets/react.png"
import mysql from "../../assets/mysql.png"
import nodejs from "../../assets/nodejs.png"
import linux from "../../assets/linux.png"
const Udemy = () => {
    return (
        <section className={styles.sectionUdemy}>
            <div className={styles.title}>
                <h1>Autodidacte</h1>
            </div>
            <div className={styles.description}>
                <h2>En constante quête d'apprentissage et de développement personnel</h2>
            </div>
            <div className={styles.content}>
                <p>J'utilise Udemy comme un outil essentiel dans mon parcours d'apprentissage autodidacte, exploitant sa vaste gamme de cours pour approfondir mes compétences en développement web, découvrir de nouvelles technologies et élargir mon expertise dans le domaine.</p>

                <h3>Languages et technologies utilisées : </h3>
                <div className={styles.ulLogo}>

                    <Image src={nodejs} alt='nodejs' height={70} width={70} priority />
                    <Image src={python} alt='python' height={70} width={70} priority />
                    <Image src={flutter} alt='flutter' height={70} width={70} priority />
                    <Image src={dart} alt='dart' height={70} width={70} priority />
                    <Image src={react} alt='react' height={70} width={70} priority />
                    <Image src={mysql} alt='mysql' height={70} width={70} priority />
                    <Image src={linux} alt='linux' height={70} width={70} priority />

                </div>

            </div>
        </section>
    )
}

export default Udemy