import { Grid, Column, Button } from '@carbon/react';
import { DashBoardObject } from './dashboardobject';
import { useNavigate } from 'react-router-dom';
import BannerPage from './banner';
import { useEffect, useState } from 'react';

function Homeboard() {
     const [isLoading,setIsLoading] = useState(false)
      document.addEventListener('load', handleLoaded)
      function handleLoaded(){
        setIsLoading(true)
      }
        useEffect(()=>{
          handleLoaded()
        })
  const navigate = useNavigate()
  return (
    <Grid fullWidth style={{ marginTop: '3rem' }}>
       {!isLoading && (<BannerPage />)}
      {DashBoardObject.map((item) => (
        <Column key={item.id} lg={4} md={4} sm={4}>
          
          <div
          className='homeboard-item'
          onClick={()=>{
            if(item.actionUrl){
              navigate(item.actionUrl)
            
            }}}
          >
            <center>
                      <Button
          style={{
            width:"100%",
            borderTopLeftRadius:"10px",
            borderTopRightRadius:"10px",
            backgroundColor:"#0f62fe",
          }}
        
          >{item.title}</Button>
          {item.item}
          </center>
          </div>

        </Column>
      ))}
    </Grid>
  );
}

export default Homeboard;
