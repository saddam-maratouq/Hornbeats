import React from 'react';

import {Modal,Button} from 'react-bootstrap/'

import Card from 'react-bootstrap/Card' 






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


     

      <Modal show={false} onHide={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
        <Card.Title> {this.props.title}  </Card.Title>
                                                                            <Card.Img variant="top" src={this.props.hornIamge} />
                                                                            <Card.Body>
                                                                                <Card.Text>
                                                                               ❤ number of hourn = {this.state.NumberofHorn}  
                                                                                </Card.Text>
                                                                                <Button  onClick={this.increse} variant="primary"> Vote </Button>
                                                                            </Card.Body>
                                                                            
            
              </Modal.Body> 
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