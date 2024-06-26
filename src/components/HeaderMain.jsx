import React from 'react'
import Title from './Title'
import styles from '../styles/HeaderMain.module.css'
export function HeaderMain() {
  return (
    <section className={styles.slideInfo}>
      <Title
        title={['Hi', 'I’m Sebastian', 'Front-end developer']}
        showBg={true}
      ></Title>
      <div className={styles.btnGroup}>
        <a href="/resume_es.pdf" className="btn-basic">
          View resume
        </a>
        <a href="https://github.com/SebastianJordan" className="btn-link">
          Github Projects
        </a>
      </div>
    </section>
  )
}
