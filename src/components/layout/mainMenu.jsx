import { BorderTop } from '@carbon/icons-react';
import { Button, Column } from '@carbon/react';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const MainMenu = () => {
    const navigate = useNavigate()
    return (
        <>
            <Column  lg={4} sm={4} md={4} 
             className='menu' 
             style={{  position:"absolute"}} >
            <Button  kind="ghost" style={{margin:"5px"}} onClick={()=>navigate("/library")}  >Library</Button>
            <Button kind="ghost" style={{margin:"5px"}}  onClick={()=>navigate("/attendance")} >Attendace</Button>
            <Button  kind="ghost" style={{margin:"5px"}} >Events</Button>
            <Button  kind="ghost" style={{margin:"5px"}}  onClick={()=>navigate("/admin")} >Manager</Button>
            </Column>
            
        </>
    );
}

export default MainMenu;
