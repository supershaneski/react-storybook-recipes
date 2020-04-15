import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

function Header({ mode, title, onClick }) {
    const classContainer = (mode === 'MOBILE')?styles.container:styles.containerDef;
    return (
        <header className={classContainer}>
            <a href="/">
                <h1>&nbsp;{ title }</h1>
            </a>
        </header>
    )
}

Header.defaultProps = {
    mode: 'DEFAULT',
}

Header.propTypes = {
    mode: PropTypes.string,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Header;