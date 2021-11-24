import React from 'react'
import { Routes, Route } from 'react-router-dom';
import User from './Routes/User';
import Search from './Routes/Search';
import Library from './Routes/Library';
import Body from './Body/Body';
import Player from './Player/Player'


const Content = props => {
    return (
        <div className="Contenedor">
        <Player>
            <Routes>
                <Route path="/Usuario" element={<User />} />
                <Route path="/Inicio" element={<Body/>} />
                <Route path="/Buscar" element={<Search />} />
                <Route path="/Tu música" element={<Library />} />
            </Routes>
        </Player>
        </div>
        
    )
}

export default Content
