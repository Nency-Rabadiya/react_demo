import React from 'react';
import styles from '../style.module.css';

const Style = () => {
  return (
    <>
      <p style={{ backgroundColor: "pink" }}>style1</p>
      <p className={styles.primary}>style2</p>
    </>
  )
}
export default Style;