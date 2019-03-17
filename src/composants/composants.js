import React from 'react';
 
const Home =() =>(<div><h2>Bienvenue</h2></div>)
const Apropos = ()=>(<div><h2>A propos de nous</h2></div>)
const Articles = ()=>(<div><h2>Liste des Articles</h2></div>)
const Article = (props) => (

    <div>
        <h3>{props.articleId}</h3>
    </div>
)

export {Home, Apropos,Articles,Article}
