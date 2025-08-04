import { Menu } from '@carbon/icons-react';
import { Header, HeaderGlobalAction, HeaderGlobalBar, HeaderName } from '@carbon/react';
import React, { useState } from 'react';
import MainMenu from './mainMenu';

const Heading = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = ()=>{
        setMenu(!menu)
    }
    return (
        <>
        <Header  >
            <HeaderName prefix='' ><h2>Edutech</h2></HeaderName>
            <HeaderGlobalBar></HeaderGlobalBar>
            
            <HeaderGlobalAction>
                <Menu size={20}  onClick={handleMenu} />
            </HeaderGlobalAction>
        </Header>
        {menu && <MainMenu />}
            
        </>
    );
}

export default Heading;
