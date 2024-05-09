import React from 'react'
import styles from './Dots.module.css'

export default function Dots(props) {
  const pointRow = []
  const pointLine = []
  for (let i = 0; i < props.x; i++) {
    pointRow.push(<span className={styles.dots}></span>)
  }

  for (let i = 0; i < props.y; i++) {
    pointLine.push(<div className={styles.box}>{pointRow}</div>)
  }

  return <>{pointLine}</>
}
