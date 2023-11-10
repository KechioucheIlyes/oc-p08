'use client'
import React, { useEffect, useState } from 'react'
import styles from "../Services/services.module.css"
import Image from 'next/image'
import KasaProject from "../../assets/kasa-project.png"
import api from "../../assets/api.svg"
import surMesure from "../../assets/Sur-mesure.png"
import design from "../../assets/deisgn.svg"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

const Services = () => {
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
        observer.observe(document.querySelector('#services'));

        return () => observer.disconnect();
    }, []);

    return (

        <section id='services' className={`${styles.serviceContainer} ${isVisible ? styles.visible : ''} ${styles.scrollEffect}`}>
            <div className={styles.title}>
                <h1>Mes services</h1>
            </div>



            <div className={styles.serviceCardsContainer}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}

                    slidesPerView={2}
                    coverflowEffect={
                        {
                            rotate: 20,
                            stretch: 0,
                            depth: 600,
                            modifier: 2.5,
                        }
                    }
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className='swiper_container'
                >
                    <SwiperSlide>
                        <div className={styles.serviceCard} >
                            <div className={styles.CardTilte}>

                                Développement d'applications web sur mesure
                            </div>

                            <Image src={surMesure} alt='sur-mesure' priority width={700} height={700} />
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.serviceCard} >
                            <div className={styles.CardTilte}>

                                Création de sites web réactifs et optimisés pour les appareils mobiles
                            </div>

                            <Image src={KasaProject} alt='Kasa-OC-Project' priority width={700} height={700} />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.serviceCard} >
                            <div className={styles.CardTilte}>

                                Développement d'API et intégrations
                            </div>
                            <Image src={api} alt='api' priority width={700} height={700} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.serviceCard} >
                            <div className={styles.CardTilte}>

                                Web design
                            </div>
                            <Image src={design} alt='design' priority width={700} height={700} />
                        </div>
                    </SwiperSlide>


                    <div className='slider-controler'>
                        <div className='swiper-button-prev slider-arrow'>
                            <ion-icon name='arrow-back-outline'></ion-icon>
                        </div>
                        <div className='swiper-button-next slider-arrow'>
                            <ion-icon name='arrow-forward-outline'></ion-icon>
                        </div>
                        <div className='swiper-pagination'></div>
                    </div>

                </Swiper>
            </div>

        </section>


    )
}

export default Services