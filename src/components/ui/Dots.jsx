import React from 'react'
import styles from './Dots.module.css'

export default function Dots(props) {
  const pointRow = []
  const pointLine = []
  for (let i = 0; i < props.x; i++) {
    pointRow.push(<span key={i} className={styles.dots}></span>)
  }

  for (let i = 0; i < props.y; i++) {
    pointLine.push(
      <div key={i} className={styles.box}>
        {pointRow}
      </div>
    )
  }

  return <div>{pointLine}</div>
}
