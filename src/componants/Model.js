import React from 'react';

import {Modal,Button} from 'react-bootstrap/'
import Hornbeats from './Hornbeats';





class Model  extends React.Component{
   
   constructor (props) {

    super(props) 

    this.state ={
        show: false
    }
   }

   
   HandelClick = () => {
       
    this.setState  ({


        show : true
    })
   }
   
    render() {
   
        return(
  
      
   
        <div>


      <Button variant="primary" >
        Launch demo modal
      </Button>

      <Modal show={true} onHide={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>    </Modal.Body> 
        <Modal.Footer>
          <Button variant="secondary" onClick={true}>
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>    
      
        </div>
    )
    
}
 
}
  export default Model;