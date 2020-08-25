import React from 'react'
import styles from './Button.module.scss'
import { additionsClasses } from '../../../utils'
import classNames from 'classnames'

export const Button = ({ onClick, children, additions = [] }) => <button
    className={classNames(styles.button, additionsClasses(additions, styles))}
    onClick={onClick}>
        {children}
    </button>;