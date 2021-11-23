import React from 'react'
import '../Sidebar/Sidebar.css';
import SidebarOption from '../SidebarOption/SidebarOption';
import {AiFillHome} from 'react-icons/ai';
import {MdLibraryMusic} from 'react-icons/md';
import {BiSearch} from 'react-icons/bi';
import {BiUser} from 'react-icons/bi';
import { Route, BrowserRoute as Router } from 'react-router';

function Sidebar() {
    return (
        <div className="Sidebar-body">
            <h1>Fuzzy</h1>

                <Route path="/Usuario">
                <SidebarOption Icon={BiUser} title="Usuario" />
            </Route>
                <Route path="/Inicio">
                <SidebarOption Icon={AiFillHome} title="Inicio" />
            </Route>
                <Route path="/Buscar">
                <SidebarOption Icon={BiSearch} title="Buscar" />
            </Route>
                <Route path="/Tumúsica">
                <SidebarOption Icon={MdLibraryMusic} title="Tu música"  />
            </Route>
       <br />
       <strong className="sidebar__title">PLAYLIST</strong>
       <hr />
        
        <SidebarOption title='playlist1'/>
        <SidebarOption title='playlist2'/>             
        <SidebarOption title='playlist3'/>
        <SidebarOption title='playlist4'/>
        <SidebarOption title='playlist5'/>
       
        </div>
    )
}

export default Sidebar
