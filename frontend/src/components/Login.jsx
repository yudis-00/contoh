import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/login', {
            email: email,
            password: password
        });
        navigate("/dashboard");
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
}

  return (
    <section className="hero is-fullheight is-light">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <div className="box">
                <h1 className="title is-4 has-text-centered">Login</h1>
                <p className="has-text-centered is-size-6 has-text-danger">{msg}</p>
                <form onSubmit={Auth}>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input 
                        type="email" 
                        className="input" 
                        placeholder="Enter your email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input 
                        type="password" 
                        className="input" 
                        placeholder="Enter your password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                      />
                    </div>
                  </div>

                  <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                      <button className="button is-primary is-medium">Login</button>
                    </div>
                  </div>
                </form>
              </div>
              <p className="has-text-centered">
                Don't have an account? 
                <a href="/register" className="has-text-link"> Register here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;
