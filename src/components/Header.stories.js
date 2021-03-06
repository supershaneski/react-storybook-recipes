import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from './Header';

export default {
    component: Header,
    title: 'Header',
    excludeStories: /.*Data$/,
};

export const headerData = {
    title: 'My Recipes',
    updatedAt: new Date(2020, 0, 1, 9, 0),
};

export const actionsData = {
    onClick: action('onClick'),
}

export const Default = () => {
    return <Header title={headerData.title} {...actionsData} />
};