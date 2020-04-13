import React from 'react';
import Recipe from './components/Recipe';
export default function RecipePage() {
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
        title: 'Cabbage, Sausage and Egg Stir-fry',
        description: descriptionData,
        ingredients: defaultIngredientsPanelData,
        procedures: defaultProceduresPanelData,
    }
    
    return (
        <Recipe mode="COLUMN" data={defaultRecipeData} />
    )
}