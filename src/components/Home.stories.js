import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import { Home } from './Home';

export default {
    component: Home,
    title: 'Home',
    excludeStories: /.*Data$/,
    decorators: [story => <Provider store={store}>{story()}</Provider>],
};

const textsData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const recipeItemData = {
    id: 'cabbage-stir-fry',
    title: 'Cabbage, Sausage and Egg Stir-fry',
    image: '/cabbage-sausage-egg-saute.jpg',
    texts: textsData,
    updatedAt: new Date(2020, 0, 1, 9, 0),
};
const defaultRecipeItemsData = [
    { ...recipeItemData },
    { ...recipeItemData, id: 'beef-roast-stew', title: 'Cabbage and Meatballs', image: './cabbage-meatball.jpg' },
    { ...recipeItemData, id: 'chicken-tomato-sauce', title: 'Beansprout, Chinese leek and Egg', image: './moyashi-nira-tamago.jpg' },
    { ...recipeItemData, id: 'fish-veggie-soup', title: 'Pork and Beansprouts', image: './pork-moyashi-negi.jpg' },
];

const store = {
    getState: () => {
      return {
        recipes: defaultRecipeItemsData,
      };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

const defaultHomeParam = {
    mode: 'DEFAULT',
    state: {
        recipes: {
            items: defaultRecipeItemsData,
        },
    },
}
export const Default = () => {
    return <Home {...defaultHomeParam} />
};

const mobileHomeParam = {
    mode: 'MOBILE',
    state: {
        recipes: {
            items: defaultRecipeItemsData,
        },
    },
}
export const MobileView = () => {
    return <Home {...mobileHomeParam} />
};