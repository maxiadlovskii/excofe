import React from 'react';
import classNames from 'classnames';

import { additionsClasses } from '../../../utils';

import styles from './Button.module.scss';

export const Button = ({ onClick, children, additions = [] }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={ classNames(styles.button, additionsClasses(additions, styles)) }
    onClick={ onClick }
  >
    { children }
  </button>
);
