import React from 'react';
import PropTypes from 'prop-types';
import styles from './SpecialSection.module.css';
import RecipeItemList from './RecipeItemList';

export default function SpecialSection({ mode, title, align, items }) {
    let classTitleList = [styles.title];
    classTitleList.push(align === 'center'?styles.center:styles.left);
    const classTitle = classTitleList.join(' ');
    
    return (
        <div className={styles.container}>
            <div className={classTitle}>
                <h4>{ title }</h4>
            </div>
            <div className={styles.items}>
                <RecipeItemList mode={mode} items={items} />
            </div>
        </div>
    )
}

SpecialSection.defaultProps = {
    title: "Section Title",
    align: 'left',
    mode: 'HORIZONTAL',
}

SpecialSection.propTypes = {
    title: PropTypes.string,
    align: PropTypes.string,
    mode: PropTypes.string,
    items: RecipeItemList.propTypes.items,
    //onClick: PropTypes.func,
};