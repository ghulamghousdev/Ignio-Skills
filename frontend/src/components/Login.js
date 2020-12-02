import React from 'react';
import axios from 'axios';
import auth from '../utils/auth'
import '../styles/LoginPage.scss'



class Login extends React.Component{
    SubmitHandler = async e =>{
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        const User = {
            email,
            password
            }

            try{
                const config = {
                    headers: {
                        'Content-Type': 'Application/json'
                    }
                }
                const body = JSON.stringify(User);
                const res = await axios.post('/user/login', body, config);
                auth.setAuthToken(res.data.token);
                console.log(res)

            } catch(error){
                console.log(error);
            }
    }
    render(){
        return (
          <div>
            <form className="form" onSubmit={this.SubmitHandler}>
            <h1 className="logo">IgnioSkills</h1>
            <hr />
            <h3 className="form__heading">Login</h3>
            <input 
              className="form__input" 
              placeholder="Email Address" 
              type="email" 
              name="email"
            />
            <input 
              className="form__input" 
              placeholder="Password" 
              type="password" 
              name="password"
            />

            <input
              className="form__btn"
              type="submit"
              name="submit"
              value="Login"
            />
          </form>
          <div className="register">
            <div className="text">Don't have account? <a className="link simple" href="/user/signup"> Sign Up</a></div>
          </div>
          </div>
        )
    }
}

export default Login;
