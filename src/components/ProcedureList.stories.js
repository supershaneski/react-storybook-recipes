import React from 'react';
import ProcedureList from './ProcedureList';
import { procedureData } from './Procedure.stories';

export default {
    component: ProcedureList,
    title: 'ProcedureList',
    excludeStories: /.*Data$/,
};

export const defaultProceduresData = [
    { ...procedureData },
    { ...procedureData, image: '/image2.jpg' },
    { ...procedureData, image: '/image3.jpg' },
    { ...procedureData, image: '/image4.jpg' },
];

export const Default = () => {
    return <ProcedureList data={defaultProceduresData} />
};
