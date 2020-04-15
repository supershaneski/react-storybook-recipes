import React from 'react';
import { action } from '@storybook/addon-actions';
import RecipeItemList from './RecipeItemList';
import { recipeItemData } from './RecipeItem.stories';

export default {
    component: RecipeItemList,
    title: 'RecipeItemList',
    excludeStories: /.*Data$/,
};

//const textsData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elie aliqua.';
export const defaultRecipeItemsData = [
    { ...recipeItemData },
    { ...recipeItemData, id: 'cabbage-meatball', title: 'Cabbage and Meatballs', image: './cabbage-meatball.jpg' },
    { ...recipeItemData, id: 'beansprout-leek', title: 'Beansprout, Chinese leek and Egg', image: './moyashi-nira-tamago.jpg' },
    { ...recipeItemData, id: 'pork-beansprout', title: 'Pork and Beansprouts', image: './pork-moyashi-negi.jpg' },
];

export const actionsData = {
    onClick: action('onClick'),
};

export const Default = () => {
    return <RecipeItemList items={defaultRecipeItemsData} {...actionsData} />
};

export const Vertical = () => {
    return <RecipeItemList mode="VERTICAL" items={defaultRecipeItemsData} {...actionsData} />
};

const verticalNoTextsData = [
    { ...recipeItemData, texts: '', },
    { ...recipeItemData, id: 'cabbage-meatball',  texts: '', title: 'Cabbage and Meatballs', image: './cabbage-meatball.jpg' },
    { ...recipeItemData, id: 'beansprout-leek',  texts: '', title: 'Beansprout, Chinese leek and Egg', image: './moyashi-nira-tamago.jpg' },
    { ...recipeItemData, id: 'pork-beansprout',  texts: '', title: 'Pork and Beansprouts', image: './pork-moyashi-negi.jpg' },
]
export const VerticalNoTexts = () => {
    return <RecipeItemList mode="VERTICAL" items={verticalNoTextsData} {...actionsData} />
};