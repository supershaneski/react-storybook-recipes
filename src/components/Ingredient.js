import React from 'react';
import PropTypes from 'prop-types';
import styles from './Ingredient.module.css';
export default function Ingredient({ data: { text, amount }, className }) {
    const divClass = [styles.container];
    if(className.length > 0) divClass.push(className);
    const divClassName = divClass.join(' ');
    return (
        <div className={divClassName}>
            <div className={styles.ingredient}>{ text }</div>
            <div className={styles.amount}>{ amount }</div>
        </div>
    )
}

Ingredient.defaultProps = {
    data: {
        amount: '',
    },
    className: ''
}

Ingredient.propTypes = {
    data: PropTypes.shape({
      text: PropTypes.string.isRequired,
      amount: PropTypes.string,
    }),
    className: PropTypes.string,
};