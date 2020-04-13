import React from 'react';
import PropTypes from 'prop-types';
import ProcedureList from './ProcedureList';
import styles from './ProceduresPanel.module.css';

export default function ProceduresPanel({ lang, mode, data }) {
    const title = (lang === 'en')?'Directions':'作り方';
    /*
    if(data.length === 0) {
        return (
            <div className={styles.noDataContainer}></div>
        )
    }*/
    return (
        <div className={styles.container}>
            <div className={styles.header}><h4>{ title }</h4></div>
            <ProcedureList mode={mode} data={data} />            
        </div>
    )
}

ProceduresPanel.defaultProps = {
    lang: 'en',
    mode: 'HORIZONTAL'
}

ProceduresPanel.propTypes = {
    lang: PropTypes.string,
    mode: PropTypes.string,
    //data: PropTypes.arrayOf(ProcedureList.propTypes.data).isRequired,
    //data: ProcedureList.propTypes.data.isRequired,
    data: ProcedureList.propTypes.data,
};