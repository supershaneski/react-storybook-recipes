import React from 'react';
import PageNotFound from './PageNotFound';

export default {
    component: PageNotFound,
    title: 'PageNotFound',
    excludeStories: /.*Data$/,
};

export const Default = () => {
    return <PageNotFound />
};
