import React, { useState} from 'react';
import axios from "axios";

import logo from "./images/logo.jpg";

import {SiFacebook} from 'react-icons/si' ; 
import {FcGoogle} from 'react-icons/fc';
import {MdEmail}  from 'react-icons/md' ; 
import {RiLockPasswordFill} from 'react-icons/ri';
import {FaUserAlt} from 'react-icons/fa';
import suite from './Suiteinscription';

export default function Inscription() {
 

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 const [formation, setFormation] = useState("etudiant");





  const handleRegister = async (e) => {
    e.preventDefault();

    
/*
    const formationError = document.querySelector(".formation.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const confirmPasswordError = document.querySelector(".confirmPassword.error");
    //const termsError = document.querySelector(".terms.error");*/
    
 
   
    if (password !== confirmPassword) {

     console.log( "Les mots de passe ne correspondent pas")

    }else {
      console.log('je suis la ');
      axios
       .post('http://localhost:5000/etudiant-e96f9/us-central1/api/signup',{
          nom,
          prenom,
          email,
          password,
          confirmPassword ,
          formation} ) 

        .then((res) => {
        console.log(res);
        window.alert ("inscription reussite  ");


        /*if (res.data.errors) {
          formationError.innerHTML = res.data.errors.formation;
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
          confirmPasswordError.innerHTML = res.data.errors.confirmPassword;
        } */
      })
      .catch((err) => console.log(err));
  }
};

const handleLogin = (e) => {
  e.preventDefault();
  const emailError = document.querySelector(".email.error");
  const passwordError = document.querySelector(".password.error");

  axios 
   .post('http://localhost:5000/etudiant-e96f9/us-central1/api/login',{
    email,
      password,
    })
  
    .then((res) => {
      console.log(res);
      if (res.data.errors) {
        emailError.innerHTML = res.data.errors.email;
        passwordError.innerHTML = res.data.errors.password;
      } else {
        window.alert ("vs etes connectes ");
        
      }
    })
    .catch((err) => {
      console.log(err);
    });
};







   
  const [Container,setContainer]=React.useState("container")
  const[DivContainer,setDivContainer]=React.useState("forms-container")

    const handleClickSignUp=()=>{ 
          setContainer(" container sign-up-mode")
          setDivContainer("forms-container sign-up-mode")
        }

    const handleClickSignIn=()=>{
        setContainer(" container ")
        setDivContainer("forms-container")
     }

     
       
       

    return(
      <div>
        <div class={Container}>
      <div class={DivContainer}>
        <div class="signin-signup">


          <form action="" onSubmit={handleLogin} class="sign-in-form">
          <img src={logo}  style={{width:"15vh" ,float:"left",marginTop:'5px',marginRight:'20px', borderRadius: "50px"}} align="center" ></img>
            <h2 class="title">Se connecter</h2>

            <div class="input-field">
                <i><MdEmail/></i>
                <input type="email" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)} required /> 
            </div>
              <div class="input-field">
                <i ><RiLockPasswordFill/></i>
                <input type="password" placeholder="mot de passe" id="password" onChange={(e) => setPassword(e.target.value)} required />
              </div>

          <input type="submit" value="Connexion" class="btn solid" />
          </form>

          
          <form action="" onSubmit={handleRegister}  class="sign-up-form">
            
            <h3 class="title">S'inscrire</h3>
              <div class="input-field">
                <i><FaUserAlt/></i>
           
            <input type="text"  id="nom" onChange={(e) => setNom(e.target.value)} placeholder="Nom" required/>
            </div>
            <div class="input-field">
                <i><FaUserAlt/></i>
            
            <input type="text"  id="prenom" onChange={(e) => setPrenom(e.target.value)} placeholder="Prenom"  required/>
            
            </div>
              <div class="input-field">
                <i><MdEmail/></i>
                
                <input type="email"  id="Email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"  required/> </div>
              
              <div class="input-field">
                <i ><RiLockPasswordFill/></i>
               
                <input type="password"  id="password" onChange={(e) => setPassword(e.target.value)} placeholder="mot de passe" required/></div>
              
              <div class="input-field">
                <i ><RiLockPasswordFill/></i>
                
                <input type="password"  id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmer mot de passe"  required/></div>
               
                <div class="input">
                <label class="social-text" >Vous êtes</label>
               
                 <label  class="social-text"> <input type="radio" name="formation" id="prof" value="Enseignant"  />Enseignant </label> 
                 <label class="social-text"><input type="radio" name="formation" id="etu" value="Etudiant" checked/>Etudiant</label> 
                
                </div>
                
            <input type="submit" class="btn" value="Créer"  />
            <div class="social-media">
              <p class="social-text">Inscrivez-vous avec</p>
                <a href=" " class="social-icon">
                <SiFacebook/>
                </a>
                <a href=" " class="social-icon">
                <FcGoogle/>
                </a></div>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>Welcome To Uniswap</h3>
           
            <p>
          Créez un compte et et swapez avec vos profs et vos amis !
            </p>
            
            <button class="btn transparent" id="sign-up-btn" onClick={handleClickSignUp}>
                Inscription
            </button>
           
          </div>
          
        </div>





        <div class="panel right-panel">
          <div class="content">
            <h3>Vous possedez déja un compte ?</h3>
            <p>
             Connectez-vous alors !
            </p>
            <button class="btn transparent" id="sign-in-btn" onClick={handleClickSignIn} >
              Connexion
            </button>
          </div>
          <img src="img/register.svg" class="image" alt="" />
        </div>
      </div>
    </div>
</div>  
        )
    
}



