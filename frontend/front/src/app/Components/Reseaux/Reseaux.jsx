'use client'
import React, { useEffect, useState } from 'react'
import styles from "./reseaux.module.css"
import { DiscIcon, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import X from "../../assets/x.png"
import Link from 'next/link'
import discord from "../../assets/discord.png"

const Reseaux = () => {
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
        observer.observe(document.querySelector('#reseaux'));

        return () => observer.disconnect();
    }, []);
    return (
        <section id='reseaux' className={`${styles.reseauxContainer} ${isVisible ? styles.visible : ''} ${styles.scrollEffect}`}>
            <h1>Mes Réseaux</h1>
            <div className={styles.reseauCards}>
                <Link className={styles.gitContainer} href={"https://github.com/KechioucheIlyes"} target='_blank'>
                    <div className={styles.gitCard}>
                        <Github color='white' height={50} width={50} />
                        <h2>Github</h2>
                    </div>

                </Link>


                <Link className={styles.discordContainer} href={"https://twitter.com/ILKechiouche"} target='_blank'>
                    <div className={styles.discord}>
                        <Image alt='discord' src={discord} height={50} width={50} priority />
                        <h2>Discord</h2>

                    </div>
                </Link>

                <Link className={styles.linkedinContainer} href={"https://www.linkedin.com/in/ilyes-kechiouche/"} target='_blank'>
                    <div className={styles.linkedin}>
                        <Linkedin color='white' height={50} width={50} />
                        <h2>LinkedIn</h2>
                    </div>
                </Link>


                <Link className={styles.xContainer} href={"https://twitter.com/ILKechiouche"} target='_blank'>
                    <div className={styles.X}>
                        <Image src={X} height={50} width={50} priority alt='x' />
                        <h2>X (twitter)</h2>
                    </div>
                </Link>

            </div>


        </section>
    )
}

export default Reseaux