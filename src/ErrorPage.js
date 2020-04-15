import React from 'react';
import PageNotFound from './components/PageNotFound';
export default function ErrorPage() {
    
    const to = '/hello';
    const isExternal = (url) => /^(http|https):\/\//.test(url || "");
    console.log(to, isExternal(to));

    return (
        <PageNotFound />
    )
}