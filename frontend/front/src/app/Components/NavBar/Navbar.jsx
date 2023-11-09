
"use client"
import Link from 'next/link'
import styles from "../NavBar/navbar.module.css"
import { useEffect, useState } from 'react';





const Navbar = () => {
    
    return (
        <header className={`${styles.header} ${scrolling ? styles.scrolling : ''}`}>
            
            <label className={styles.toggle} >
                <input className={styles.checkbox} />
                <span className={styles.slider} ></span>
            </label>
            <nav className={styles.navbar} >
                <ul>
                    <li><Link className='link'  href={"#"}>À propos</Link></li>
                    <li><Link className='link'  href={"#"}>Services</Link></li>
                    <li><Link className='link'  href={"#"}>Formation</Link></li>
                    <li><Link className='link'  href={"#"}>API Github</Link></li>
                    <li><Link className='link'  href={"#"}>Competences</Link></li>
                    <li><Link className='link'  href={"#"}>Contact</Link></li>

                </ul>


            </nav>
        </header>




    )
}

export default Navbar