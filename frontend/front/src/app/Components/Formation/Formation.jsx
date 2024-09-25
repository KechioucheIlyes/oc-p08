'use client'
import React, { useEffect, useState } from 'react';
import styles from "./formatiion.module.css";

import { Box, Modal } from '@mui/material';
import OC from "../OC/OC"
import UFR from '../UFR/UFR';
import Udemy from '../Udemy/Udemy';
const Formation = () => {
  const [isVisible, setIsVisible] = useState(true);


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
    <>
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

    </section>
    </>
  );
}

export default Formation;
