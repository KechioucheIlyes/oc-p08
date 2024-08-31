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

    </section>
  );
}

export default Formation;
