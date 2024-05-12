import React from 'react'
import styles from '../styles/AboutMe.module.css'

import ListExperience from './ListExperience'
export default function Experience() {
  return (
    <>
      <section className={styles.experience} id="experience">
        <p className={styles.title}>Experience</p>
        <h2>These are some of the projects I have participated in.</h2>
        <div className={styles.list}>
          <ListExperience />
        </div>
      </section>
    </>
  )
}
