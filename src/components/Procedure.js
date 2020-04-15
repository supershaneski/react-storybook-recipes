import React from 'react';
import PropTypes from 'prop-types';
import styles from './Procedure.module.css';

export default function Procedure({ className, mode, data: { index, texts, image }}) {
    let containerClass = [styles.container];
    if(image.length === 0) {
        containerClass = [styles.containerNoImage];
    }
    if(mode === 'VERTICAL') {
        containerClass = [styles.containerVertical];
    }
    if(className.length > 0) {
        containerClass.push(className);
    }
    const containerClassName = containerClass.join(' ');
    
    const MainContent = () => {
        if(mode === 'VERTICAL') {
            return (
                <>
                    {
                        image && 
                        <div className={styles.contentImageContainer}>
                            <img alt={image.replace('/','')} className={styles.contentImage} src={image} />
                        </div>
                    }
                    <div className={styles.contentTexts}>
                        { texts }
                    </div>                    
                </>
            )
        } else {
            return (
                <>
                    <div className={styles.contentTexts}>
                    { texts }
                    </div>
                    {
                        image && 
                        <div className={styles.contentImageContainer}>
                            <img alt={image.replace('/','')} className={styles.contentImage} src={image} />
                        </div>
                    }
                </>
                
            )
        }
    }

    return (
        <div className={containerClassName}>
            <div className={styles.contentVerticalIndex}>
                <div>{ index }</div>
            </div>
            <MainContent />
        </div>
    )
}

Procedure.defaultProps = {
    className: '',
    mode: 'HORIZONTAL',
    data: {
        index: '',
        image: '',
    },
}

Procedure.propTypes = {
    className: PropTypes.string,
    mode: PropTypes.string,
    data: PropTypes.shape({
        index: PropTypes.string,
        texts: PropTypes.string.isRequired,
        image: PropTypes.string,
    }),
};