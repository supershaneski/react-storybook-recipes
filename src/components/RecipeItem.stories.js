import React from 'react';
//import { action } from '@storybook/addon-actions';
import RecipeItem from './RecipeItem';

export default {
    component: RecipeItem,
    title: 'RecipeItem',
    excludeStories: /.*Data$/,
};

const textsData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
export const recipeItemData = {
    id: 'cabbage-sausage',
    title: 'Cabbage, Sausage and Egg Stir-fry',
    image: '/cabbage-sausage-egg-saute.jpg',
    texts: textsData,
    updatedAt: new Date(2020, 0, 1, 9, 0),
};

/*
export const actionsData = {
    onClick: action('onClick'),
};*/

export const Default = () => {
    return <RecipeItem data={recipeItemData} />
};

export const NoImage = () => {
    return <RecipeItem data={{...recipeItemData, image: ''}} />
};

export const Vertical = () => {
    return <RecipeItem mode="VERTICAL" data={recipeItemData} />
};

export const VerticalNoTexts = () => {
    return <RecipeItem mode="VERTICAL" data={{...recipeItemData, texts: ''}} />
};