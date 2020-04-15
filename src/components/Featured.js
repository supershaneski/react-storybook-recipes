import React from 'react';
import PropTypes from 'prop-types';
import styles from './Featured.module.css';

export default function Featured({ contents: { id, title, texts, image }, onClick }) {
    const url = '/recipe/' + id;
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h4>Featured Recipe</h4>
                <a href={url}><h1>{ title }</h1></a>
            </div>
            <div className={styles.texts}>
                <p>
                    { texts }
                </p>
            </div>
            <div className={styles.banner}>
                <a href={url}>
                    <img alt={id} src={image} />
                </a>
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