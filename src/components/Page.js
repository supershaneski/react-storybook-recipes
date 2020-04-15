import React from 'react';
import PropTypes from 'prop-types';
import styles from './Page.module.css';
import Header from './Header';
import Footer from './Footer';
import Recipe from './Recipe';
import SpecialSection from './SpecialSection';

export default function Page({ mode, data, special }) {
    
    const recipeMode = (mode === 'MOBILE')?'DEFAULT':'COLUMN';
    const classContent = (mode === 'MOBILE')?styles.content:styles.contentDef;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header mode={mode} title="My Recipes" />
            </div>
            <div className={styles.main}>
                <div className={classContent}>
                    <Recipe mode={recipeMode} data={data} />
                </div>
            </div>
            <div className={styles.others}>
                <SpecialSection mode="VERTICAL" title="More Recipes" items={special} />
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

Page.defaultProps = {
    mode: 'DEFAULT',
}

Page.propTypes = {
    mode: PropTypes.string,
    data: Recipe.propTypes.data,
    special: SpecialSection.propTypes.items,
    //onClick: PropTypes.func,
};