import { Column,  Tile } from '@carbon/react';
import React from 'react';

const Admin = () => {
    const systems = [
        {id:1, name:"Events" , title:"Manage Events", url:"manageEvents"},
        {id:1, name:"Library" , title:"Manage Books", url:"manageBooks"},
        {id:1, name:"Marks" , title:"Manage Marks", url:"manageMarks"},
        {id:1, name:"Attendance" , title:"Manage Attendance", url:"manageAttendance"},
    ]
    return (
        <>
        
        <Column lg={16} md={8} sm={4}>
        <h2 style={{margin:"10px"}} >OnLine Management</h2>
        </Column>

            {systems.map((system)=>(
                <Column lg={4} md={4} sm={4} key={system.id} style={{margin:"10px"}}   >
                    <Tile>
                        <h2>{system.name}</h2>
                        <h5>{system.title}</h5>
                        <a href={system.url} >{system.url}</a>
                    </Tile>

                </Column>
            ))}
            

            
        </>
    );
}

export default Admin;
