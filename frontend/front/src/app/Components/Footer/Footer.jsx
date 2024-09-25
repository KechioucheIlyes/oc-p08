'use client'
import React, { useEffect, useState } from 'react'
import styles from "./footer.module.css"
import { ClipboardCheck, Copy, Heart, Link } from 'lucide-react';
import Link2 from 'next/link';
import Image from 'next/image';
import nextLogo from "../../assets/nextjs.png"
import vercelogo from "../../assets/vercels.png"

const Footer = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [mailSent, setmailSent] = useState(false)
    const [mailError, setmailError] = useState(false)
    const [manyReq, setManyReq] = useState(false)
    const [mailV, setMailV] = useState(false)
    const [nblikes, setNbLikes] = useState()
    const [isActive, setIsActive] = useState(false);


    const handleLikes = () => {
        setIsActive(true);
        setTimeout(() => setIsActive(false), 2000);
        fetch("https://backend-rho-blue.vercel.app/api/likes/post", { method: "POST" })
            .then(response => response.json())
            .then(data => {
                console.log(data.like.nbLikes);
                setNbLikes(data.like.nbLikes);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetch("https://backend-rho-blue.vercel.app/api/likes/get", { method: "GET" })
            .then(response => response.json())
            .then(data => {
                console.log(data.like.nbLikes);
                setNbLikes(data.like.nbLikes);
            })
            .catch(err => console.log(err));
    }, [])




    const [emailtoCopy, setEmailtoCopy] = useState("rayanilyes75@gmail.com")
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const textField = document.createElement('textarea');
        textField.innerText = emailtoCopy;
        document.body.appendChild(textField);
        textField.select();

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } else {
                console.error("La copie du texte a échoué.");
            }
        } catch (err) {
            console.error('Erreur lors de la copie :', err);
        }

        document.body.removeChild(textField);
    };


    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("https://backend-rho-blue.vercel.app/api/contact", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, text })
        })
            .then(response => {


                if (!response.ok && response.status === 429) {

                    setManyReq(true)
                    setTimeout(() => setManyReq(false), 3000);
                }
                return response.json()
            })
            .then(data => {

                if (data.value === true) {
                    setmailSent(true)
                    setTimeout(() => setmailSent(false), 3000);
                }
                else if (data.statutV === false) {

                    setMailV(true)
                    setTimeout(() => setMailV(false), 3000);
                }
                else {
                    setmailError(true)
                    setTimeout(() => setmailError(false), 3000);
                }


            })
            .catch(err => {
                console.error("Erreur lors de la requête:", err);
            })
    };
    return (
        <section id='contact' className={`${styles.footer} ${isVisible ? styles.visible : ''} ${styles.scrollEffect}`} style={{ scrollBehavior: 'smooth' }}>
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
            <div className={styles.footerContains}>
                <h1>Contact</h1>
                <div className={styles.contact}>
                    <div className={styles.email}>
                        <h2>rayanilyes75@gmail.com</h2>  <button onClick={handleCopy}  > {copied ? <ClipboardCheck /> : <Copy />}</button> <Link2 className={styles.link} href={"mailto:rayanilyes75@gmail.com"}> <Link /> </Link2>
                    </div>
                    <div className={styles.fomulaire}>
                        <h3>Vous pouvez prendre contact avec moi directement via le formulaire ci-dessous : </h3>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.emailForm}>
                                <label htmlFor="email">E-mail :</label>
                                <input
                                    name='email'
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                    placeholder='email@exemple.fr'
                                    className='email'

                                />
                            </div>
                            <div className={styles.textForm}>
                                <label htmlFor="text">Message :</label>
                                <textarea
                                    name='contain'
                                    resize="none"
                                    id="text"
                                    value={text}
                                    rows={6}
                                    spellCheck={true}
                                    onChange={handleTextChange}
                                    placeholder='Que souhaitez vous dire ?'
                                    required
                                    className='area'
                                />
                            </div>
                            <div className={styles.buttonContainer}>
                                <button className={`${styles.button} 
                                        ${mailSent ? styles.sent :
                                        (mailError ? styles.notSent :
                                            (manyReq ? styles.manyReq :
                                                (mailV ? styles.mailV : '')
                                            )
                                        )
                                    }`} type="submit">
                                    {mailSent ? 'Envoyé ✅' :
                                        (mailError ? 'Non envoyé ❌' :
                                            (manyReq ? 'Vous avez effectué trop de requêtes' :
                                                (mailV ? `Veuillez saisir une adresse e-mail valide !` : 'Envoyer')
                                            )
                                        )
                                    }
                                </button>


                            </div>
                        </form>
                    </div>
                    <div className={styles.buttonLike}>
                        <div className={styles.infos}>

                        <h4>Ce site a été créé manuellement et receuille une seule et unique donnees (Google Analytics) et ceci est fait simplement en terme d'apprentissage. Vous pouvez accéder directement au code source sur <Link2 className={styles.link} target='_blank' href={"https://github.com/KechioucheIlyes/portfolio_P08_OC"}>GitHub</Link2>. Si vous avez apprécié le contenu, n'hésitez pas à laisser un petit cœur. Merci !</h4>
                        </div>



                        <div onClick={handleLikes} className={`${styles.heart} ${isActive ? styles['is-active'] : ''}`}></div>


                        <p>{nblikes} j'aimes</p>
                    </div>

                    <div className={styles.copyyright}>

                        <h4>Développé avec</h4>
                        <Image className={styles.logo} src={nextLogo} alt='next' height={100} width={100} priority />
                        <h4>et hébergé sur</h4>
                        <Image src={vercelogo} alt='Vercel' height={120} width={120} priority />
                    </div>

                </div>
            </div>


        </section>
    )
}

export default Footer