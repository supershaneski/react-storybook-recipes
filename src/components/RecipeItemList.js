import React from 'react';
import PropTypes from 'prop-types';
import RecipeItem from './RecipeItem';
import styles from './RecipeItemList.module.css';

export default function RecipeItemList({ mode, items, onClick }) {
    
    const events = {
        onClick,
    };

    let classContainer = styles.container;
    if(mode === 'VERTICAL') {
        classContainer = styles.containerVertical;
        if(!items.some(item => {
            return item.texts.length > 0 
        })) {
            classContainer = styles.containerVertical2;
        }
    }
    return (
        <div className={classContainer}>
        {
            mode === 'HORIZONTAL' && items.map((item, index) => {
                return (
                    <RecipeItem mode={mode} className={styles.itemList} key={index} data={item} {...events} />
                )
            })
        }
        {
            mode === 'VERTICAL' && items.map((item, index) => {
                return (
                    <div key={index} className={styles.verticalItem}>
                        <RecipeItem mode={mode} className={styles.itemList} data={item} {...events} />
                    </div>                    
                )
            })
        }
        </div>
    )
}

RecipeItemList.defaultProps = {
    mode: 'HORIZONTAL',
}

RecipeItemList.propTypes = {
    mode: PropTypes.string,
    items: PropTypes.arrayOf(RecipeItem.propTypes.data).isRequired,
    onClick: PropTypes.func,
};