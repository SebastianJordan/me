import React from 'react'
import styles from './Card.module.css'
export default function Card({ list }) {
  return list.map((e, index) => (
    <div className={styles.box} key={index}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <img src={`images/apps/${e.icon}`} alt={e.title} />
        </div>
        <h3 className={styles.title}>{e.title}</h3>
      </div>
      <p className={styles.description}>{e.description}</p>
    </div>
  ))
}
