import React from 'react';
import IngredientList from './IngredientList';
import { ingredientData } from './Ingredient.stories';

export default {
    component: IngredientList,
    title: 'IngredientList',
    excludeStories: /.*Data$/,
};

export const defaultIngredientsData = [
    { ...ingredientData, text: 'Hourensou (Japanese Spinach)', amount: '1 bundle' },
    { ...ingredientData, text: 'Shimeji (Clamshell mushroom)', amount: '1 pack' },
    { ...ingredientData },
    { ...ingredientData, text: 'Cooking Sake' },
    { ...ingredientData, text: 'Mirin', amount: '1 Tbsp' },
];

export const Default = () => {
    return <IngredientList data={defaultIngredientsData} />
};

export const longIngredientsData = [
    { ...ingredientData, text: 'Hourensou (Japanese Spinach)', amount: '1 bundle' },
    { ...ingredientData, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', amount: '1 pack' },
    { ...ingredientData, amount: '1 cup' },
    { ...ingredientData, text: 'Cooking Sake' },
    { ...ingredientData, text: 'Sugar', amount: '1000 cups or 1 kilo bags' },
    { ...ingredientData, text: 'Mirin', amount: '1 Tbsp' },
];
export const MixedLengths = () => {
    return <IngredientList data={longIngredientsData} />
};

export const Empty = () => {
    return <IngredientList data={[]} />
};
