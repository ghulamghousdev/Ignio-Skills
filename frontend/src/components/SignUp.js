import React from 'react';
import axios from 'axios';
import auth from '../utils/auth'
import '../styles/SignUpPage.scss';


class SignUp extends React.Component {
    SubmitHandler = async e =>{
        e.preventDefault();
        const fullName = e.target.elements.fullname.value;
        const email = e.target.elements.email.value;
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;

        const User = {
            fullName,
            email,
            username,
            password
            }

            try{
                const config = {
                    headers: {
                        'Content-Type': 'Application/json'
                    }
                }
                const body = JSON.stringify(User);
                const res = await axios.post('/user/register', body, config);
                auth.setAuthToken(res.data.token);
                console.log(res)
            } catch(error){
                console.log(error);
            }
    }

    render(){
        return (
          <div>
            <form className="signupform" onSubmit={this.SubmitHandler}>
                <h1 className="logo">IgnioSkills</h1>
                <hr />
            <h3 className="signupform__heading">Sign Up</h3>
            <input 
              className="signupform__input" 
              placeholder="Full Name" 
              type="text" 
              name="fullname"
            />
            <input 
              className="signupform__input" 
              placeholder="Email" 
              type="email" 
              name="email"
            />
            <input 
              className="signupform__input" 
              placeholder="Username" 
              type="text" 
              name="username"
            />
            <input 
              className="signupform__input" 
              placeholder="Password" 
              type="password" 
              name="password"
            />

            <input
              className="signupform__btn"
              type="submit"
              name="submit"
              value="Sign Up"
            />
          </form>
          <div className="login">
            <div className="loginprompt">Already have account? <a className="link simple" href="/user/signup"> Login</a></div>
          </div>
        </div>
        )
    }
}

export default SignUp;
