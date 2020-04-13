import React from 'react';
import Description from './Description';

export default {
    component: Description,
    title: 'Description',
    excludeStories: /.*Data$/,
};

const textsdata = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
export const descriptionData = {
    texts: textsdata,
    image: './cabbage-sausage-egg-saute.jpg',
    updatedAt: new Date(2020, 0, 1, 9, 0),
};

export const Default = () => {
    return <Description data={{...descriptionData}} />
};

export const NoImage = () => {
    return <Description data={{...descriptionData, image: ''}} />
};
