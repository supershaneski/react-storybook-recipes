import React from 'react';
import ProceduresPanel from './ProceduresPanel';
import { defaultProceduresData } from './ProcedureList.stories';

export default {
    component: ProceduresPanel,
    title: 'ProceduresPanel',
    excludeStories: /.*Data$/,
};

export const defaultProceduresPanelData = defaultProceduresData;

export const Default = () => {
    return <ProceduresPanel lang="en" data={defaultProceduresPanelData} />
};

const jpnTextData = '今は夏 そばにあなたの匂い しあわせな夢に おぼれていたけれど 夕立ちが 白い稲妻つれて 悲しみ色の 日ぐれにしていった しびれた指 すべり落ちた 珈琲カップ 砕け散って 私はただ あなたの目を 言葉もなく 見つめるだけ さだめという いたずらに ひきさかれそうな この愛 今は冬 そばにあなたはいない 石畳白く 粉雪が舞い踊る。';
const jpnProceduresData = [
    { index: '1', texts: jpnTextData, image: './image1.jpg'},
    { index: '2', texts: jpnTextData, image: './image2.jpg'},
    { index: '3', texts: jpnTextData, image: './image3.jpg'},
    { index: '4', texts: jpnTextData, image: './image4.jpg'},
];

export const JapaneseLang = () => {
    return <ProceduresPanel lang="jp" data={jpnProceduresData} />
};

export const Vertical = () => {
    return <ProceduresPanel lang="en" mode="VERTICAL" data={defaultProceduresPanelData} />
};
