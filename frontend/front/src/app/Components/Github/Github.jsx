'use client'

import React, { useEffect, useState } from 'react'
import styles from './github.module.css'
import Loader from '../Loader/Loader'
import Link from 'next/link'
import Image from 'next/image'
import bookiPic from "../../assets/Booki.png"
import ScrapPic from "../../assets/Mail_scrap.png"
import carducciPic from "../../assets/carducci.png"
import MVG from "../../assets/P07.png"
import Kasa from "../../assets/ScreenshotKasa.png"
import SohpieProject from "../../assets/P03.png"
import ViteTodo from "../../assets/todoList.png"
import defaultPic from "../../assets/defaultpic.jpg"
import { History } from 'lucide-react'
import pythonSvg from "../../assets/Python.svg"
import htmlPic from "../../assets/html.png"
import JS from "../../assets/javascript-logo.png"
import CSS from "../../assets/css.svg"
import portfolio from "../../assets/portfolio.png"
import SCSS from "../../assets/Sass.png"
import NextJs from "../../assets/nextBlack.png"
import fichierGit from "./../../fichier.json"
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';


const Github = () => {
    const [infos, setInfos] = useState([])
    const [infos2, setInfos2] = useState([])
    const [isVisible, setIsVisible] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [test, setTest] = useState([])
    const [open, setOpen] = useState(false);


    const handleOpenModal = () => {
        alert("modal")
    }


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
        observer.observe(document.querySelector('#github'));

        return () => observer.disconnect();
    }, []);


    return (
        <section id='github' className={`${styles.githubContainer} ${isVisible ? styles.visible : ''} ${styles.scrollEffect}`}>
            <h1>Github</h1>

            <div className={styles.cardsContainer}>

                {fichierGit.length > 0 ? (

                    <ul className={styles.githubList}>

                        {fichierGit.map((info, index) => {
                            return (<li className={styles.githubItem} key={info.id}>
                                <Link href={`${info.html_url}`} target='_blank' className={styles.card}>
                                    <div className={styles.cardHeader}>
                                        {info.name === "BOOKI" ? (<Image className={styles.imageCard} src={bookiPic} width={350} height={200} priority alt={`${info.name}-image`} />) :
                                            info.name === "Mail-Scrap-Mini-project" ? (<Image className={styles.imageCard} src={ScrapPic} width={350} height={200} priority alt={`${info.name}-image`} />) :
                                                info.name === "nina-carducci.github.io" ? (<Image className={styles.imageCard} src={carducciPic} width={350} height={200} priority alt={`${info.name}-image`} />) :
                                                    info.name === "P07-OC" ? (<Image className={styles.imageCard} src={MVG} width={350} height={200} priority alt={`${info.name}-image`} />) :
                                                        info.name === "P6-OC" ? (<Image className={styles.imageCard} src={Kasa} width={350} height={200} priority alt={`${info.name}-image`} />) :
                                                            info.name === "Projet_3_OC" ? (<Image className={styles.imageCard} src={SohpieProject} width={350} height={200} priority alt={`${info.name}-image`} />) :
                                                                info.name === "todo-list-VIte" ? (<Image className={styles.imageCard} src={ViteTodo} width={350} height={200} priority alt={`${info.name}-image`} />) :
                                                                    info.name === "Projet_3_OC" ? (<Image className={styles.imageCard} src={SohpieProject} width={350} height={200} priority alt={`${info.name}-image`} />) :
                                                                        info.name === "oc-p08" ? (<Image className={styles.imageCard} src={portfolio} width={350} height={200} priority alt={`${info.name}-image`} />) :
                                                                            <Image className={styles.imageCard} src={defaultPic} width={350} height={210} priority alt={`${info.name}-image`} />

                                        }
                                    </div>
                                    <div className={styles.cardBodyContainer}>
                                        <div className={`${styles.cardBody} `}>
                                            <div className={styles.cardTitle}>{info.name.length > 16 ? info.name.substring(0, 16) + "..." : info.name}</div>
                                            <div className={styles.cardText}>{

                                                info.language === "HTML" ? (
                                                    <div className={styles.logo}>
                                                        <Image src={htmlPic} width={40} height={40} priority alt={`${info.language}-image`} />
                                                        <Image src={CSS} width={40} height={40} priority alt={`${info.language}-image`} />
                                                    </div>) :

                                                    info.language === "Python" ? (
                                                        <div className={styles.logo}>
                                                            <Image src={pythonSvg} width={45} height={45} priority alt={`${info.language}-image`} />
                                                            <Image src={JS} width={40} height={40} priority alt={`${info.language}-image`} />
                                                            <Image src={CSS} width={40} height={40} priority alt={`${info.language}-image`} />

                                                        </div>) :
                                                        info.language === "SCSS" ? (
                                                            <div className={styles.logo}>
                                                                <Image src={JS} width={40} height={40} priority alt={`${info.language}-image`} />
                                                                <Image src={SCSS} width={50} height={50} priority alt={`${info.language}-image`} />
                                                                <Image className={styles.next} src={NextJs} width={50} height={50} priority alt={`${info.language}-image`} />

                                                            </div>) :

                                                            info.language === "JavaScript" ? (
                                                                <div className={styles.logo}>
                                                                    <Image src={JS} width={40} height={40} priority alt={`${info.language}-image`} />
                                                                    <Image src={CSS} width={40} height={40} priority alt={`${info.language}-image`} />
                                                                </div>) :

                                                                info.language
                                            }
                                            </div>
                                            <div className={styles.cardFooter}>Créé le : {info.created_at.slice(8, 10)}/{info.created_at.slice(5, 7)}/{info.created_at.slice(0, 4)}</div>

                                        </div>
                                        <div className={`${styles.sidebar}`}>

                                        </div>
                                        <div className={`${styles.first}`}></div>
                                        <div className={styles.cardBody}>
                                            <div className={styles.cardTitle}><History /> <span>{info[index]} commit </span> </div>
                                            <div className={`${styles.cardText} ${styles.second}`}>
                                                {info.stargazers_count}
                                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={styles.star}>
                                                    <path fill='#e3b341' d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
                                                </svg>

                                            </div>
                                            <div className={styles.cardFooter}>
                                                {info.private ? null : <span>Public</span>}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
                                    Plus de details sur le projet
                                </Button>
                                <Modal
                                    key={info.id}
                                    aria-labelledby="modal-title"
                                    aria-describedby="modal-desc"
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Sheet
                                    variant="outlined"
                                    sx={{
                                        maxWidth: '500',
                                        borderRadius: 'md',
                                        p: 3,
                                        boxShadow: 'lg',
                                        width : '90%'
                                    }}
                                    >
                                    <ModalClose variant="plain" sx={{ m: 1 }} />
                                    <Typography
                                        component="h2"
                                        id="modal-title"
                                        level="h4"
                                        textColor="inherit"
                                        fontWeight="lg"
                                        mb={1}
                                    >
                                    {console.log(info.name , index)}
                                    </Typography>
                                    <Typography id="modal-desc" textColor="text.tertiary">
                                        <code>aria-labelledby</code> on the modal dialog with an
                                        optional <code>aria-describedby</code> attribute.
                                    </Typography>
                                    </Sheet>
                                </Modal>
                            </li>)
                        })}
                    </ul>
                ) : (
                    <div className={styles.loaderContainer}>
                        <Loader numbers={5} />
                    </div>
                )}
            </div>
        </section>
    );
}

export default Github;
