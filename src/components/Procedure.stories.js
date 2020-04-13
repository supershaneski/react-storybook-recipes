import React from 'react';
import Procedure from './Procedure';

export default {
    component: Procedure,
    title: 'Procedure',
    excludeStories: /.*Data$/,
};

const textsData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
export const procedureData = {
    index: '1',
    texts: textsData,
    image: '/image1.jpg',
    updatedAt: new Date(2020, 0, 1, 9, 0),
};

export const Default = () => {
    return <Procedure data={{...procedureData}} />
};

export const NoImage = () => {
    return <Procedure data={{...procedureData, image: ''}} />
};

export const VerticalDefault = () => {
    return <Procedure mode="VERTICAL" data={{...procedureData}} />
};

export const VerticalNoImage = () => {
    return <Procedure mode="VERTICAL" data={{...procedureData, image: ''}} />
};
