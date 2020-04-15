import React, { useState, useEffect } from 'react';
import Home from './components/Home';

export default function HomePage() {
    
    const initialMode = (window.innerWidth <= 600)?'MOBILE':'DEFAULT';
    const [siteMode, setSiteMode] = useState(initialMode);

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
    
    return (
        <div className="home-page">
            <Home mode={siteMode} />
        </div>
    )
}