import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Home.module.css';
import Header from './Header';
import Footer from './Footer';
import Featured from './Featured';
import SpecialSection from './SpecialSection';

export function Home(props) {
    const mode = props.mode;
    const featuredData = props.state.recipes.items.find(item => item.id === 'beef-roast-stew');
    
    const defaultRecipeItemsData = props.state.recipes.items.filter(item => item.id !== 'beef-roast-stew');
    const popularRecipeItemsData = props.state.recipes.items.filter((item, index) => item.id !== 'beef-roast-stew' && index < 3);
    const noTextsRecipeItemsData = props.state.recipes.items.filter(item => item.id !== 'beef-roast-stew')
        .map(item => {
            return {
                ...item,
                texts: '',
            }
        });
    
    const classMainContainer = (mode === 'MOBILE')?styles.mainContents:styles.mainContentsDef;
    const classFeatured = (mode === 'MOBILE')?styles.featured:styles.featuredDef;
    const classMainRecipes = (mode === 'MOBILE')?styles.mainRecipes:styles.mainRecipesDef;
    const classListRecipes = (mode === 'MOBILE')?styles.listRecipes:styles.listRecipesDef;
    const classSideRecpes = (mode === 'MOBILE')?styles.sideRecipes:styles.sideRecipesDef;
    
    return (
        <div className={styles.container}>
            <div className={styles.headerContents}>
                <Header mode={mode} title="My Recipes" />
            </div>
            <main className={classMainContainer}>
                <div className={classFeatured}>
                    <Featured contents={featuredData}/>
                </div>
                <div className={classMainRecipes}>
                    <SpecialSection mode="VERTICAL" title="Season's Specials" items={defaultRecipeItemsData} />
                </div>
                <div className={classListRecipes}>
                    <SpecialSection align="center" mode="VERTICAL" title="Quick Recipes" items={noTextsRecipeItemsData} />
                </div>
                <div className={classSideRecpes}>
                    <SpecialSection 
                        title="Popular Recipes" 
                        items={popularRecipeItemsData} />
                </div>                
            </main>
            <div className={styles.footerContents}>
                <Footer />
            </div>
        </div>
    )
}

Home.defaultProps = {
    mode: 'DEFAULT',
}

Home.propTypes = {
    mode: PropTypes.string,
}

const mapStateToProps = (state) => {
    return {
        state,
    }
}

export default connect(mapStateToProps)(Home);