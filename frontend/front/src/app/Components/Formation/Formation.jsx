'use client'
import React, { useEffect, useState } from 'react';
import styles from "./formatiion.module.css";

import { Box, Modal } from '@mui/material';
import OC from "../OC/OC"
import UFR from '../UFR/UFR';
import Udemy from '../Udemy/Udemy';
const Formation = () => {
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
    observer.observe(document.querySelector('#formation'));

    return () => observer.disconnect();
  }, []);
  const [selectedFormation, setSelectedFormation] = useState(null); // État pour suivre la formation sélectionnée
  const [modalOpen, setModalOpen] = useState(false); // État pour suivre si la modal est ouverte

  const handleFormationClick = (formation) => {
    setSelectedFormation(formation);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedFormation(null);
    setModalOpen(false);
  };
  let modalBackgroundClass = '';

  const modalBackgroundCommon = {
    width: '80%',
    maxWidth: 'none',
    margin: 'auto',
    padding: '20px',
    height: 'auto',


  };

  const modalBackgroundStyles = {
    OC: {
      ...modalBackgroundCommon,
      background: 'linear-gradient(to right, #6d41fb, #a58df7)',

    },
    UFR: {
      ...modalBackgroundCommon,
      background: 'linear-gradient(to right, #df81ac, #14b2df)'
    },
    UDEMY: {
      ...modalBackgroundCommon,
      background: 'linear-gradient(to right, #a330fa,#ce8fff)'
    }
  };

  modalBackgroundClass = modalBackgroundStyles[selectedFormation];

  return (
    <section id='formation' className={`${styles.formationContainer} ${isVisible ? styles.visible : ''} ${styles.scrollEffect}`}>
      <div className={styles.svgContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,229.3C672,224,768,160,864,122.7C960,85,1056,75,1152,101.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <div className={styles.title}>
        <h1>Formation</h1>
      </div>
      <div className={styles.cardContainer}>

        <div className={`${styles.card} ${styles.OC}`} onClick={() => handleFormationClick('OC')}>

        </div>
        <div className={`${styles.card} ${styles.UFR}`} onClick={() => handleFormationClick('UFR')}>

        </div>
        <div className={`${styles.card} ${styles.UDEMY}`} onClick={() => handleFormationClick('UDEMY')}>

        </div>
      </div>

      <Modal className={`${styles.modalContainer} ${styles.modalBackgroundClass}`} open={modalOpen} onClose={handleCloseModal}>
        <Box sx={modalBackgroundClass}>

          {selectedFormation === 'OC' && <OC />}
          {selectedFormation === 'UFR' && <UFR />}
          {selectedFormation === 'UDEMY' && <Udemy />}
        </Box>
      </Modal>
      <div className={styles.svgBottom}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L60,192C120,160,240,96,360,80C480,64,600,96,720,122.7C840,149,960,171,1080,160C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default Formation;
