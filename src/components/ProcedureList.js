import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProcedureList.module.css';
import Procedure from './Procedure';

export default function ProcedureList({ mode, data }) {
    const flagImageExist = data.some(item => {
        return (item.image.length > 0);
    });
    return (
        <div className={styles.container}>
        {
            data.map((item, index) => {
                const image = (flagImageExist && item.image === '')?'/blank.gif':item.image;
                const itemClass = (mode === 'VERTICAL')?styles.listVerticalItem:styles.listItem;
                return (
                    <Procedure className={itemClass} key={index} mode={mode} data={{...item, image: image, index: (index + 1)}} />
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