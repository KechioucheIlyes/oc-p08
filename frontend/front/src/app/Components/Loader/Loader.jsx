'use client'
import React from 'react';
import styles from "./loader.module.css";

const Loader = ({ numbers }) => {
    const loaders = [];

    for (let i = 0; i < numbers; i++) {
        loaders.push(
            <div className={styles.card} key={i}>
                <div className={styles.cardHeader}></div>
                <div className={styles.cardBody}>
                    <div className={styles.cardTitle}></div>
                    <div className={styles.cardText}></div>
                </div>
                <div className={styles.cardFooter}></div>
            </div>
        );
    }

    return (
        <div className={styles.loaderContainer}>
            {loaders}
        </div>
    );
}

export default Loader;
