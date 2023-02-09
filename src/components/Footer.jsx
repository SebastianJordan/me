import React from 'react'
import logo from '../../public/images/logo-white.svg'
import styles from '../styles/Footer.module.css'
export function FooterPage() {
  return (
    <footer className={styles.footerBox}>
      <section className={styles.titles}>
        <article className={styles.info}>
          <img
            src={logo}
            alt="Logo white"
            width={60}
            height={60}
            className={styles.logo}
          />
          <h2>Personal page</h2>
        </article>
        <article className={styles.contact}>
          <h3>Contact</h3>
        </article>
      </section>
      <section className={styles.descriptions}>
        <p>
          
        </p>
        <p>
          Panama City, Panamá, Panama, <span> me@sebastianjordan.com</span>
        </p>
      </section>
    </footer>
  )
}
