import React from 'react';
import PropTypes from 'prop-types';
import styles from './Featured.module.css';

export default function Featured({ contents: { id, title, texts, image }, onClick }) {
    return (
        <div className={styles.container} onClick={() => onClick()}>
            <div className={styles.title}>
                <h4>Featured Recipe</h4>
                <h1>{ title }</h1>
            </div>
            <div className={styles.texts}>
                <p>
                    { texts }
                </p>
            </div>
            <div className={styles.banner}>
                <img src={image} />
            </div>            
        </div>
    )
}

Featured.propTypes = {
    contents: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        texts: PropTypes.string.isRequired,
    }),
    onClick: PropTypes.func,
};