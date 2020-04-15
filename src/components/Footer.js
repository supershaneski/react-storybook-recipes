import React from 'react';
import styles from './Footer.module.css';
export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.contents}>
                Powered by React.JS/Storybook<br />
                &copy; 2020 All Rights Reserved
            </div>
        </footer>
    )
}