import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [msg, setMsg] = useState('');
    const navigate = useNavigate(); 

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            navigate("/");
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
                                <h1 className="title is-4 has-text-centered">Create an Account</h1>
                                <p className="has-text-centered is-size-6 has-text-danger">{msg}</p>
                                <form onSubmit={Register}>
                                    <div className="field">
                                        <label className="label">Full Name</label>
                                        <div className="control">
                                            <input 
                                                type="text" 
                                                className="input" 
                                                placeholder="Enter your name"
                                                value={name} 
                                                onChange={(e) => setName(e.target.value)} 
                                            />
                                        </div>
                                    </div>
                                    
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
                                                placeholder="Choose a password"
                                                value={password} 
                                                onChange={(e) => setPassword(e.target.value)} 
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Confirm Password</label>
                                        <div className="control">
                                            <input 
                                                type="password" 
                                                className="input" 
                                                placeholder="Confirm your password"
                                                value={confPassword} 
                                                onChange={(e) => setConfPassword(e.target.value)} 
                                            />
                                        </div>
                                    </div>

                                    <div className="field is-grouped is-grouped-centered">
                                        <div className="control">
                                            <button className="button is-success is-medium">Register</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <p className="has-text-centered">Already have an account? <a href="/" className="has-text-link">Login here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;
