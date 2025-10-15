import React from 'react';
import banner from "../../asset/banner.png"

const BannerPage = () => {


    return (
        <>
        <div className='banner'   >
        <img src={banner} alt='banner' height={200} width={200}
         style={{
            borderRadius:"100%", 
            border:"1px solid white",
            }}/>
        </div>
            
        </>
    );
}

export default BannerPage;
