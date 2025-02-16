import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom"; 

const Dashboard = () => {
  const [name, setName] = useState(''); 
  const [token, setToken] = useState(''); 
  const [expire, setExp] = useState(''); 
  const navigate = useNavigate(); 

  useEffect(() => {
    refreshToken();
  }, []); 

  const refreshToken = async () => {
    try {
        const response = await axios.get('http://localhost:5000/token');
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setName(decoded.name); 
        setExp(decoded.exp); 
    } catch (error) {
        if (error.response) {
            navigate("/"); 
        }
    }
  }

  return (
    <section className="hero is-light is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-6-tablet is-4-desktop">
              <div className="box">
                <h1 className="title is-3 has-text-centered">Welcome, {name}!</h1> {/* Menampilkan nama */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
