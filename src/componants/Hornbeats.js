import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Hornbeats extends React.Component{

constructor(props){
super(props);
this.state={

   NumberofHorn: 0
}

}

addToVote = ()=>{
this.setState({

   NumberofHorn: this.state.NumberofHorn+1
})

};

gitTitle=()=>{

  this.props.gitTitle(this.props.title);

};


    render (){
    
    return (
    
     <>
     <Card style={{ width: '18rem' }}  >
  <Card.Img variant="top" onClick={this.gitTitle} src={this.props.imgeUrl} />
  <Card.Body  onClick={this.gitTitle} >
    <Card.Title onClick={this.gitTitle}  >{this.props.title} </Card.Title>
    <Card.Text>
      
    </Card.Text>
  </ Card.Body>
  <Button variant="primary" onClick={this.addToVote} > Vote:</Button>
    <Card.Text> ❤ Number of hourn ={this.state.NumberofHorn}  </Card.Text>
</Card>
</>
   )
    
    }
}

export default Hornbeats;