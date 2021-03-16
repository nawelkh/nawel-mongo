import React,{ Component } from 'react';
import  Inscription  from './Inscription';
import Editformetd from './Editformetd';
import Editformprof from './Editformprof';
import Suiteinscription from './Suiteinscription';
import "tailwindcss/tailwind.css";

import './App.css';
class App extends Component {
  
  render() {
   
    return (
      <div className='App'>
        
        <Inscription/>
       
        
      </div>
      
    ); 
    }
  }
   
export default App;
