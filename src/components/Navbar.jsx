import React from 'react'
import styles from '../styles/Navbar.module.css'
import PropTypes from 'prop-types'
import logo from '../../public/images/logo.svg'

export function Navbar({ showMenu }) {
  const listItem = [
    {
      label: 'About',
      url: '#about',
      show: true,
    },
    {
      label: 'Experience',
      url: '#experience',
      show: true,
    },
    {
      label: 'Project',
      url: 'https://github.com/SebastianJordan',
      show: true,
    },
  ]

  const onClickMailtoHandler = () => {
    window.location.href =
      'mailto:me@sebastianjordan.com?subject=Hi,%20I%20saw%20your%20web%20portfolio.&body=Hello,%20I%20would%20like%20more%20details%20about%20your%20profile'
  }

  return (
    <nav className={styles.MainMenu}>
      <img src={logo} alt="Logo white" width={60} height={60} />
      {showMenu && (
        <>
          <ul className={styles.menu}>
            {listItem.map((i, index) =>
              i.show ? (
                <li key={index} className={styles.item}>
                  <a href={i.url} target="_blank" rel="nofollow">
                    {i.label}
                  </a>
                </li>
              ) : (
                <></>
              )
            )}
          </ul>
          <button className="btn-second" onClick={onClickMailtoHandler}>
            Contact
          </button>
        </>
      )}
    </nav>
  )
}

Navbar.propTypes = {
  showMenu: PropTypes.bool,
}
