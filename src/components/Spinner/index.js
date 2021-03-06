import React from 'react';
import classNames from 'classnames';

import styles from './spinner.scss';

export const Spinner = ({ show }) => (
  <div className={classNames(styles.container, !show && styles.hidden)}>
    <div className={styles.spinner} />
  </div>
);
