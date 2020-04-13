import React from 'react';
import IngredientsPanel from './IngredientsPanel';
import { defaultIngredientsData } from './IngredientList.stories';

export default {
    component: IngredientsPanel,
    title: 'IngredientsPanel',
    excludeStories: /.*Data$/,
};

export const defaultIngredientsPanelData = defaultIngredientsData;

export const Default = () => {
    return <IngredientsPanel lang="en" data={defaultIngredientsPanelData} />
};

export const JapaneseLang = () => {
    return <IngredientsPanel lang="jp" data={defaultIngredientsPanelData} />
};

export const Empty = () => {
    return <IngredientsPanel data={[]} />
};