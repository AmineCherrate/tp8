import React from 'react';
const Bonjour=(props)=><h1>{props.nom}</h1>
const Button = (props)=><button>{props.text}</button>
const Bloc = (props)=><div>{props.children}</div>
const  Profile = (props)=><div>{props.nom}{props.prenom}{props.age}</div>
export {Bonjour,Button,Bloc,Profile};