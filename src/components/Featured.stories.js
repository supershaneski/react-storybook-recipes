import React from 'react';
import { action } from '@storybook/addon-actions';
import Featured from './Featured';

export default {
    component: Featured,
    title: 'Featured',
    excludeStories: /.*Data$/,
};

export const actionsData = {
    onClick: action('onClick'),
}

const textsdata = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
export const featuredData = {
    id: 'roast-lamb',
    title: 'Heavenly Roast Lamb for Easter',
    texts: textsdata,
    image: '/roast-lamb.jpg',
    updatedAt: new Date(2020, 0, 1, 9, 0),
};

export const Default = () => {
    return <Featured contents={{...featuredData}} {...actionsData} />
};