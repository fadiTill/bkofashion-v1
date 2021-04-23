import React, {useState} from 'react';
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import { auth}  from "./firebase";




function Login() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[address, setAddress] = useState('');
    const history = useHistory();

    const signIn = event => {
        event.preventDefault();

        auth

        .signInWithEmailAndPassword(email,  password)
        .then(auth => {
            history.push('/')
        })
            .catch(error => alert(error.message))
        
        }

        const register = event => {
            event.preventDefault();
            auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                history.push('/')
                }
            })
                .catch(error => alert(error.message))
         
        }


    return (
        <div className="login">
            <Link to="/">
            <img className="login-logo" src="images/transparent.png"  alt="logo picture"/>
            </Link>
       
        <div  className="login-container" > 
        <h1 className="sign-in"> Sign In  </h1>
        <form>
        {/* <a href="#" className="fb-btn">
        <i className="fa fa-facebook fa-fw"></i>  Facebook </a>
          <br></br>
          <hr></hr> */}
          <br></br>
          <h5> Email:</h5>
        <input  value={email}  onChange={event => setEmail(event.target.value)} type="Email" name="email" placeholder="Email" required/>
        <h5> address:</h5>
        <input  value={address}  onChange={event => setAddress(event.target.value)} type="Address" name="Address" placeholder="Address" required/>
        <h5> Password:</h5>
        <input  value={password} onChange={event => setPassword(event.target.value)} type="password" name="password" placeholder="Password" required/>
        <button  type='submit' onClick={signIn} className="login-button"> Sign In</button>
       </form>
       <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>
       <button  onClick={register} className="signup-button" > create an new account</button>
        </div>
       
        </div>
    )
}

export default Login
