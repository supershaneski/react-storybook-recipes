import React from 'react';
import Home from './Home';

export default {
    component: Home,
    title: 'Home',
    excludeStories: /.*Data$/,
};

export const Default = () => {
    return <Home />
};
