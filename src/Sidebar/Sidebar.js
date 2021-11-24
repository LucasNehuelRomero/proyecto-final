import React from 'react'
import '../Sidebar/Sidebar.css';
import SidebarOption from '../SidebarOption/SidebarOption';
import {AiFillHome} from 'react-icons/ai';
import {MdLibraryMusic} from 'react-icons/md';
import {BiSearch} from 'react-icons/bi';
import {BiUser} from 'react-icons/bi';
import Content from './Content';

function Sidebar() {
    return (
        <div className="Sidebar-body">
            <h1>Fuzzy</h1>
                <Content />
                <SidebarOption Icon={BiUser} title="Usuario" />
                <SidebarOption Icon={AiFillHome} title="Inicio" />
                <SidebarOption Icon={BiSearch} title="Buscar" />
                <SidebarOption Icon={MdLibraryMusic} title="Tu música"  />
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
