import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export class Editformetd extends Component {
    state = {
        step :1 ,
        nom:'',
        prenom:'',
        universite:'',
        faculte: '',
        departement: '',
        specialite: '',
        niveau: '',
        niveaux: ["Licence" ,"Master" ,"Doctorat"],
        adresse: '',
        date:'',
        pwd: '',
        mpwd: '',
       
    }
    continue = e => {
        e.preventDefault();
              this.nextStep();
          };
          back = e => {
            e.preventDefault();
                  this.prevStep();
              };
 //proceed to next step
 nextStep = () => {
    const { step }=this.state;
    this.setState({
        step: step + 1
    });}
    //go back to prev step
prevStep = () => {
    const { step }=this.state;
    this.setState({
        step: step - 1
    });
}



//modifier le contenu du champ ----nom----
handleNom = e => {
    //maitre a jour le state
    this.setState({
        //récuperer la valeur modfier dans le champ
        nom: e.target.value  }) 
}
//modifier le contenu du champ ----prenom----
handlePrenom = e => {
    //maitre a jour le state
    this.setState({
        //récuperer la valeur modfier dans le champ
        prenom: e.target.value  }) 
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
            }

     //modifier le contenu du champ ----depar----
     handleDepar = e => {
         //maitre a jour le state
        this.setState({
            //récuperer la valeur modfier dans le champ
            departement: e.target.value  }) 
    }       

    //modifier le contenu du champ ----specialite----
    handleSpec = e => {
        //maitre a jour le state
        this.setState({
            //récuperer la valeur modfier dans le champ
            specialite: e.target.value  }) 
    }

    //modifier le contenu du champ --Niveau----
    handleniveau = e => {
        
        //maitre a jour le state
        this.setState({
            //récuperer la valeur modfier dans le champ
            niveau: e.target.value  }) 
            }
    //modifier le contenu du champ ----adresse----
    handleAdr = e => {
        //maitre a jour le state
        this.setState({
            //récuperer la valeur modfier dans le champ
            adresse: e.target.value  }) 
    }
    //modifier le contenu du champ ----date de naissance----
    handleDate = e => {
        //maitre a jour le state
        this.setState({
            //récuperer la valeur modfier dans le champ
            date: e.target.value  }) 
    }
    //modifier le contenu du champ ----mot de passe----
    handlePwd = e => {
        //maitre a jour le state
        this.setState({
            //récuperer la valeur modfier dans le champ
            pwd: e.target.value  }) 
    }

    //modifier le contenu du champ ----confirmer mot de passe----
    handleMpwd = e => {
        //maitre a jour le state
        this.setState({
            //récuperer la valeur modfier dans le champ
            mpwd: e.target.value  }) 
    }
 
   //traiter les infos en tapant sur entrée ou sur le boutton 
    handlesubmitform = e => {
        //pour enregistrer les données 
        e.preventDefault();
        console.log( ` Nom:${this.state.nom} Prenom:${this.state.prenom} Université: ${this.state.universite}   Faculté: ${this.state.faculte}  Département: ${this.state.departement} Spécialité: ${this.state. specialite} 
        Niveau: ${this.state.niveau}  Adresse: ${this.state.adresse} Date: ${this.state.date} `)    
    }

    render() { 
        const { step }= this.state;
        switch (step) {
            

            case 1: 
            return (
                <Paper style={{ width: 300,height: 230, paddingLeft: 50, marginLeft: '35%' , marginTop: 50}}>
                <Grid  onSubmit={this.handlesubmitform} nextStep = {this.nextStep }>
             
                <div > 
                <TextField id="input-with-icon-grid" label="Nom " 
                 value={this.state.nom} onChange={this.handleNom}  />
                </div>
                <div > 
                <TextField id="input-with-icon-grid" label="Prenom " 
                 value={this.state.prenom} onChange={this.handlePrenom}  />
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
                <Button  style={{top: 50, left: 30}}variant="contained" color="primary" onClick={this.continue}>Continuer</Button> 
               
                </Grid>  </Paper>
             ); 
              case 2 :
               return ( 
                <Paper style={{ width: 300,height: 300, paddingLeft: 50, marginLeft: '35%' , marginTop: 50}}>
                <Grid onSubmit={this.handlesubmitform} nextStep = {this.nextStep}   prevStep = {this.prevStep }>
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

                <br/>
                <Button style={{right: 20,top: 50}}  variant="contained" color="primary" onClick={this.continue}>Continuer</Button> 
                <Button  style={{top:50 }} variant="contained" color="primary" onClick={this.back}>Retour</Button>
             
              </Grid></Paper>
              );

             case 3 :
             return( 
                <Paper style={{ width: 300,height:150, paddingLeft: 50, marginLeft: '35%' , marginTop:80}}>
                <Grid onSubmit={this.handlesubmitform} nextStep = {this.nextStep}   prevStep = {this.prevStep }>
                <div> 
                <TextField id="standard-password-input" label="Password" type="password" 
                autoComplete="current-password" value={this.state.pwd} onChange={this.handlePwd}  />
                </div>

                <div> 
                   <TextField id="standard-password-input" label="Confirm Password" type="password" 
                autoComplete="current-password" value={this.state.mpwd} onChange={this.handleMpwd}  required/>
                </div>

                <br/>
                <Button style={{right: 20,top: 50}}  variant="contained" color="primary" onClick={this.continue}>Confirmer</Button> 
                <Button  style={{top:50 }} variant="contained" color="primary" onClick={this.back}>Retour</Button>
                
                </Grid> </Paper>
             );
            
             case 4 :
                return( 
                   <Paper style={{ width: 300,height: 300, paddingLeft: 50, marginLeft: '35%' , marginTop: 50}}>
                  <Grid  onSubmit={this.handlesubmitform} nextStep = {this.nextStep }>
                  <List style={{top:25 }}>
                    <Grid>Nom : {this.state.nom}</Grid>
                    <Grid>Prenom : {this.state.prenom}</Grid>
                    <Grid>Adresse : {this.state.adresse}</Grid>
                    <Grid>Date : {this.state.date}</Grid>
                    <Grid>Université : {this.state.universite}</Grid>
                    <Grid>Faculté : {this.state.faculte}</Grid>
                    <Grid>Département : {this.state.departement}</Grid>
                    <Grid>Specialité : {this.state.specialite}</Grid>
                    <Grid>Niveau : {this.state.niveau}</Grid>
                   </List>
   
                   <br/>
                   <Button  style={{top: 50 , left: 60}} variant="contained" color="primary" onClick={this.continue}>Ok</Button> 
                   </Grid> </Paper>
                );  
                
         
             }
              }
}

export default Editformetd
