import React from 'react';
import { Link } from 'react-router-dom';
import beer from '../beer.svg';
import '../css/Homepage.css';

const Header = (props) => {
    return (
        <header>
            <Link to="/beers">
                <img src={beer} alt="Accueil du site" className="logo"></img>
            </Link>
            <h1 style={{ textAlign: 'center' }}>Welcome to the Osedea Coding Challenge!</h1>
            <blockquote style={{ textAlign: 'center' }}> (Hint : Start drinking )</blockquote>
        </header>
    );
};

export default Header;
