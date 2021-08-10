import React from 'react';
 HEAD




import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card' 

import Button from 'react-bootstrap/Button' 




class Hornbeats  extends React.Component{




    

    constructor(props){
       super (props) 
       this.state = {

            NumberofHorn : 0
       }


    }


    increse = ()=>{

            this.setState({

            NumberofHorn : this.state.NumberofHorn+1


            })
    }
    

    render(){

        return( 
  
            <div>


                <h2>    {this.props.title}         </h2> 

                {/* <h2>    {this.props.title}         </h2> 

        
                <img    onClick={this.increse} src={this.props.hornIamge}  
                 alt='hornImage'
                 width={this.props.width}
                 height={this.props.height}
                /> 

                    <p>  {this.props.descrbtion}            </p> 





                   

                        <p>  number of hourn ={this.state.NumberofHorn} </p> */}



                        <Card style={{ width: '18rem' }}>
                                                                                <Card.Title> {this.props.title}  </Card.Title>
                                                                            <Card.Img variant="top" src={this.props.hornIamge} />
                                                                            <Card.Body>
                                                                                <Card.Text>
                                                                               ❤ number of hourn = {this.state.NumberofHorn}  
                                                                                </Card.Text>
                                                                                <Button  onClick={this.increse} variant="primary"> Vote </Button>
                                                                            </Card.Body>
                                                                            </Card>
            </div>       
                
        )
    }


}





export default  Hornbeats;