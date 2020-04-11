import React from 'react';
import Ingredient from './Ingredient';

export default {
    component: Ingredient,
    title: 'Ingredient',
    excludeStories: /.*Data$/,
};

export const ingredientData = {
    text: 'Soy Sauce',
    amount: '2 Tbsp',
    updatedAt: new Date(2020, 0, 1, 9, 0),
};

export const Default = () => {
    return <Ingredient data={{...ingredientData}} />
};

const longText = 'Chicken thigh, chopped into bize size and dredged in flour'
const longAmount = '4000 pieces and cups';
export const LongTextAndAmount = () => {
    return <Ingredient data={{...ingredientData, text: longText, amount: longAmount}} />
};

export const NoAmount = () => {
    return <Ingredient data={{...ingredientData, amount: ''}} />
};