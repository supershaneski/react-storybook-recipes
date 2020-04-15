import React from 'react';
//import { action } from '@storybook/addon-actions';
import SpecialSection from './SpecialSection';
import { defaultRecipeItemsData } from './RecipeItemList.stories';

export default {
    component: SpecialSection,
    title: 'SpecialSection',
    excludeStories: /.*Data$/,
};

export const defaultSectionData = {
    title: 'Section Title',
    align: 'left',
    mode: 'HORIZONTAL',
    items: defaultRecipeItemsData,
}
/*
export const actionsData = {
    onClick: action('onClick'),
};
*/
export const Default = () => {
    return <SpecialSection {...defaultSectionData} />
};

const verticalData = {
    ...defaultSectionData,
    mode: 'VERTICAL',
}
export const Vertical = () => {
    return <SpecialSection {...verticalData} />
};

const centeredTitleData = {
    ...defaultSectionData,
    align: 'center',
}
export const TitleCentered = () => {
    return <SpecialSection {...centeredTitleData} />
};
