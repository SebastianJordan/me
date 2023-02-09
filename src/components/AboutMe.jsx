import React from 'react'
import pointImg from '../../public/images/experience-point.svg'
import grafico from '../../public/images/grafico.svg'
import styles from '../styles/AboutMe.module.css'
export default function AboutMe() {
  return (
    <>
      <section className={styles.aboutMe} id="about">
        <img src={pointImg} alt="img point" width={230} height={118} />
        <p className={styles.title}>About Me</p>
        <h2>System Analyst at Yappy</h2>
        <div className={styles.grid}>
          <article className={styles.descriptionTexts}>
            <p>
              Frontend with more than 6 years of experience, currently at Banco
              General in the Yappy team creating and maintaining software
              projects.
            </p>
            <p>
              With experience in developing hybrid mobile applications from
              concept to launch, applying an agile methodology (Scrum) and
              implementing user-focused reusable component interface systems.
            </p>
          </article>
          <article>
            <img src={grafico} width={608} height={475} alt="grafico" />
            <br />
            <img
              src={pointImg}
              alt="img point"
              width={230}
              height={118}
              className={styles.groupPoint}
            />
          </article>
        </div>
        {/* <a className="btn-basic" href="#">
          View more
        </a> */}
      </section>
    </>
  )
}
