import React from 'react';
import styles from '../styles/Title.module.css';
import PropTypes from 'prop-types';

export default function Title(props) {
  const { title, children } = props;
  return (
    <>
      <div className={styles.groupPoint}></div>
      <h1 className={styles.title}>
        {title.map((i,index) => (
          <span key={index}>
            {i}
            <br />
          </span>
        ))}
      </h1>
      <div className={styles.description}>{children}</div>
    </>
  );
}

Title.propTypes = {
  title: PropTypes.array,
  children: PropTypes.node.isRequired,
};
