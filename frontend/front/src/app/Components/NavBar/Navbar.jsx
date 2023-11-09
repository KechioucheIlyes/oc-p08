
"use client"
import Link from 'next/link'
import styles from "../NavBar/navbar.module.css"
import { useEffect, useState } from 'react';





const Navbar = () => {
    
    return (
        <header className={`${styles.header}}`}>
            
            <label className={styles.toggle} >
                <input className={styles.checkbox} />
                <span className={styles.slider} ></span>
            </label>
            <nav className={styles.navbar} >
                <ul>
                    <li><Link className='link'  href={"#about"}>À propos</Link></li>
                    <li><Link className='link'  href={"#services"}>Services</Link></li>
                    <li><Link className='link'  href={"#formation"}>Formation</Link></li>
                    <li><Link className='link'  href={"#github"}>API Github</Link></li>
                    <li><Link className='link'  href={"#competences"}>Competences</Link></li>
                    <li><Link className='link'  href={"#contact"}>Contact</Link></li>

                </ul>


            </nav>
        </header>




    )
}

export default Navbar