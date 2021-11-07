import React from 'react'
import '../estilos/Sidebar.css';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div className="Sidebar-body">
            <h1>Sidebar</h1>
       <SidebarOption title="Home" />
       <SidebarOption title="Search" />
       <SidebarOption title="Library" />
       
       
        </div>

    )
}

export default Sidebar
