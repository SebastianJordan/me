import React from 'react'
import styles from './styles/App.module.css'
import { Navbar } from './components/Navbar'
import { HeaderMain } from './components/HeaderMain'
import AboutMe from './components/AboutMe'
// import { FooterPage } from './components/Footer'
function App() {
  return (
    <>
      <div className={styles.page}>
        <Navbar showMenu={true} />
        <HeaderMain />
        <AboutMe />
      </div>
      {/* <FooterPage /> */}
    </>
  )
}

export default App
