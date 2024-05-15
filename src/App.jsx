import React from 'react'
import styles from './styles/App.module.css'
import { Navbar } from './components/Navbar'
import { HeaderMain } from './components/HeaderMain'
import  AboutMe  from './components/AboutMe'
import Experience from './components/Experience'

function App() {
  return (
    <>
      <div className={styles.page}>
        <Navbar showMenu={true} />
        <HeaderMain />
        <Experience />
        <AboutMe />
      </div>
    </>
  )
}

export default App
