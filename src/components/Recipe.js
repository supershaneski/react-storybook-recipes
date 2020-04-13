import React from 'react';
import PropTypes from 'prop-types';
import styles from './Recipe.module.css';

import Description from './Description';
import IngredientsPanel from './IngredientsPanel';
import ProceduresPanel from './ProceduresPanel';

export default function Recipe({ mode, data: { title, description, ingredients, procedures } }) {
    
    let classContainer = styles.container;
    let classTitle = styles.title;
    let classDescription = styles.descriptionPanel;
    let classIngredients = styles.ingredientsPanel;
    let classProcedures = styles.proceduresPanel;
    
    let procedureMode = 'HORIZONTAL';
    if(mode === 'COLUMN') {
        classContainer = styles.containerColumn;
        classTitle = styles.titleColumn;
        classDescription = styles.descriptionPanelColumn;
        classIngredients = styles.ingredientsPanelColumn;
        classProcedures = styles.proceduresPanelColumn;
        procedureMode = 'VERTICAL';
    }

    return (
        <div className={classContainer}>
            <div className={classTitle}>
                <h4>{ title }</h4>
            </div>
            <div className={classDescription}>
                <Description data={description} />
            </div>
            <div className={classIngredients}>
                <IngredientsPanel data={ingredients} />
            </div>
            <div className={classProcedures}>
                <ProceduresPanel mode={procedureMode} data={procedures} />
            </div>
        </div>
    )
}

Recipe.defaultProps = {
    mode: 'DEFAULT',
    data: {
        ingredients: {},
    }
}

Recipe.propTypes = {
    mode: PropTypes.string,
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: Description.propTypes.data.isRequired,
      ingredients: IngredientsPanel.propTypes.data,
      procedures: ProceduresPanel.propTypes.data.isRequired,
    }),
};