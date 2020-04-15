import React, { useState, useEffect } from 'react';
import { connect }  from 'react-redux';
import { useHistory } from "react-router-dom";
import Page from './components/Page';

function RecipePage(props) {

    let history = useHistory();
    
    const initialMode = (window.innerWidth <= 600)?'MOBILE':'DEFAULT';
    const [siteMode, setSiteMode] = useState(initialMode);

    const param_id = props.match.params.id;
    const selected_recipe = props.state.recipes.items.find(item => {
        return item.slug === param_id;
    })
    
    const specials = props.state.recipes.items.filter(item => {
        return item.slug !== param_id;
    });
    
    useEffect(() => {        
        window.addEventListener("resize", handleResize);
    })

    function handleResize() {
        if(window.innerWidth <= 600) {
           if(siteMode !== 'MOBILE'){
               setSiteMode('MOBILE');
           }
        } else {
           if(siteMode !== 'DEFAULT'){
               setSiteMode('DEFAULT');
           }
        }
    }

    function handleClick(id) {
        if(id) {
            history.push("/recipe/" + id);
        } else {
            history.push("/");
        }
    }
    
    return (
        <Page data={selected_recipe} mode={siteMode} special={specials} onClick={id => handleClick(id)} />
    )
}

const mapStateToProps = (state) => {
    return {
        state,
    }
}

export default connect(mapStateToProps)(RecipePage);

