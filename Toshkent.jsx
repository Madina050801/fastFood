import React from "react";
import Viloyat  from './Viloyat'

class Toshkent extends React.Component {
  render(){
    console.log(this);
    return(
      <div>
        <Viloyat images='i1' title = 'Lavash mini' kategoriya='Lavash' price='18,000 UZS' add='Kichik lavash, bla bla' edit='edit' trash='trash'/>
        <Viloyat images='i2' title = 'ChizburgerMax' kategoriya='Burger' price='23,000 UZS' add='Kichik lavash, bla bla' edit='edit' trash='trash'/>
        <Viloyat images='i1' title = 'Lavash mini' kategoriya='Lavash' price='18,000 UZS' add='Kichik lavash, bla bla' edit='edit' trash='trash'/>
        <Viloyat images='i1' title = 'Lavash mini' kategoriya='Lavash' price='18,000 UZS' add='Kichik lavash, bla bla' edit='edit' trash='trash'/>
        <Viloyat images='i2' title = 'Lavash mini' kategoriya='Lavash' price='18,000 UZS' add='Kichik lavash, bla bla' edit='edit' trash='trash'/>
        <Viloyat images='i1' title = 'Lavash mini' kategoriya='Lavash' price='18,000 UZS' add='Kichik lavash, bla bla' edit='edit' trash='trash'/>
         </div>
    );  
  }
}


export default Toshkent;
