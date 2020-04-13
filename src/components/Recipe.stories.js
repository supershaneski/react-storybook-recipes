import React from 'react';
import Recipe from './Recipe';

import { descriptionData } from './Description.stories';
import { defaultIngredientsPanelData } from './IngredientsPanel.stories';
import { defaultProceduresPanelData } from './ProceduresPanel.stories';

export default {
    component: Recipe,
    title: 'Recipe',
    excludeStories: /.*Data$/,
};

export const defaultRecipeData = {
    title: 'Cabbage, Sausage and Egg Stir-fry',
    description: descriptionData,
    ingredients: defaultIngredientsPanelData,
    procedures: defaultProceduresPanelData,
}

export const Default = () => {
    return <Recipe lang="en" data={defaultRecipeData} />
};

export const ColumnMode = () => {
    return <Recipe mode="COLUMN" lang="en" data={defaultRecipeData} />
};
