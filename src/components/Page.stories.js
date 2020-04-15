import React from 'react';
//import { action } from '@storybook/addon-actions';
import Page from './Page';

export default {
    component: Page,
    title: 'Page',
    excludeStories: /.*Data$/,
};

const textsData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const descriptionData = {
    texts: textsData,
    image: '/cabbage-sausage-egg-saute.jpg',
    updatedAt: new Date(2020, 0, 1, 9, 0),
};
const ingredientData = {
    text: 'Soy Sauce',
    amount: '2 Tbsp',
    updatedAt: new Date(2020, 0, 1, 9, 0),
};
const defaultIngredientsPanelData = [
    { ...ingredientData, text: 'Hourensou (Japanese Spinach)', amount: '1 bundle' },
    { ...ingredientData, text: 'Shimeji (Clamshell mushroom)', amount: '1 pack' },
    { ...ingredientData },
    { ...ingredientData, text: 'Cooking Sake' },
    { ...ingredientData, text: 'Mirin', amount: '1 Tbsp' },
];
const procedureData = {
    index: '1',
    texts: textsData,
    image: '/image1.jpg',
    updatedAt: new Date(2020, 0, 1, 9, 0),
};
const defaultProceduresPanelData = [
    { ...procedureData },
    { ...procedureData, image: '/image2.jpg' },
    { ...procedureData, image: '/image3.jpg' },
    { ...procedureData, image: '/image4.jpg' },
];
const defaultRecipeData = {
    title: 'Ginisang Repolyo',
    description: descriptionData,
    ingredients: defaultIngredientsPanelData,
    procedures: defaultProceduresPanelData,
};

const recipeItemData = {
    id: 'cabbage-sausage',
    title: 'Cabbage, Sausage and Egg Stir-fry',
    image: '/cabbage-sausage-egg-saute.jpg',
    texts: '',
    updatedAt: new Date(2020, 0, 1, 9, 0),
};
const defaultRecipeItemsData = [
    { ...recipeItemData, id: 'fish-veggie-soup' },
    { ...recipeItemData, id: 'chicken-tomato-sauce', title: 'Cabbage and Meatballs', image: '/cabbage-meatball.jpg' },
    { ...recipeItemData, id: 'beef-roast-stew', title: 'Beansprout, Chinese leek and Egg', image: '/moyashi-nira-tamago.jpg' },
    { ...recipeItemData, id: 'pork-stew', title: 'Pork and Beansprouts', image: '/pork-moyashi-negi.jpg' },
];

/*
export const actionsData = {
    onClick: action('onClick'),
};
*/

export const Default = () => {
    return <Page data={defaultRecipeData} special={defaultRecipeItemsData} />
};
