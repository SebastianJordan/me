import React from 'react'
import styles from '../styles/Navbar.module.css'
import PropTypes from 'prop-types'
import logo from '../../public/images/logo.svg'

export function Navbar({ showMenu }) {
  return (
    <nav className={styles.MainMenu}>
      <img src={logo} alt="Logo white" width={60} height={60} />
      {showMenu && (
        <>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <a href="#about">About</a>
            </li>
            <li className={styles.item}>Experience</li>
            <li className={styles.item}>
              <a href="https://github.com/SebastianJordan">Project</a>
            </li>
          </ul>
          <button className="btn-second ">Contact</button>
        </>
      )}
    </nav>
  )
}

Navbar.propTypes = {
  showMenu: PropTypes.bool,
}
