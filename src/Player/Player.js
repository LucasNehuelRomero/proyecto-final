import React from 'react';
import "../estilos/Player.css";
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body'
import Footer from '../componentes/Footer'
import { Route, BrowserRoute as Router } from 'react-router';

function Player() {
    return (
        <Router>
        <div className="player">
            <div className="player_body">
                <Sidebar />
                <Body />    
            </div>
            <Footer />
        </div>
        </Router>
    )
}

export default Player
