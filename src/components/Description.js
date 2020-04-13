import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.module.css';
export default function Description({ data: { texts, image } }) {
    return (
        <div className={styles.container}>
            {
                image.length > 0 &&
                <div className={styles.imageContent}>
                    <img src={image} />
                </div>
            }
            <div className={styles.textsContent}>
                {
                    texts
                }
            </div>
        </div>
    )
}

Description.defaultProps = {
    data: {
        image: '',
    }
}

Description.propTypes = {
    data: PropTypes.shape({
      texts: PropTypes.string.isRequired,
      image: PropTypes.string,
    }),
};