/* eslint-disable array-callback-return */

import React from 'react';
import Header from './componants/Header.js';
import Main from './componants/Main';
import Footer from './componants/Footer.js';
import ImageData from "./componants/ImageData.json";
import Selctedbeat from "./componants/Selctedbeat";






class App extends React.Component{


    
constructor(props) {
    super(props);
    this.state = {
      show: false,
      selected:{}
    };
  }



gitTitle =title => {
    let beasts = ImageData.find( beast => {
      if (beast.title === title) {
        return beast;
      }
    });
    this.setState({
        selected: beasts,
      show: true,
    });
  };

   

      handleClose = () => {
        this.setState({
            selected: {},
          show: false,
        });
      };

render (){

return (
<div>


<Header/>
<Main     gitTitle={this.gitTitle}/   >

<Selctedbeat show={this.state.show} handleClose={this.handleClose} selectedeast={this.state.selected}  />

<Footer/> 

</div>
)

}

}

export default App;