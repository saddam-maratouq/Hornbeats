import React from "react";

import "./Main.css";

import Hornbeats from "./Hornbeats";


import Model from "./Model";

import ImageData from "./ImageData.json";

import MForm from "./Form";

import 'bootstrap/dist/css/bootstrap.min.css'; 




class Main extends React.Component {
  render() {
    return (
      <div>






<MForm/> 



        {/* {ImageData.map((item, idx) => {
          return (
            <Hornbeats
              title={item.tile}
              keyword={item.keyword}
              hornIamge={item.image_url}
              horns={item.horns}
              description={item.description}
            />
          );
        })} */}


        <Model hornIamge="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" />


      </div>
    );
  }
}
export default Main;
