import React from 'react';
import IngredientsPanel from './IngredientsPanel';
import { defaultIngredientsData } from './IngredientList.stories';

export default {
    component: IngredientsPanel,
    title: 'IngredientsPanel',
    excludeStories: /.*Data$/,
};

export const Default = () => {
    return <IngredientsPanel lang="en" data={defaultIngredientsData} />
};

export const JapaneseLang = () => {
    return <IngredientsPanel lang="jp" data={defaultIngredientsData} />
};

export const Empty = () => {
    return <IngredientsPanel data={[]} />
};