import React from 'react';
import styles from './Home.module.css';

import RecipeItemList from './RecipeItemList';
import Header from './Header';
import Featured from './Featured';

export default function Home() {

    // dummy
    const textsData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    
    const featuredData = {
        id: 'roast-lamb',
        title: 'Heavenly Roast Lamb for Easter',
        texts: textsData,
        image: '/roast-lamb.jpg',
        updatedAt: new Date(2020, 0, 1, 9, 0),
    };
    
    const recipeItemData = {
        id: 'cabbage-sausage',
        title: 'Cabbage, Sausage and Egg Stir-fry',
        image: '/cabbage-sausage-egg-saute.jpg',
        texts: textsData,
        updatedAt: new Date(2020, 0, 1, 9, 0),
    };
    const defaultRecipeItemsData = [
        { ...recipeItemData },
        { ...recipeItemData, id: 'cabbage-meatball', title: 'Cabbage and Meatballs', image: './cabbage-meatball.jpg' },
        { ...recipeItemData, id: 'beansprout-leek', title: 'Beansprout, Chinese leek and Egg', image: './moyashi-nira-tamago.jpg' },
        { ...recipeItemData, id: 'pork-beansprout', title: 'Pork and Beansprouts', image: './pork-moyashi-negi.jpg' },
    ];
    const noTextsRecipeItemsData = [
        { ...recipeItemData, texts: '', },
        { ...recipeItemData, texts: '', id: 'cabbage-meatball', title: 'Cabbage and Meatballs', image: './cabbage-meatball.jpg' },
        { ...recipeItemData, texts: '', id: 'beansprout-leek', title: 'Beansprout, Chinese leek and Egg', image: './moyashi-nira-tamago.jpg' },
        { ...recipeItemData, texts: '', id: 'pork-beansprout', title: 'Pork and Beansprouts', image: './pork-moyashi-negi.jpg' },
    ];
    
    const handleClick = (id) => {
        console.log("click", id);
    }

    return (
        <div className={styles.container}>
            <div className={styles.headerContents}>
                <Header title="My Recipes" />
            </div>
            <main className={styles.mainContents}>

                <div className="featured">
                    <Featured contents={featuredData} onClick={id => handleClick(id)}/>
                </div>

                <div className={styles.mainRecipes}>
                    <RecipeItemList mode="VERTICAL" items={defaultRecipeItemsData} onClick={id => handleClick(id)} />
                </div>
                <div className={styles.listRecipes}>
                    <RecipeItemList mode="VERTICAL" items={noTextsRecipeItemsData} onClick={id => handleClick(id)} />
                </div>
                <div className={styles.sideRecipes}>
                    <RecipeItemList items={defaultRecipeItemsData} onClick={id => handleClick(id)} />
                </div>                
            </main>
        </div>
    )
}