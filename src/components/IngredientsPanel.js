import React from 'react';
import PropTypes from 'prop-types';
import IngredientList from './IngredientList';
import styles from './IngredientsPanel.module.css';

export default function IngredientsPanel({ lang, data }) {
    const title = (lang === 'en')?'Ingredients':'材料';
    if(data.length === 0) {
        return (
            <div className={styles.noDataContainer}></div>
        )
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}><h4>{ title }</h4></div>
            <IngredientList data={data} />            
        </div>
    )
}

IngredientsPanel.defaultProps = {
    lang: 'en',
    data: []
}

IngredientsPanel.propTypes = {
    //data: PropTypes.arrayOf(IngredientList.propTypes.data).isRequired,
    //data: PropTypes.arrayOf(IngredientList.propTypes.data),
    data: IngredientList.propTypes.data,
    lang: PropTypes.string,
};