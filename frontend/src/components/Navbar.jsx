import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            navigate('/'); 
        } catch (error) {
            console.log(error);
        }
    };

    return (
        
        <nav className="navbar custom-navbar" role="navigation" aria-label="main navigation">
            <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <button onClick={handleLogout} className="button logout-button">
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
