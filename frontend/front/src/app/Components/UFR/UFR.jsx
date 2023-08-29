import React from 'react'
import styles from "./ufr.module.css"
import Image from 'next/image'
import Java from "../../assets/Java.png"
import Caml from "../../assets/OCaml_Logo.svg"
import C from "../../assets/C.png"
import mysql from "../../assets/mysql.png"
import python from "../../assets/Python.svg"

const UFR = () => {
    return (
        <section className={styles.sectionUfr}>
            <div className={styles.title}>
                <h1>L2 informatique</h1>
            </div>
            <div className={styles.description}>
                <h2>Maitrise du développement web et création des sites web de A à Z !</h2>
            </div>
            <div className={styles.content}>
                <ul>

                    <li>Maîtrise avancée de plusieurs langages de programmation, avec une solide expertise dans les techniques de programmation associées</li>
                    <li>Adeption d'une méthodologie holistique pour résoudre des problèmes complexes, allant de la phase de spécification jusqu'à l'implémentation finale</li>
                    <li>Fondement théorique solide permettant la compréhension éclairée de l'évolution des langages de programmation et des outils connexes</li>
                    <li>Formation académique enrichie en mathématiques et en traitement numérique de l'information, contribuant à une culture scientifique approfondie</li>
                    <li>Capacité avérée à diriger des projets avec succès et à collaborer efficacement au sein d'équipes multidisciplinaires.</li>
                </ul>
                <h3>Languages et technologies utilisées : </h3>
                <div className={styles.ulLogo}>
                    <Image src={C} alt='C' height={70} width={70} priority />
                    <Image src={Caml} alt='Caml' height={100} width={100} priority />
                    <Image src={Java} alt='Java' height={80} width={80} priority />
                    <Image src={mysql} alt='mysql' height={70} width={70} priority />
                    <Image src={python} alt='python' height={70} width={70} priority />

                </div>

            </div>
        </section>
    )
}

export default UFR