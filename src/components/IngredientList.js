import React from 'react';
import PropTypes from 'prop-types';
import styles from './IngredientList.module.css';
import Ingredient from './Ingredient';

export default function IngredientList({ data }) {

    if(data.length === 0) {
        return (
            <div className={styles.noDataContainer}></div>
        )
    }

    return (
        <div className={styles.container}>
        {
            data.map((item, index) => 
                <Ingredient className={styles.listItem} key={index} data={{...item}}  />
            )
        }
        </div>
    )
}

IngredientList.propTypes = {
    //data: PropTypes.arrayOf(Ingredient.propTypes.data).isRequired,
    data: PropTypes.arrayOf(Ingredient.propTypes.data),
};