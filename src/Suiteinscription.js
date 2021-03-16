import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export class Suiteinscription extends Component {
    state = {
        universite:'',
        faculte: '',
        departement: '',
        specialite: '',
        niveau: '',
        niveaux: ["Licence" ,"Master" ,"Doctorat"],
        adresse: '',
        date:'', 
    }
    
    //modifier le contenu du champ ----universite----
        handleUniv = e => {
            //maitre a jour le state
            this.setState({
                //récuperer la valeur modfier dans le champ
                universite: e.target.value  }) 
        }

    //modifier le contenu du champ ----faculte----
            handleFac = e => {
                //maitre a jour le state
                this.setState({
                    //récuperer la valeur modfier dans le champ
                    faculte: e.target.value  }) 
            };

     //modifier le contenu du champ ----depar----
     handleDepar = e => {
         //maitre a jour le state
        this.setState({
            //récuperer la valeur modfier dans le champ
            departement: e.target.value  }) 
    }  ;     

    //modifier le contenu du champ ----specialite----
    handleSpec = e => {
        //maitre a jour le state
        this.setState({
            //récuperer la valeur modfier dans le champ
            specialite: e.target.value  }) 
    };

    //modifier le contenu du champ --Niveau----
    handleniveau = e => {
        
        //maitre a jour le state
        this.setState({
            //récuperer la valeur modfier dans le champ
            niveau: e.target.value  }) 
            };
    //modifier le contenu du champ ----adresse----
    handleAdr = e => {
        //maitre a jour le state
        this.setState({
            //récuperer la valeur modfier dans le champ
            adresse: e.target.value  }) 
    };
    //modifier le contenu du champ ----date de naissance----
    handleDate = e => {
        //maitre a jour le state
        this.setState({
            //récuperer la valeur modfier dans le champ
            date: e.target.value  }) 
    };
   
 
   //traiter les infos en tapant sur entrée ou sur le boutton 
    handlesubmitform = e => {
        //pour enregistrer les données 
        e.preventDefault();
        console.log( `  Université: ${this.state.universite}   Faculté: ${this.state.faculte}  Département: ${this.state.departement} Spécialité: ${this.state. specialite} 
        Niveau: ${this.state.niveau}  Adresse: ${this.state.adresse} Date: ${this.state.date} `)    
    };

    render(){
        return (
                <Paper style={{ width: 400,height: 500, paddingLeft: 50, marginLeft: '35%' , marginTop: 50}}>
                <Grid  onSubmit={this.handlesubmitform} nextStep = {this.nextStep }>
                <div > 
                <TextField id="input-with-icon-grid" label="Université " 
                 value={this.state.universite} onChange={this.handleUniv}  nextStep = {this.nextStep }/>
                </div>

                <div> 
                <TextField id="input-with-icon-grid" label="Faculté" 
                 value={this.state.faculte} onChange={this.handleFac} />
                </div>
                <div> 
                <TextField id="input-with-icon-grid" label="Département" 
                value={this.state.departement} onChange={this.handleDepar} />
                </div>
                
                <div> 
                <TextField id="input-with-icon-grid" label="Spécialité" 
                 value={this.state.specialite} onChange={this.handleSpec} />
                </div>
               
                <div style={{marginTop:20}} >
                <InputLabel id="demo-simple-select-helper-label">Niveau</InputLabel>
                    <Select
                    labelId="demo-simple-select-label" id="demo-simple-select" value={this.state.niveau} 
                    onChange={this.handleniveau}>
                    
                    { 
                    //retourner les valeurs du tableau niveaux
                      this.state.niveaux.map ((niveau , index) => {
                          return(
                            <MenuItem key={index} value={niveau}>{niveau}</MenuItem>
                          )
                      }) 
                    }
                    </Select>
                </div>

                <div> 
                <TextField id="input-with-icon-grid" label="Adresse" 
                 value={this.state.adresse} onChange={this.handleAdr} />
                </div>

                <div >  
                <TextField id="input-with-icon-grid" label="Date de naissance" 
                 value={this.state.date} onChange={this.handleDate} />
                </div>
                <br/>
                <Button  style={{top: 50, left: 30}}variant="contained" color="primary" onClick={this.continue}>Terminer</Button> 
                
                </Grid>  </Paper>
             )
            
            }
              

 
}
export default Suiteinscription ;

  

  
  
  