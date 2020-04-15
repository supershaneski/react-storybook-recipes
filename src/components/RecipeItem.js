import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import Lib from '../lib/utils';
import styles from './RecipeItem.module.css';

export default function RecipeItem({ className, mode, data: { id, title, image, texts }  }) {
    
    var classList = [styles.container];
    var classTitle = styles.title;
    
    var stexts = texts;
    if(mode === 'VERTICAL') {
        classList = [styles.containerVertical];
        classTitle = styles.titleVertical;
        stexts = (texts.length > 64)?texts.substr(0, 64)+"...":texts;
    }

    if(className.length > 0) {
        classList.push(className);
    }

    const classContainer = classList.join(' ');

    const url = '/recipe/' + id;

    //const flagStoryBook = Lib.isStoryBookRunning();
    
    const TitleComponent = () => {
        /*if(flagStoryBook) {
            return <a href={url}><h4>{ title }</h4></a>
        } else {
            return <Link to={url}><h4>{ title }</h4></Link>
        }*/
        return <a href={url}><h4>{ title }</h4></a>
    }

    const ImageComponent = () => {
        /*if(flagStoryBook) {
            return <a href={url}><img alt={id} src={image} /></a>
        } else {
            return <Link to={url}><img alt={id} src={image} /></Link>
        }*/
        return <a href={url}><img alt={id} src={image} /></a>
    }

    return (
        <div className={classContainer}>
            <div className={classTitle}>
                <TitleComponent />
            </div>
            {
                image &&
                <div className={styles.image}>
                    <ImageComponent />
                </div>
            }
            {
                texts && 
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
    //onClick: PropTypes.func,
};