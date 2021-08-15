import React from "react";
import {Modal, Button, Card} from "react-bootstrap/";





class Selctedbeat extends React.Component {

    

  render() {
    return (
      <div>

      <Modal  show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header>
          <Modal.Title>{this.props.selectedeast.title}</Modal.Title>
        </Modal.Header>
        <Card.Img variant="top" src={this.props.selectedeast.image_url} alt="picSelc" title="picSelc" />
        <Modal.Body>
            <Card.Text>{this.props.selectedeast.description}</Card.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default Selctedbeat;