import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

export default function Header({ title }) {
    return (
        <header className={styles.container}>
            <h1>{ title }</h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
