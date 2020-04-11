import React from 'react';
import PropTypes from 'prop-types';
import styles from './IngredientList.module.css';
import Ingredient from './Ingredient';

export default function IngredientList({ data: ingredients }) {

    if(ingredients.length === 0) {
        return (
            <div className={styles.noDataContainer}></div>
        )
    }

    return (
        <div className={styles.container}>
        {
            ingredients.map((item, index) => 
                <Ingredient className={styles.listItem} key={index} data={{...item}}  />
            )
        }
        </div>
    )
}

IngredientList.propTypes = {
    data: PropTypes.shape({
      ingredients: PropTypes.arrayOf(Ingredient.propTypes.data).isRequired,
    }),
};