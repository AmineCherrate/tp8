import React from 'react';
import Button from './button';
import {Profile} from './bonjour';


class Person extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        nom:null,
        prenom:null,
        age:null}
    }

    componentWillMount(){
        this.state.nom="Amine ";
        this.state.prenom="Ech ";
        this.state.age=22;
        
    }
    handleNom=(event)=>{

        this.setState({nom:event.target.value});

    }
    handlePrenom=(event)=>{

        this.setState({prenom:event.target.value});

    }

    increaseage() {
        let age = this.state.age;
        this.setState({age:age+1})
    }

    decreseage = ()=>{
        let age = this.state.age;
        this.setState({age:age-1})
    }

render(){
    return (
        <div>
            <Profile nom={this.state.nom} prenom={this.state.prenom} age={this.state.age}/>

          <input placeholder="Nom" type="text" onChange={this.handleNom}/>
            <input placeholder="Prenom" type="text" onChange={this.handlePrenom}/>
            
            <Button clickfx={this.increaseage.bind(this)} texte='+1 ans'/>
            <Button clickfx={this.decreseage} texte='-1 ans'/>
            </div>

    )
}
}


export default Person;

