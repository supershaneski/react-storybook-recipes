import React from 'react';
import PropTypes from 'prop-types';
import styles from './Procedure.module.css';

export default function Procedure({ mode, data: { index, texts, image }}) {
    let containerClass = styles.container;
    if(image.length === 0) {
        containerClass = styles.containerNoImage;
    }
    if(mode === 'VERTICAL') {
        containerClass = styles.containerVertical;
    }
    return (
        <div className={containerClass}>
            <div className={styles.contentVerticalIndex}>
                <div>{ index }</div>
            </div>
            <div className={styles.contentTexts}>
                { texts }
            </div>
            {
                image && 
                <div className={styles.contentImageContainer}>
                    <img alt={image.replace('/','')} className={styles.contentImage} src={image} />
                </div>
            }
        </div>
    )
}

Procedure.defaultProps = {
    mode: 'HORIZONTAL',
    data: {
        index: '',
        image: '',
    },
}

Procedure.propTypes = {
    mode: PropTypes.string,
    data: PropTypes.shape({
        index: PropTypes.string,
        texts: PropTypes.string.isRequired,
        image: PropTypes.string,
    }),
};