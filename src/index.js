import React from 'react';
import ReactDOM from 'react-dom';

const Composant1 =()=>{
  return <h1>Bonjour Benjamin</h1>
}

class Composant2 extends React.Component{
  render(){
    return <h1> Bonjour MOUANGA </h1>
  }
}

class CompoAEtat extends React.Component {
  render() {
    return <h1>Bonjour {this.props.prenom} {this.props.nom} !</h1>;
  }
}

const Photo = () => <img style={{height: '100px'}} src="https://images.pexels.com/photos/7823/selfie.jpg"/>;

const Nom = () => <h4>Jean Dupont</h4>;

const Bio = () =>
    <p>
      <strong>Biographie </strong>
      Jean est un type banal mais qui ne manque pas de classe.
    </p>;

const Profil = () => (
    <div>
        <Photo/>
        <Nom/>
        <Bio/>
    </div>
)
   

ReactDOM.render( <Profil/>, document.getElementById('root'));



