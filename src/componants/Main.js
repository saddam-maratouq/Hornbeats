import React from 'react';

import './Main.css'

import Hornbeats from './Hornbeats';  

import Footer from './Footer'; 

import Model from './Model'

import ImageData from './ImageData.json'
 

class Main extends React.Component {
  render() {
  return(

    <div>   

          {ImageData.map( (item , idx    ) =>  {
                      
                return (
                    
                  <Hornbeats  title={item.tile}   
                
                            keyword={item.keyword}

                            hornIamge={item.image_url}

                            horns={item.horns} 

                            description={item.description} 
                            


                            />

                            
                       
                ) ;
                
          })} 






   <Model      hornIamge  = 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' 
                            />
   
                            <Footer/>

   </div>
  )
  }
}
export default Main ;