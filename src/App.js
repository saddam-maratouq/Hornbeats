import React from 'react' ; 
import Header from './componants/Header.js';
import Main from './componants/Main.js';

import Footer from './componants/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';




 
class App extends React.Component{
  render() {
  return(

    <div>

     
      <Header/> 
      <Main/>

      <Footer/>

      </div>
  )
  }
}
export default App ;