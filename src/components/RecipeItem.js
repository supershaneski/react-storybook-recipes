import React from 'react';
import PropTypes from 'prop-types';
import styles from './RecipeItem.module.css';
import Lib from '../lib/utils';

export default function RecipeItem({ className, mode, data: { id, title, image, texts }, onClick  }) {
    
    const txtObj = Lib.checkCaptionString(texts);
    const stexts = (txtObj.strlength > 150)?texts.substr(0, 150) + '...':texts;
    
    var classList = [styles.container];
    var classTitle = styles.title;
    if(mode === 'VERTICAL') {
        classList = [styles.containerVertical];
        classTitle = styles.titleVertical;
    }
    
    if(className.length > 0) {
        classList.push(className);
    }
    const classContainer = classList.join(' ');

    return (
        <div className={classContainer} onClick={() => onClick(id)}>
            <div className={classTitle}>
                <h4>{ title }</h4>
            </div>
            <div className={styles.image}>
                <img src={image} />
            </div>
            {
                stexts && 
                <div className={styles.texts}>
                    <p>
                    {
                        stexts        
                    }
                    </p>
                </div>
            }
        </div>
    )
}

RecipeItem.defaultProps = {
    className: '',
    mode: 'HORIZONTAL',
    data: {
        image: '',
        texts: '',
    },    
}

RecipeItem.propTypes = {
    className: PropTypes.string,
    mode: PropTypes.string,
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        texts: PropTypes.string.isRequired,
    }),
    onClick: PropTypes.func,
};