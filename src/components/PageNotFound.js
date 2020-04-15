import React from 'react';
import styles from './PageNotFound.module.css';
import Header from './Header';
import Footer from './Footer';

export default function PageNotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header title="My Recipes" />
            </div>
            <div className={styles.main}>
                <div className={styles.contents}>
                    <h4>Page Not Found</h4>
                    <p>
                        <span>This is not the page that you are looking for.</span>
                    </p>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}