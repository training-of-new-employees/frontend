import React from 'react';
import styles from './Tumbler.module.scss';

export default function Tumbler() {
  const id = React.useId();
  return (
    <div className={styles.toggle}>
      <input type="checkbox" id={id} name={id} />
      <label aria-label="label" className={styles.test} htmlFor={id} />
    </div>
  );
}
