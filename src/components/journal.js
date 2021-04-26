
import React from "react";
import { SidebarData } from "./journal-sidebar-data";



function Journal() {

    return(
    
    <div className="journal-full" >
        <div className="journal-title">

        </div>
        <div className="journal-sidebar">
             <ul className="Sidebar-list">
        {
            SidebarData.map((val, key)=> {
                return(
                    <li key={key} className="sidebar-icons" onClick={()=>{window.location.pathname = val.role;}}>
                        <div id="icon">{val.icon}</div><div id="title">{val.title}</div>
                    </li>
                )
            })
        }
         </ul>
        </div>
    </div>

    );
    

}
export default Journal;