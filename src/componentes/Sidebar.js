import React from 'react'
import '../estilos/Sidebar.css';
import SidebarOption from './SidebarOption';
import {AiFillHome} from 'react-icons/ai';
import {MdLibraryMusic} from 'react-icons/md';
import {BiSearch} from 'react-icons/bi';

function Sidebar() {
    return (
        <div className="Sidebar-body">
            <h1>Sidebar</h1>
       <SidebarOption Icon={AiFillHome} title="Home" />
       <SidebarOption Icon={BiSearch} title="Search" />
       <SidebarOption Icon={MdLibraryMusic} title="Your music"  />
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
