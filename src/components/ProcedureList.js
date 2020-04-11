import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProcedureList.module.css';
import Procedure from './Procedure';

export default function ProcedureList({ mode, data }) {
    return (
        <div className={styles.container}>
        {
            data.map((item, index) => {
                return (
                    <Procedure key={index} mode={mode} data={{...item, index: (index + 1)}} />
                )
            })
        }
        </div>
    )
}

ProcedureList.defaultProps = {
    mode: 'HORIZONTAL',
}

ProcedureList.propTypes = {
    mode: PropTypes.string,
    data: PropTypes.arrayOf(Procedure.propTypes.data).isRequired,
};